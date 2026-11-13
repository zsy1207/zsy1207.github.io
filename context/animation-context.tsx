"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState, useSyncExternalStore, type ReactNode } from "react"
import { MotionConfig } from "framer-motion"

interface AnimationContextType {
  enabled: boolean
  toggleAnimations: () => void
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined)
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

function subscribeToMotionPreference(listener: () => void) {
  const media = window.matchMedia(REDUCED_MOTION_QUERY)
  media.addEventListener("change", listener)
  return () => media.removeEventListener("change", listener)
}

function getReducedMotionPreference() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

// Start without motion on the server and during hydration; never animate before
// the browser's accessibility preference is known.
function getServerPreference() { return true }

export function AnimationProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useSyncExternalStore(subscribeToMotionPreference, getReducedMotionPreference, getServerPreference)
  const [animationsRequested, setAnimationsRequested] = useState(true)
  const enabled = animationsRequested && !prefersReducedMotion
  const toggleAnimations = useCallback(() => setAnimationsRequested((previous) => !previous), [])
  const value = useMemo(() => ({ enabled, toggleAnimations }), [enabled, toggleAnimations])

  useEffect(() => {
    document.documentElement.dataset.motion = enabled ? "full" : "reduced"
  }, [enabled])

  return (
    <AnimationContext.Provider value={value}>
      <MotionConfig reducedMotion={enabled ? "never" : "always"} transition={{ duration: enabled ? 0.18 : 0, ease: [0.22, 1, 0.36, 1] }}>
        {children}
      </MotionConfig>
    </AnimationContext.Provider>
  )
}

export function useAnimation() {
  const context = useContext(AnimationContext)
  if (!context) throw new Error("useAnimation must be used within an AnimationProvider")
  return context
}
