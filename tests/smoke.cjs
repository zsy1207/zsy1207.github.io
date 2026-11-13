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

async function newPage(owner, options) {
  const page = await owner.newPage(options)
  if (cpuThrottle > 1) {
    const session = await page.context().newCDPSession(page)
    await session.send('Emulation.setCPUThrottlingRate', { rate: cpuThrottle })
  }
  return page
}

async function assertNoNewMobileOverflow(page, route) {
  await page.evaluate(() => document.fonts.ready)
  if (route !== '/publications') {
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${route}: no added mobile overflow`)
    return
  }

  // The original UI has one unbroken DOI link that overflows at 390px.
  // Its text width varies between browser/font engines; constrain the exact known
  // element instead of granting arbitrary overflow pixels to the entire page.
  const layout = await page.evaluate(() => {
    const knownHref = 'https://doi.org/10.1016/j.atmosres.2026.108949'
    const elements = Array.from(document.querySelectorAll('body *'))
    const describe = (element, rect) => ({
      tag: element.tagName,
      href: element.getAttribute('href'),
      left: rect.left,
      right: rect.right,
      width: rect.width,
    })
    const knownLinks = elements.filter((element) => element.tagName === 'A' && element.getAttribute('href') === knownHref)
    const unexpected = elements.flatMap((element) => Array.from(element.getClientRects())
      .filter((rect) => rect.left < -1 || rect.right > innerWidth + 1)
      .filter((rect) => !(knownLinks.includes(element) && rect.left >= -1))
      .map((rect) => describe(element, rect)))
    const knownRight = Math.max(innerWidth, ...knownLinks.flatMap((element) => Array.from(element.getClientRects()).map((rect) => rect.right)))
    return { viewport: innerWidth, scrollWidth: document.documentElement.scrollWidth, knownLinkCount: knownLinks.length, knownRight, unexpected }
  })
  const diagnostic = `${route}: no added mobile overflow ${JSON.stringify(layout)}`
  assert.equal(layout.knownLinkCount, 1, diagnostic)
  assert.deepEqual(layout.unexpected, [], diagnostic)
  assert.ok(layout.scrollWidth <= Math.ceil(layout.knownRight) + 1, diagnostic)
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}),
  })

  try {
    const page = await newPage(browser, { viewport: { width: 1440, height: 1000 } })
    const errors = []
    page.on('pageerror', (error) => errors.push(error.message))

    for (const route of routes) {
      const response = await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' })
      assert.equal(response.status(), 200, `${route}: response status`)
      assert.equal(await page.locator('main').count(), 1, `${route}: main landmark`)
      assert.ok((await page.locator('main').innerText()).trim(), `${route}: page content`)
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${route}: desktop overflow`)
      pass(`desktop ${route}`)
    }

    await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
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

    const themeControl = page.locator('header [role="button"], header button[aria-label*="theme"], header button[aria-label*="主题"], header button[aria-label*="mode"]').first()
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
    await page.getByText('Userscript', { exact: true }).first().click()
    await expect(researchProject).toHaveCount(0)
    await page.getByText('All', { exact: true }).click()
    await expect(researchProject).toBeVisible()
    pass('project tag filter and reset')

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

    for (const route of routes) {
      const response = await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' })
      assert.equal(response.status(), 200)
      await assertNoNewMobileOverflow(page, route)
      pass(`mobile ${route}`)
    }

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
    blockedPage.on('pageerror', (error) => errors.push(error.message))
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
    invalidPage.on('pageerror', (error) => errors.push(error.message))
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
      tab.on('pageerror', (error) => errors.push(error.message))
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
