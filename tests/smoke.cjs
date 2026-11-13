const assert = require('node:assert/strict')
const { chromium } = require('playwright')
const { expect: baseExpect } = require('playwright/test')

// Network idle does not imply React has restored preferences or committed input updates.
const expect = baseExpect.configure({ timeout: 15000 })
const cpuThrottle = Number(process.env.SMOKE_CPU_THROTTLE || 1)
assert.ok(Number.isFinite(cpuThrottle) && cpuThrottle >= 1, 'SMOKE_CPU_THROTTLE must be a number >= 1')

const baseURL = process.env.HOMEPAGE_TEST_URL || 'http://127.0.0.1:3000'
const routes = [
  '/', '/resume', '/research', '/publications', '/blogs',
  '/blogs/codex-remote-guide', '/projects', '/news',
]
const passed = []

function pass(name) {
  passed.push(name)
  console.log(`PASS ${name}`)
}

function collectBrowserErrors(page, errors) {
  page.on('pageerror', (error) => {
    const detail = { url: page.url(), message: error.message, stack: error.stack }
    errors.push(detail)
    console.error('BROWSER ERROR', JSON.stringify(detail))
  })
}

async function newPage(owner, options) {
  const page = await owner.newPage(options)
  if (cpuThrottle > 1) {
    const session = await page.context().newCDPSession(page)
    await session.send('Emulation.setCPUThrottlingRate', { rate: cpuThrottle })
  }
  return page
}

async function sampleThemeMotion(page) {
  const control = page.getByRole('button', { name: /Toggle color theme|切换明暗主题/ })
  const previous = await control.getAttribute('aria-pressed')
  const target = previous === 'true' ? 20 : 0
  const readX = () => control.evaluate((button) => {
    const thumb = button.querySelector('[aria-hidden="true"] > span')
    if (!thumb) throw new Error('Theme thumb missing')
    return new DOMMatrixReadOnly(getComputedStyle(thumb).transform).m41
  })
  await page.clock.runFor(32)
  const samples = [await readX()]
  await control.evaluate((button) => button.click())
  await expect(control).toHaveAttribute('aria-pressed', String(previous !== 'true'))
  // Advance the installed browser clock, not wall time, so CI CPU speed cannot
  // turn a valid 180ms animation into an unobserved jump between two frames.
  for (const elapsed of [16, 16, 32, 32, 32, 64, 64]) {
    await page.clock.runFor(elapsed)
    samples.push(await readX())
  }
  assert.ok(Math.abs(samples.at(-1) - target) < 0.01, `theme thumb settles at ${target}: ${JSON.stringify(samples)}`)
  return samples
}

async function assertNoNewMobileOverflow(page, route) {
  await page.evaluate(() => document.fonts.ready)
  const layout = await page.evaluate(() => ({
    viewport: innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    overflowing: Array.from(document.querySelectorAll('body *')).flatMap((element) =>
      Array.from(element.getClientRects())
        .filter((rect) => rect.right > innerWidth + 1 || rect.left < -1)
        .map((rect) => ({ tag: element.tagName, href: element.getAttribute('href'), left: rect.left, right: rect.right }))),
  }))
  assert.ok(layout.scrollWidth <= layout.viewport + 1, `${route}: mobile overflow ${JSON.stringify(layout)}`)
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}),
  })

  try {
    const page = await newPage(browser, { viewport: { width: 1440, height: 1000 } })
    const errors = []
    collectBrowserErrors(page, errors)

    for (const route of routes) {
      const response = await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' })
      assert.equal(response.status(), 200, `${route}: response status`)
      assert.equal(await page.locator('main').count(), 1, `${route}: main landmark`)
      assert.ok((await page.locator('main').innerText()).trim(), `${route}: page content`)
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${route}: desktop overflow`)
      pass(`desktop ${route}`)
    }

    await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
    await page.keyboard.press('Tab')
    const skipLink = page.getByRole('link', { name: 'Skip to content', exact: true })
    await expect(skipLink).toBeFocused()
    await expect(skipLink).toBeInViewport()
    await page.keyboard.press('Enter')
    await expect(page.locator('#main-content')).toBeFocused()
    pass('first Tab reveals the skip link and Enter focuses main content')

    await page.locator('header button').filter({ hasText: 'EN' }).click()
    await page.getByRole('menuitem', { name: '中文', exact: true }).click()
    await page.waitForFunction(() => localStorage.getItem('language') === 'zh')
    await expect(page.locator('main')).toContainText('我目前正在')
    const chineseContent = await page.locator('main').innerText()
    assert.match(chineseContent, /[\u4e00-\u9fff]/)
    await page.reload({ waitUntil: 'networkidle' })
    await expect.poll(() => page.locator('main').innerText()).toBe(chineseContent)
    pass('language selection survives reload')

    await page.locator('header button').filter({ hasText: '中文' }).click()
    await page.getByRole('menuitem', { name: 'English', exact: true }).click()
    await page.waitForFunction(() => localStorage.getItem('language') === 'en')
    await expect(page.locator('main')).toContainText('I am currently pursuing')
    pass('language switches back to English')

    const themeControl = page.getByRole('button', { name: /Toggle color theme|切换明暗主题/ })
    assert.equal(await themeControl.evaluate((control) => control.tagName), 'BUTTON')
    const wasDark = await page.locator('html').evaluate((html) => html.classList.contains('dark'))
    await themeControl.click()
    await page.waitForFunction((previous) => document.documentElement.classList.contains('dark') !== previous, wasDark)
    await page.reload({ waitUntil: 'networkidle' })
    await expect.poll(() => page.locator('html').evaluate((html) => html.classList.contains('dark'))).toBe(!wasDark)
    pass('theme selection survives reload')
    await themeControl.focus()
    await page.keyboard.press('Enter')
    await page.waitForFunction((expected) => document.documentElement.classList.contains('dark') === expected, wasDark)
    await page.keyboard.press('Space')
    await page.waitForFunction((expected) => document.documentElement.classList.contains('dark') === expected, !wasDark)
    pass('theme supports Enter and Space')

    for (const route of ['/blogs', '/projects']) {
      await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' })
      const search = page.locator('main input[type="search"]')
      const originalContent = await page.locator('main').innerText()
      await search.fill('zzznomatchzzzz')
      await expect.poll(() => page.locator('main').innerText()).not.toBe(originalContent)
      const emptyContent = await page.locator('main').innerText()
      assert.notEqual(emptyContent, originalContent, `${route}: search filters results`)
      assert.match(emptyContent, /no|没有|未找到/i, `${route}: empty state`)
      await search.fill('')
      await expect.poll(() => page.locator('main').innerText()).toBe(originalContent)
      pass(`${route} search and reset`)
    }

    const researchProject = page.locator('main a[href="https://github.com/zsy1207/atmospheric-science-research"]')
    await expect(researchProject).toBeVisible()
    const projectFilter = page.getByRole('button', { name: 'Userscript', exact: true })
    await projectFilter.focus()
    await page.keyboard.press('Enter')
    await expect(projectFilter).toHaveAttribute('aria-pressed', 'true')
    await expect(researchProject).toHaveCount(0)
    const allProjects = page.getByRole('button', { name: 'All', exact: true })
    await allProjects.focus()
    await page.keyboard.press('Space')
    await expect(allProjects).toHaveAttribute('aria-pressed', 'true')
    await expect(researchProject).toBeVisible()
    pass('project filters support Enter, Space, selected state, and reset')

    await page.goto(`${baseURL}/blogs`, { waitUntil: 'networkidle' })
    const blogFilter = page.getByRole('button', { name: 'Experience', exact: true })
    await blogFilter.focus()
    await page.keyboard.press('Enter')
    await expect(blogFilter).toHaveAttribute('aria-pressed', 'true')
    await page.getByRole('button', { name: 'All', exact: true }).click()
    await expect(blogFilter).toHaveAttribute('aria-pressed', 'false')
    pass('blog filters support keyboard selection and reset')

    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
    await page.getByRole('button', { name: 'Open Menu', exact: true }).click()
    await page.locator('header button').filter({ hasText: 'EN' }).click()
    await page.keyboard.press('Escape')
    await page.getByRole('menu').waitFor({ state: 'hidden' })
    await expect(page.getByRole('button', { name: 'Close Menu', exact: true })).toHaveAttribute('aria-expanded', 'true')
    pass('Escape dismisses only the topmost language dropdown')
    await page.keyboard.press('Escape')
    const menuButton = page.getByRole('button', { name: 'Open Menu', exact: true })
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    await expect(menuButton).toBeFocused()
    await page.keyboard.press('Enter')
    await expect(page.getByRole('button', { name: 'Close Menu', exact: true })).toHaveAttribute('aria-expanded', 'true')
    pass('mobile menu supports Escape and keyboard reopening')
    await page.locator('header nav:visible a[href="/resume"]').click()
    await page.waitForURL('**/resume')
    await expect(page.getByRole('button', { name: 'Open Menu', exact: true })).toHaveCount(1)
    pass('mobile menu closes after navigation')

    await menuButton.click()
    await page.locator('main h1').click()
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    pass('mobile menu closes on outside pointer interaction')

    await menuButton.click()
    await page.locator('header button').filter({ hasText: 'EN' }).click()
    await page.getByRole('menuitem', { name: '中文', exact: true }).click()
    await expect(page.getByRole('button', { name: 'Close Menu', exact: true })).toHaveAttribute('aria-expanded', 'true')
    await page.locator('header button').filter({ hasText: '中文' }).click()
    await page.getByRole('menuitem', { name: 'English', exact: true }).click()
    pass('language portal selection keeps the surrounding navigation open')

    await page.getByRole('button', { name: 'Close Menu', exact: true }).click()
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    await page.keyboard.press('Tab')
    assert.equal(await page.evaluate(() => Boolean(document.activeElement.closest('#mobile-navigation'))), false)
    pass('closing navigation is removed from keyboard order immediately')

    await menuButton.click()
    await page.setViewportSize({ width: 1280, height: 900 })
    await expect(page.locator('button[aria-controls="mobile-navigation"]')).toHaveAttribute('aria-expanded', 'false')
    await page.setViewportSize({ width: 390, height: 844 })
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    pass('desktop breakpoint resets the mobile menu')

    for (const route of routes) {
      const response = await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' })
      assert.equal(response.status(), 200)
      await assertNoNewMobileOverflow(page, route)
      pass(`mobile ${route}`)
    }

    await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
    await expect(page.locator('html')).toHaveAttribute('data-motion', 'full')
    const motionContext = await browser.newContext({ colorScheme: 'light' })
    const motionPage = await newPage(motionContext)
    collectBrowserErrors(motionPage, errors)
    // Install before loading Framer Motion so it captures the controlled RAF.
    await motionPage.clock.install()
    await motionPage.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
    await expect(motionPage.locator('html')).toHaveAttribute('data-motion', 'full')
    await motionPage.clock.pauseAt(await motionPage.evaluate(() => Date.now() + 1000))
    const animatedPositions = await sampleThemeMotion(motionPage)
    assert.ok(animatedPositions.some((position) => position > 0.01 && position < 19.99), `normal theme transition includes intermediate frames: ${JSON.stringify(animatedPositions)}`)
    pass('normal theme transition has real intermediate motion frames')
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await expect(page.locator('html')).toHaveAttribute('data-motion', 'reduced')
    const motion = await page.evaluate(() => Array.from(document.querySelectorAll('body *')).map((element) => {
      const style = getComputedStyle(element)
      return { tag: element.tagName, animation: style.animationDuration, transition: style.transitionDuration }
    }).filter(({ animation, transition }) => [...animation.split(','), ...transition.split(',')].some((duration) => parseFloat(duration) > 0.0001)))
    assert.deepEqual(motion, [], 'reduced motion disables animated CSS transitions')
    await page.getByRole('button', { name: 'Open Menu', exact: true }).click()
    await expect(page.getByRole('button', { name: 'Close Menu', exact: true })).toHaveAttribute('aria-expanded', 'true')
    await page.keyboard.press('Escape')
    const previousTheme = await themeControl.getAttribute('aria-pressed')
    await themeControl.click()
    await expect(themeControl).toHaveAttribute('aria-pressed', String(previousTheme !== 'true'))
    await motionPage.emulateMedia({ reducedMotion: 'reduce' })
    await expect(motionPage.locator('html')).toHaveAttribute('data-motion', 'reduced')
    const reducedPositions = await sampleThemeMotion(motionPage)
    assert.ok(reducedPositions.every((position) => Math.abs(position) < 0.01 || Math.abs(position - 20) < 0.01), `reduced motion jumps directly to the final thumb position: ${JSON.stringify(reducedPositions)}`)
    pass('reduced motion responds live and preserves menu/theme interactions')
    await page.emulateMedia({ reducedMotion: 'no-preference' })
    await expect(page.locator('html')).toHaveAttribute('data-motion', 'full')
    await motionPage.emulateMedia({ reducedMotion: 'no-preference' })
    await expect(motionPage.locator('html')).toHaveAttribute('data-motion', 'full')
    const restoredPositions = await sampleThemeMotion(motionPage)
    assert.ok(restoredPositions.some((position) => position > 0.01 && position < 19.99), `restored theme transition has intermediate frames: ${JSON.stringify(restoredPositions)}`)
    pass('normal motion can be restored without reload')
    await motionContext.close()

    const touchContext = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true })
    const touchPage = await newPage(touchContext)
    collectBrowserErrors(touchPage, errors)
    await touchPage.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
    for (const name of ['Toggle color theme', 'Select language', 'Open Menu']) {
      const bounds = await touchPage.getByRole('button', { name, exact: true }).boundingBox()
      assert.ok(bounds && bounds.width >= 44 && bounds.height >= 44, `${name}: 44px touch target ${JSON.stringify(bounds)}`)
    }
    pass('mobile header controls provide at least 44px touch targets')
    await touchContext.close()

    const initialThemeContext = await browser.newContext({ colorScheme: 'light' })
    await initialThemeContext.addInitScript(() => localStorage.setItem('theme', 'dark'))
    const initialThemePage = await newPage(initialThemeContext)
    // Keep the inline theme bootstrap but prevent React from restoring preferences.
    // This verifies the saved theme applies independently of hydration.
    await initialThemePage.route(/\/_next\/.*\.js(?:\?.*)?$/, (route) => route.abort())
    await initialThemePage.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
    await expect(initialThemePage.locator('html')).toHaveClass(/dark/)
    const background = await initialThemePage.locator('body').evaluate((body) => getComputedStyle(body).backgroundColor)
    const channels = background.match(/[\d.]+/g).slice(0, 3).map(Number)
    assert.ok(channels.every((channel) => channel < 40), `saved dark theme before hydration: ${background}`)
    pass('saved dark theme is applied before the client bundle loads')
    await initialThemeContext.close()

    const pdf = await page.request.get(`${baseURL}/${encodeURIComponent('周世扬_复旦大学_简历.pdf')}`)
    assert.equal(pdf.status(), 200)
    assert.equal((await pdf.body()).subarray(0, 4).toString(), '%PDF')
    pass('resume PDF download')

    const missing = await page.goto(`${baseURL}/blogs/does-not-exist`, { waitUntil: 'networkidle' })
    assert.equal(missing.status(), 404)
    pass('unknown article returns 404')

    const blockedStorage = await browser.newContext({ colorScheme: 'light' })
    await blockedStorage.addInitScript(() => {
      for (const method of ['getItem', 'setItem']) {
        Object.defineProperty(Storage.prototype, method, {
          value() { throw new DOMException('Storage is disabled', 'SecurityError') },
        })
      }
    })
    const blockedPage = await newPage(blockedStorage)
    collectBrowserErrors(blockedPage, errors)
    await blockedPage.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
    await blockedPage.locator('header button').filter({ hasText: 'EN' }).click()
    await blockedPage.getByRole('menuitem', { name: '中文', exact: true }).click()
    await blockedPage.locator('header button').filter({ hasText: '中文' }).waitFor({ state: 'visible' })
    await blockedPage.getByRole('button', { name: /Toggle color theme|切换明暗主题/ }).click()
    await blockedPage.waitForFunction(() => document.documentElement.classList.contains('dark'))
    pass('language and theme work when browser storage is disabled')
    await blockedStorage.close()

    const invalidStorage = await browser.newContext({ colorScheme: 'dark' })
    await invalidStorage.addInitScript(() => {
      localStorage.setItem('language', 'invalid-language')
      localStorage.setItem('theme', 'invalid-theme')
    })
    const invalidPage = await newPage(invalidStorage)
    collectBrowserErrors(invalidPage, errors)
    await invalidPage.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
    await expect(invalidPage.locator('header button').filter({ hasText: 'EN' })).toHaveCount(1)
    await expect(invalidPage.locator('main')).toContainText('I am currently pursuing')
    await expect.poll(() => invalidPage.locator('html').evaluate((html) => html.classList.contains('dark'))).toBe(true)
    pass('invalid saved values fall back to English and system theme')
    await invalidStorage.close()

    const sharedStorage = await browser.newContext({ colorScheme: 'light' })
    const firstTab = await newPage(sharedStorage)
    const secondTab = await newPage(sharedStorage)
    for (const tab of [firstTab, secondTab]) {
      collectBrowserErrors(tab, errors)
      await tab.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
    }
    await firstTab.locator('header button').filter({ hasText: 'EN' }).click()
    await firstTab.getByRole('menuitem', { name: '中文', exact: true }).click()
    await secondTab.locator('header button').filter({ hasText: '中文' }).waitFor({ state: 'visible' })
    await firstTab.getByRole('button', { name: /Toggle color theme|切换明暗主题/ }).click()
    await secondTab.waitForFunction(() => document.documentElement.classList.contains('dark'))
    await firstTab.evaluate(() => localStorage.clear())
    await secondTab.locator('header button').filter({ hasText: 'EN' }).waitFor({ state: 'visible' })
    await secondTab.waitForFunction(() => !document.documentElement.classList.contains('dark'))
    pass('preferences synchronize across tabs, including storage clearing')
    await sharedStorage.close()

    assert.deepEqual(errors, [], 'uncaught browser errors')
    pass('no uncaught browser errors')
    console.log(`${passed.length} browser checks passed against ${baseURL}`)
  } finally {
    await browser.close()
  }
}

main().catch((error) => {
  if (process.env.GITHUB_ACTIONS === 'true') {
    const message = `${error.message} (last passed: ${passed.at(-1) || 'none'})`
      .replaceAll('%', '%25').replaceAll('\r', '%0D').replaceAll('\n', '%0A')
    console.error(`::error title=Browser regression failure::${message}`)
  }
  console.error(error)
  process.exitCode = 1
})
