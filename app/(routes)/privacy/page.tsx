import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the shiyang-mcp OAuth application.",
}

const sections = [
  {
    heading: "What shiyang-mcp is",
    body: "shiyang-mcp is a personal OAuth application operated by Shiyang Zhou. It lets AI assistants (such as Claude, Codex, ChatGPT and Meta AI) connect to a Google Colab account through Google's Colab MCP server.",
  },
  {
    heading: "What data is accessed",
    body: "When you sign in, Google grants the connecting AI assistant an access token for the scopes shown on the consent screen. The assistant uses it to create and manage Colab runtimes and run code on your behalf. The operator of shiyang-mcp runs no server that receives, stores or processes your Google data or tokens.",
  },
  {
    heading: "Where data goes",
    body: "Tokens and the data you work with are handled by Google and by the AI assistant you connect, under their own privacy policies. shiyang-mcp does not sell, share or transfer your data to anyone else.",
  },
]

export default function PrivacyPageRoute() {
  return (
    <>
      <PageHeader title="Privacy Policy" description="shiyang-mcp · Last updated November 19, 2026" />
      <div className="space-y-6 text-[15px] leading-[1.6] text-foreground/75">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-semibold text-foreground">{section.heading}</h2>
            <p className="mt-1">{section.body}</p>
          </section>
        ))}
        <section>
          <h2 className="font-semibold text-foreground">Revoking access</h2>
          <p className="mt-1">
            You can revoke access at any time at{" "}
            <a className="underline underline-offset-2" href="https://myaccount.google.com/permissions">
              myaccount.google.com/permissions
            </a>
            , or by disconnecting the connector in the AI assistant.
          </p>
        </section>
        <section>
          <h2 className="font-semibold text-foreground">Contact</h2>
          <p className="mt-1">
            <a className="underline underline-offset-2" href="mailto:zhoushiyang1207@gmail.com">
              zhoushiyang1207@gmail.com
            </a>
          </p>
        </section>
      </div>
    </>
  )
}
