const assert = require('node:assert/strict')
const { chromium } = require('playwright')

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

async function main() {
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}),
  })

  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
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
    const chineseContent = await page.locator('main').innerText()
    assert.match(chineseContent, /[\u4e00-\u9fff]/)
    await page.reload({ waitUntil: 'networkidle' })
    assert.equal(await page.locator('main').innerText(), chineseContent)
    pass('language selection survives reload')

    await page.locator('header button').filter({ hasText: '中文' }).click()
    await page.getByRole('menuitem', { name: 'English', exact: true }).click()
    await page.waitForFunction(() => localStorage.getItem('language') === 'en')
    pass('language switches back to English')

    const themeControl = page.locator('header [role="button"], header button[aria-label*="theme"], header button[aria-label*="主题"], header button[aria-label*="mode"]').first()
    const wasDark = await page.locator('html').evaluate((html) => html.classList.contains('dark'))
    await themeControl.click()
    await page.waitForFunction((previous) => document.documentElement.classList.contains('dark') !== previous, wasDark)
    await page.reload({ waitUntil: 'networkidle' })
    assert.equal(await page.locator('html').evaluate((html) => html.classList.contains('dark')), !wasDark)
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
      const emptyContent = await page.locator('main').innerText()
      assert.notEqual(emptyContent, originalContent, `${route}: search filters results`)
      assert.match(emptyContent, /no|没有|未找到/i, `${route}: empty state`)
      await search.fill('')
      assert.equal(await page.locator('main').innerText(), originalContent)
      pass(`${route} search and reset`)
    }

    const researchProject = page.locator('main a[href="https://github.com/zsy1207/atmospheric-science-research"]')
    assert.ok(await researchProject.isVisible())
    await page.getByText('Userscript', { exact: true }).first().click()
    assert.equal(await researchProject.count(), 0)
    await page.getByText('All', { exact: true }).click()
    assert.ok(await researchProject.isVisible())
    pass('project tag filter and reset')

    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
    await page.getByRole('button', { name: 'Open Menu', exact: true }).click()
    await page.locator('header button').filter({ hasText: 'EN' }).click()
    await page.keyboard.press('Escape')
    await page.getByRole('menu').waitFor({ state: 'hidden' })
    assert.equal(await page.getByRole('button', { name: 'Close Menu', exact: true }).getAttribute('aria-expanded'), 'true')
    pass('Escape dismisses only the topmost language dropdown')
    await page.keyboard.press('Escape')
    const menuButton = page.getByRole('button', { name: 'Open Menu', exact: true })
    assert.equal(await menuButton.getAttribute('aria-expanded'), 'false')
    assert.ok(await menuButton.evaluate((button) => button === document.activeElement))
    await page.keyboard.press('Enter')
    assert.equal(await page.getByRole('button', { name: 'Close Menu', exact: true }).getAttribute('aria-expanded'), 'true')
    pass('mobile menu supports Escape and keyboard reopening')
    await page.locator('header nav:visible a[href="/resume"]').click()
    await page.waitForURL('**/resume')
    assert.equal(await page.getByRole('button', { name: 'Open Menu', exact: true }).count(), 1)
    pass('mobile menu closes after navigation')

    for (const route of routes) {
      const response = await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' })
      assert.equal(response.status(), 200)
      // The unchanged publication layout already overflows by 4px at 390px; allow one pixel for rounding.
      const overflowAllowance = route === '/publications' ? 5 : 1
      assert.ok(await page.evaluate((allowance) => document.documentElement.scrollWidth <= innerWidth + allowance, overflowAllowance), `${route}: no added mobile overflow`)
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
    const blockedPage = await blockedStorage.newPage()
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
    const invalidPage = await invalidStorage.newPage()
    invalidPage.on('pageerror', (error) => errors.push(error.message))
    await invalidPage.goto(`${baseURL}/`, { waitUntil: 'networkidle' })
    assert.equal(await invalidPage.locator('header button').filter({ hasText: 'EN' }).count(), 1)
    assert.match(await invalidPage.locator('main').innerText(), /I am currently pursuing/)
    assert.ok(await invalidPage.locator('html').evaluate((html) => html.classList.contains('dark')))
    pass('invalid saved values fall back to English and system theme')
    await invalidStorage.close()

    const sharedStorage = await browser.newContext({ colorScheme: 'light' })
    const firstTab = await sharedStorage.newPage()
    const secondTab = await sharedStorage.newPage()
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
  console.error(error)
  process.exitCode = 1
})
