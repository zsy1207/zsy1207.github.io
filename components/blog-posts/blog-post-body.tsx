import ReactMarkdown from "react-markdown"
import { cn } from "@/lib/utils"

function normalizeCodeBlock(content: string) {
  const lines = content.replace(/\n$/, "").split("\n")

  while (lines[0] === "") lines.shift()
  while (lines[lines.length - 1] === "") lines.pop()

  return lines.filter((line, index) => !(line === "" && lines[index - 1] === "")).join("\n")
}

export function BlogPostBody({ markdown }: { markdown: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="mt-2 text-balance text-[1.75rem] font-semibold leading-tight tracking-display sm:text-[2.125rem]">
            {children}
          </h1>
        ),
        h3: ({ children }) => (
          <h3 className="mt-7 text-[17px] font-semibold tracking-tight">
            {children}
          </h3>
        ),
        h5: ({ children }) => (
          <h2 className="mt-9 border-t border-border/70 pt-6 text-xl font-semibold tracking-tight">
            {children}
          </h2>
        ),
        p: ({ children }) => (
          <p className="mt-3.5 text-[15px] leading-7 text-foreground/80 sm:text-base sm:leading-7">
            {children}
          </p>
        ),
        img: ({ src, alt }) => (
          // eslint-disable-next-line @next/next/no-img-element -- Markdown images have no known dimensions.
          <img
            src={src ?? ""}
            decoding="async"
            alt={alt ?? ""}
            className="mt-5 w-full rounded-lg border bg-muted/30 object-cover"
          />
        ),
        ul: ({ children }) => (
          <ul className="mt-3.5 list-disc space-y-1 pl-5 text-[15px] leading-7 text-foreground/80 marker:text-foreground/30 sm:text-base sm:leading-7">
            {children}
          </ul>
        ),
        li: ({ children }) => <li className="pl-1">{children}</li>,
        pre: ({ children }) => (
          <pre tabIndex={0} className="focus-ring mt-4 max-w-full overflow-x-auto overscroll-x-contain rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm leading-6 text-zinc-100 dark:bg-zinc-900/60">
            {children}
          </pre>
        ),
        code: ({ className, children, ...props }) => {
          const codeContent = String(children)
          const isBlock = Boolean(className) || codeContent.includes("\n")

          if (!isBlock) {
            return (
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.875em] text-foreground" {...props}>
                {children}
              </code>
            )
          }

          return (
            <code className={cn("font-mono text-[13px]", className)} {...props}>
              {normalizeCodeBlock(codeContent)}
            </code>
          )
        },
        a: ({ href, title, children }) => (
          <a href={href} title={title} className="interactive-link focus-ring rounded-sm text-foreground">
            {children}
          </a>
        ),
        strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
      }}
    >
      {markdown}
    </ReactMarkdown>
  )
}
