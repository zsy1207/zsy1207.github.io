"use client"

import { useState } from "react"
import ReactMarkdown from "react-markdown"
import { useLanguage } from "@/context/language-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import {
  ArrowLeft,
  BookOpen,
  BookText,
  DollarSign,
  Film,
  Globe,
  GraduationCap,
  Landmark,
  Pencil,
  School,
} from "lucide-react"

interface Tag {
  id: string
  name: {
    en: string
    zh: string
  }
}

interface BlogPost {
  id: string
  slug: string
  title: {
    en: string
    zh: string
  }
  date: string
  tags: string[]
  excerpt: {
    en: string
    zh: string
  }
}

const TAGS: Record<string, Tag> = {
  philosophy: {
    id: "philosophy",
    name: {
      en: "Philosophy",
      zh: "哲学",
    },
  },
  education: {
    id: "education",
    name: {
      en: "Education",
      zh: "教育",
    },
  },
  reading: {
    id: "reading",
    name: {
      en: "Reading",
      zh: "阅读",
    },
  },
  film: {
    id: "film",
    name: {
      en: "Film",
      zh: "电影",
    },
  },
  shanghai: {
    id: "shanghai",
    name: {
      en: "Shanghai",
      zh: "上海",
    },
  },
  culture: {
    id: "culture",
    name: {
      en: "Chinese Cinema",
      zh: "中国电影",
    },
  },
  critique: {
    id: "critique",
    name: {
      en: "Social Critique",
      zh: "社会评论",
    },
  },
  exam: {
    id: "exam",
    name: {
      en: "Graduate Exam",
      zh: "考研",
    },
  },
  experience: {
    id: "experience",
    name: {
      en: "Experience",
      zh: "经验",
    },
  },
  politics: {
    id: "politics",
    name: {
      en: "Politics",
      zh: "政治",
    },
  },
  economics: {
    id: "economics",
    name: {
      en: "Economics",
      zh: "经济",
    },
  },
  usa: {
    id: "usa",
    name: {
      en: "USA",
      zh: "美国",
    },
  },
  expression: {
    id: "expression",
    name: {
      en: "Expression",
      zh: "表达",
    },
  },
}

const USE_GUIDE_SOURCE = String.raw`
# Codex 远程连接HPC指南

##### 一.前提条件

本地的 codex app 更新到最新版，服务器端的 codex 保持在 0.121 版本以上。可以先执行 npm install -g @openai/codex@0.121.0，再把本地的 auth.json 替换到服务器端的 ~/.codex/auth.json。如果过程中报错，先确认版本和认证文件是否一致。

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

const USE_GUIDE_POST: BlogPost = {
  id: "codex-remote-guide",
  slug: "codex-remote-guide",
  title: {
    en: "Codex Remote HPC Guide",
    zh: "Codex 远程连接HPC指南",
  },
  date: "2026-04-17",
  tags: ["experience", "expression"],
  excerpt: {
    en: "From SSH keys and port forwarding to Codex remote access, this guide turns the original notes into a cleaner HPC workflow walkthrough.",
    zh: "从密钥登录、端口转发到 Codex 远程连接，把 use.md 原文整理成一篇更适合阅读的博客文章。",
  },
}

const BLOG_POSTS: BlogPost[] = [USE_GUIDE_POST]

function formatUseGuideMarkdown(source: string) {
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

function getTagIcon(tagId: string) {
  switch (tagId) {
    case "reading":
      return <BookOpen className="h-3 w-3" />
    case "philosophy":
      return <BookText className="h-3 w-3" />
    case "education":
      return <School className="h-3 w-3" />
    case "film":
      return <Film className="h-3 w-3" />
    case "shanghai":
      return <School className="h-3 w-3" />
    case "critique":
      return <Pencil className="h-3 w-3" />
    case "exam":
      return <GraduationCap className="h-3 w-3" />
    case "experience":
      return <BookOpen className="h-3 w-3" />
    case "politics":
      return <Landmark className="h-3 w-3" />
    case "economics":
      return <DollarSign className="h-3 w-3" />
    case "usa":
      return <Globe className="h-3 w-3" />
    case "expression":
      return <Pencil className="h-3 w-3" />
    default:
      return null
  }
}

const USE_GUIDE_MARKDOWN = formatUseGuideMarkdown(USE_GUIDE_SOURCE)

function CodexRemoteGuidePost({
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
                {USE_GUIDE_MARKDOWN}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default function BlogPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [selectedPostSlug, setSelectedPostSlug] = useState<string | null>(null)
  const languageKey = language === "en" ? "en" : "zh"

  if (selectedPostSlug === USE_GUIDE_POST.slug) {
    return <CodexRemoteGuidePost language={languageKey} onBack={() => setSelectedPostSlug(null)} />
  }

  const allTagIds = Array.from(new Set(BLOG_POSTS.flatMap((post) => post.tags)))

  const filteredPosts = [...BLOG_POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((post) => {
      const title = post.title[languageKey].toLowerCase()
      const excerpt = post.excerpt[languageKey].toLowerCase()
      const query = searchQuery.toLowerCase()
      const matchesSearch = title.includes(query) || excerpt.includes(query)
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true

      return matchesSearch && matchesTag
    })

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{languageKey === "en" ? "Blogs" : "博客"}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {languageKey === "en"
              ? "Writing, notes, and practical guides."
              : "记录阅读、思考与实践经验。"}
          </p>
        </div>

        <Input
          type="search"
          placeholder={languageKey === "en" ? "Search posts..." : "搜索文章..."}
          className="w-full md:w-[260px]"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <Badge
          variant={selectedTag === null ? "default" : "outline"}
          className="cursor-pointer rounded-full px-3 py-1"
          onClick={() => setSelectedTag(null)}
        >
          {languageKey === "en" ? "All" : "全部"}
        </Badge>
        {allTagIds.map((tagId) => (
          <Badge
            key={tagId}
            variant={selectedTag === tagId ? "default" : "outline"}
            className="cursor-pointer rounded-full px-3 py-1"
            onClick={() => setSelectedTag(tagId)}
          >
            {TAGS[tagId]?.name[languageKey] ?? tagId}
          </Badge>
        ))}
      </div>

      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="group overflow-hidden">
            <button
              type="button"
              className="block w-full p-6 text-left sm:p-8"
              onClick={() => setSelectedPostSlug(post.slug)}
            >
              <h2 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-foreground">
                {post.title[languageKey]}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tagId) => (
                  <Badge key={tagId} variant="outline" className="rounded-full bg-background/80 px-3 py-1">
                    <span className="flex items-center gap-1.5">
                      {getTagIcon(tagId)}
                      <span>{TAGS[tagId]?.name[languageKey] ?? tagId}</span>
                    </span>
                  </Badge>
                ))}
              </div>

              <div className="mt-3 text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString(languageKey === "en" ? "en-US" : "zh-CN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                {post.excerpt[languageKey]}
              </p>

              <div className="mt-6 inline-flex items-center text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                {languageKey === "en" ? "Read more" : "阅读更多"}
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </button>
          </Card>
        ))}

        {filteredPosts.length === 0 && (
          <Card>
            <CardContent className="py-14 text-center">
              <p className="text-muted-foreground">
                {languageKey === "en" ? "No posts found." : "未找到文章。"}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  )
}


