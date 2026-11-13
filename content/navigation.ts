interface NavItem {
  title: {
    en: string
    zh: string
  }
  href: string
}

export const NAV_ITEMS: NavItem[] = [
  { title: { en: "Home", zh: "首页" }, href: "/" },
  { title: { en: "Resume", zh: "简历" }, href: "/resume" },
  { title: { en: "Publications", zh: "出版物" }, href: "/publications" },
  { title: { en: "Blogs", zh: "博客" }, href: "/blogs" },
  { title: { en: "Projects", zh: "项目" }, href: "/projects" },
]

