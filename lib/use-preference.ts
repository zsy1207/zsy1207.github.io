"use client"

import { useCallback, useEffect, useState } from "react"

// Read after hydration; persist only deliberate changes, never the SSR default.
export function usePreference<T extends string>(key: string, initial: T, values: readonly T[], fallback?: () => T) {
  const [value, setValue] = useState<T>(initial)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    function read() {
      let stored: string | null = null
      try { stored = window.localStorage.getItem(key) } catch { /* Storage can be disabled. */ }
      setValue(values.includes(stored as T) ? stored as T : fallback?.() ?? initial)
      setReady(true)
    }
    function sync(event: StorageEvent) {
      if (event.key === key || event.key === null) read()
    }
    read()
    window.addEventListener("storage", sync)
    return () => window.removeEventListener("storage", sync)
  }, [key, initial, values, fallback])

  const update = useCallback((next: T) => {
    setValue(next)
    try { window.localStorage.setItem(key, next) } catch { /* Keep the current session usable. */ }
  }, [key])

  return { value, update, ready }
}
