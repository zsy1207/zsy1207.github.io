"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
}

async function copyText(text: string): Promise<boolean> {
  try {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    // Fall back to execCommand when Clipboard API is unavailable or denied.
  }

  if (typeof document === "undefined") return false

  try {
    const textarea = document.createElement("textarea")
    textarea.value = text
    textarea.setAttribute("readonly", "")
    textarea.style.position = "fixed"
    textarea.style.opacity = "0"
    textarea.style.pointerEvents = "none"
    document.body.appendChild(textarea)
    textarea.select()
    const ok = document.execCommand("copy")
    document.body.removeChild(textarea)
    return ok
  } catch {
    return false
  }
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const { language: uiLanguage } = useLanguage()
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  async function handleCopy() {
    const ok = await copyText(code)
    if (!ok) return

    setCopied(true)
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = window.setTimeout(() => {
      setCopied(false)
      timeoutRef.current = null
    }, 2000)
  }

  const label = language?.trim() || "code"
  const copyLabel = uiLanguage === "en" ? "Copy" : "复制"
  const copiedLabel = uiLanguage === "en" ? "Copied" : "已复制"

  return (
    <div className="my-5 max-w-full overflow-hidden rounded-xl border border-border/85 bg-card/85 shadow-[0_2px_10px_-6px_hsl(var(--foreground)/0.08)] dark:bg-card/95">
      <div className="flex items-center justify-between gap-3 border-b border-border/75 bg-secondary/80 px-4 py-2 text-xs text-muted-foreground dark:bg-secondary/55">
        <span className="select-none truncate font-mono tracking-normal">{label}</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? copiedLabel : uiLanguage === "en" ? `Copy ${label} code` : `复制 ${label} 代码`}
          className="focus-ring inline-flex shrink-0 items-center gap-1.5 rounded px-2 py-1 text-xs font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-accent-ink" aria-hidden="true" />
          ) : (
            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
          )}
          <span>{copied ? copiedLabel : copyLabel}</span>
        </button>
      </div>
      <pre
        tabIndex={0}
        className="focus-ring max-w-full overflow-x-auto overscroll-x-contain whitespace-pre px-4 py-3.5 text-[13.5px] leading-[1.65] text-foreground/[0.92] [overflow-wrap:normal]"
      >
        <code className={cn("font-mono", language && `language-${language}`)}>{code}</code>
      </pre>
    </div>
  )
}
