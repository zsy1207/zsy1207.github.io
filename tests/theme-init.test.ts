import assert from "node:assert/strict"
import { test } from "node:test"
import { runInNewContext } from "node:vm"
import { THEME_INIT_SCRIPT } from "../lib/theme-init"

function initialTheme(stored: string | null, systemDark: boolean, storageBlocked = false) {
  const updates: { name: string; enabled: boolean }[] = []
  runInNewContext(THEME_INIT_SCRIPT, {
    localStorage: {
      getItem(key: string) {
        assert.equal(key, "theme")
        if (storageBlocked) throw new Error("Storage unavailable")
        return stored
      },
      setItem() { throw new Error("Theme bootstrap must not overwrite a preference") },
    },
    matchMedia(query: string) {
      assert.equal(query, "(prefers-color-scheme: dark)")
      return { matches: systemDark }
    },
    document: { documentElement: { classList: {
      toggle(name: string, enabled: boolean) { updates.push({ name, enabled }) },
    } } },
  })
  assert.equal(updates.length, 1)
  assert.equal(updates[0].name, "dark")
  return updates[0].enabled
}

test("saved dark preference is applied synchronously before hydration", () => {
  assert.equal(initialTheme("dark", false), true)
})

test("saved light preference overrides a dark operating-system preference", () => {
  assert.equal(initialTheme("light", true), false)
})

test("a missing preference follows the operating system", () => {
  assert.equal(initialTheme(null, true), true)
  assert.equal(initialTheme(null, false), false)
})

test("invalid stored values are ignored rather than treated as a theme", () => {
  assert.equal(initialTheme("invalid", true), true)
  assert.equal(initialTheme("invalid", false), false)
})

test("unavailable local storage does not break the first paint", () => {
  assert.equal(initialTheme(null, true, true), true)
  assert.equal(initialTheme(null, false, true), false)
})
