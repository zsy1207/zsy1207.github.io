"use client"

import ReactMarkdown from "react-markdown"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const CODEX_REMOTE_HPC_GUIDE_SOURCE = String.raw`
# Codex 远程连接HPC指南

##### 全文总结

![Codex 远程连接HPC指南全文总结](/blog/blog1.png)

##### 一.前提条件

本地的 codex app 更新到最新版（去微软商店更新），服务器端的 codex 在 0.121 版本以上（npm install -g @openai/codex@0.121.0），用本地的 .codex/auth.json 替换到服务器端的 ~/.codex/auth.json，遇到报错去问 AI。

##### 二.设置密钥登录

我这里直接用 Windows 作为客户端、Linux 服务器作为目标来讲，这是最常见的场景。如果你用的是 mac，步骤类似，按自己的系统环境调整即可。

### 2.1 生成密钥

如果你的 Windows 里没有 ssh 命令，先在系统“可选功能”里安装 **OpenSSH Client**。然后执行下面这条命令生成密钥：

~~~powershell
ssh-keygen -t ed25519 -C "my-pc"
~~~

一路回车即可。生成后一般会有这两个文件：

* 私钥：C:\\Users\\你的用户名\\.ssh\\id_ed25519
* 公钥：C:\\Users\\你的用户名\\.ssh\\id_ed25519.pub

### 2.2 把私钥交给 ssh-agent

Windows 的 ssh-agent 服务默认是禁用的。启用后，登录时就不用每次手动指定私钥。

~~~powershell
Get-Service ssh-agent | Set-Service -StartupType Automatic
Start-Service ssh-agent
ssh-add $env:USERPROFILE\.ssh\id_ed25519
~~~

### 2.3 把公钥放到服务器

先在 Linux 服务器上执行：

~~~bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
~~~

再在 Windows 上查看公钥内容：

~~~powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub
~~~

把输出的整行内容复制到服务器的 ~/.ssh/authorized_keys 里，一行一个公钥。

### 2.4 测试登录

~~~powershell
ssh user@server-ip
~~~

如果你不是默认文件名，就显式指定：

~~~powershell
ssh -i $env:USERPROFILE\.ssh\id_ed25519 user@server-ip
~~~

如果失败，可以加上 -v 查看详细认证过程：

~~~powershell
ssh -v user@server-ip
~~~

##### 三.设置端口转发

服务器里打开 ~/.bashrc，加入：

~~~bash
export http_proxy=http://127.0.0.1:1xxxx
export https_proxy=http://127.0.0.1:1xxxx
export HTTP_PROXY="$http_proxy"
export HTTPS_PROXY="$https_proxy"
export no_proxy=localhost,127.0.0.1,::1
export NO_PROXY="$no_proxy"
~~~

这里的 1xxxx 可以替换成任意五位数字。http_proxy 和 https_proxy 保持一致即可；如果这台电脑还要给其他服务器配置同类端口转发，请使用不同的端口，避免冲突。

##### 四.修改C:\\Users\\你的用户名\\.ssh\\config

codex 读取的是这个 config，在这里写好设置；如果本来没有，请先创建一个。

~~~ssh-config
Host xxx
  HostName 10.1xx.2xx.1xx
  User xxx
  Port xxx22
  IdentityFile "C:\Users\你的用户名\.ssh\id_ed25519"
  IdentitiesOnly yes
  RemoteForward 1xxxx 127.0.0.1:7897
~~~

Host 随便填。

HostName 填 IP。

User 和 Port 填用户名和端口。

IdentityFile 改成前一步生成的私钥存放位置。

RemoteForward 前面的 1xxxx 就是上一步设置的端口，后面的 7897 换成你梯子的端口，Clash Verge 默认是 7897。

##### 五.在codex里连接

点击“设置 -> 设置 -> 连接”，手动开启连接，然后创建远程项目。接下来就可以开始用了。

##### 六.友情提示

codex 运行有很大的自主性，一般会自动运行脚本。务必在 AGENTS.md 中明确强调不要直接运行脚本。
`

function formatMarkdown(source: string) {
  return source.trim().replace(/\r\n/g, "\n")
}

function normalizeCodeBlock(content: string) {
  const lines = content.replace(/\n$/, "").split("\n")

  while (lines[0] === "") {
    lines.shift()
  }

  while (lines[lines.length - 1] === "") {
    lines.pop()
  }

  return lines.filter((line, index) => !(line === "" && lines[index - 1] === "")).join("\n")
}

const CODEX_REMOTE_HPC_GUIDE_MARKDOWN = formatMarkdown(CODEX_REMOTE_HPC_GUIDE_SOURCE)

export function CodexRemoteHpcGuidePost({
  language,
  onBack,
}: {
  language: "en" | "zh"
  onBack: () => void
}) {
  return (
    <div className="mx-auto max-w-5xl">
      <Button variant="ghost" className="mb-6 gap-2 px-2" onClick={onBack}>
        <ArrowLeft className="h-4 w-4" />
        {language === "en" ? "Back to all posts" : "返回所有文章"}
      </Button>

      <article className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="px-6 py-8 sm:px-10 sm:py-12">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="mt-0 text-center text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                      {children}
                    </h1>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mt-10 text-lg font-semibold tracking-tight">
                      {children}
                    </h3>
                  ),
                  h5: ({ children }) => (
                    <h2 className="mt-14 border-l-4 border-foreground/15 pl-4 text-lg font-semibold tracking-tight sm:text-2xl">
                      {children}
                    </h2>
                  ),
                  p: ({ children }) => (
                    <p className="mt-5 text-[15px] leading-8 text-foreground/85 sm:text-base">
                      {children}
                    </p>
                  ),
                  img: ({ src, alt }) => (
                    <img
                      src={src ?? ""}
                      alt={alt ?? ""}
                      className="mt-6 w-full rounded-2xl border border-border/70 bg-muted/30 object-cover shadow-sm"
                    />
                  ),
                  ul: ({ children }) => (
                    <ul className="mt-5 space-y-3 pl-6 text-[15px] leading-8 marker:text-foreground/35 sm:text-base">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => <li className="pl-1">{children}</li>,
                  pre: ({ children }) => (
                    <pre className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 px-5 py-4 text-sm leading-7 text-slate-100 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.9)]">
                      {children}
                    </pre>
                  ),
                  code: ({ className, children, ...props }) => {
                    const codeContent = String(children)
                    const isBlock = Boolean(className) || codeContent.includes("\n")

                    if (!isBlock) {
                      return (
                        <code
                          className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-foreground"
                          {...props}
                        >
                          {children}
                        </code>
                      )
                    }

                    return (
                      <code className={cn("font-mono text-[13px] sm:text-sm", className)} {...props}>
                        {normalizeCodeBlock(codeContent)}
                      </code>
                    )
                  },
                  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                }}
              >
                {CODEX_REMOTE_HPC_GUIDE_MARKDOWN}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
