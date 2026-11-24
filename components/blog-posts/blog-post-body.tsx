import { isValidElement, type ReactElement, type ReactNode } from "react"
import ReactMarkdown from "react-markdown"
import { CodeBlock } from "@/components/blog-posts/code-block"

function normalizeCodeBlock(content: string) {
  const lines = content.replace(/\n$/, "").split("\n")

  while (lines[0] === "") lines.shift()
  while (lines[lines.length - 1] === "") lines.pop()

  return lines.filter((line, index) => !(line === "" && lines[index - 1] === "")).join("\n")
}

function extractText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(extractText).join("")
  if (isValidElement<{ children?: ReactNode }>(node)) return extractText(node.props.children)
  return ""
}

export function BlogPostBody({ markdown }: { markdown: string }) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="mt-2.5 text-balance text-[1.875rem] font-semibold leading-[1.15] tracking-display text-foreground sm:text-[2.25rem]">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="mt-10 border-t border-border/75 pt-7 text-lg font-semibold leading-snug tracking-tight text-foreground">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="mt-7 text-base font-semibold tracking-tight text-foreground">
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4 className="mt-5 text-base font-medium text-foreground">
            {children}
          </h4>
        ),
        h5: ({ children }) => (
          <h2 className="mt-10 border-t border-border/75 pt-7 text-lg font-semibold leading-snug tracking-tight text-foreground">
            {children}
          </h2>
        ),
        p: ({ children }) => (
          <p className="mt-4 text-base prose-leading text-foreground/[0.82]">
            {children}
          </p>
        ),
        img: ({ src, alt }) => (
          // eslint-disable-next-line @next/next/no-img-element -- Markdown images have no known dimensions.
          <img
            src={src ?? ""}
            decoding="async"
            alt={alt ?? ""}
            className="mt-6 w-full rounded-xl border border-border/75 bg-card object-cover p-1.5 shadow-[0_8px_24px_-14px_hsl(var(--foreground)/0.12)]"
          />
        ),
        ul: ({ children }) => (
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-base prose-leading text-foreground/[0.82] marker:text-muted-foreground/60">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-base prose-leading text-foreground/[0.82] marker:text-muted-foreground/60">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="pl-1">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="mt-5 border-l-2 border-accent-ink/50 pl-4 text-base prose-leading text-muted-foreground [&>p:first-child]:mt-0">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="my-8 border-border/75" />,
        table: ({ children }) => (
          <div className="my-6 max-w-full overflow-x-auto overscroll-x-contain">
            <table className="w-full border-collapse text-left text-sm leading-relaxed">
              {children}
            </table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="border-b border-border/85 text-foreground">{children}</thead>
        ),
        tbody: ({ children }) => (
          <tbody className="divide-y divide-border/70 text-foreground/[0.82]">{children}</tbody>
        ),
        th: ({ children }) => (
          <th className="py-2.5 pr-4 font-semibold tracking-tight first:pl-0 last:pr-0">{children}</th>
        ),
        td: ({ children }) => (
          <td className="py-2.5 pr-4 align-top first:pl-0 last:pr-0">{children}</td>
        ),
        pre: ({ children }) => {
          const codeElement = isValidElement<{ className?: string; children?: ReactNode }>(children)
            ? children
            : Array.isArray(children)
              ? children.find(
                  (child): child is ReactElement<{ className?: string; children?: ReactNode }> =>
                    isValidElement(child),
                )
              : undefined

          const className = codeElement?.props.className ?? ""
          const language = /language-([^\s]+)/.exec(className)?.[1]
          const rawCode = codeElement ? extractText(codeElement.props.children) : extractText(children)

          return <CodeBlock code={normalizeCodeBlock(rawCode)} language={language} />
        },
        code: ({ children }) => (
          <code className="rounded-md border border-border/60 bg-secondary/80 px-1.5 py-0.5 font-mono text-[0.875em] text-foreground">
            {children}
          </code>
        ),
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
