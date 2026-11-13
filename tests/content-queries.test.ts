import assert from "node:assert/strict"
import test from "node:test"
import { filterBlogPosts, filterProjects } from "../lib/content-queries"

const posts = [
  {
    id: "ocean",
    date: "2025-12-31",
    title: { en: "Ocean observations", zh: "海洋观测" },
    excerpt: { en: "Field notes from a winter cruise.", zh: "冬季航次的现场记录。" },
    tags: ["experience"],
  },
  {
    id: "codex",
    date: "2026-04-17",
    title: { en: "Codex Remote Guide", zh: "Codex 远程指南" },
    excerpt: { en: "A practical HPC workflow.", zh: "高性能计算的实践工作流。" },
    tags: ["experience", "expression"],
  },
  {
    id: "climate",
    date: "2026-01-02",
    title: { en: "Climate notes", zh: "气候笔记" },
    excerpt: { en: "Interpreting ocean temperature changes.", zh: "理解海洋温度变化。" },
    tags: ["expression"],
  },
]

const projects = [
  {
    title: "OceanTools",
    description: { en: "Process field measurements.", zh: "处理海洋观测数据。" },
    tags: [{ en: "Science", zh: "科学" }],
  },
  {
    title: "CodexWorkflows",
    description: { en: "Automate climate research.", zh: "自动化气候研究。" },
    tags: [{ en: "Science", zh: "科学" }, { en: "Automation", zh: "自动化" }],
  },
]

const defaultFilters = { language: "en" as const, searchQuery: "", selectedTag: null }
const postIds = (entries: typeof posts) => entries.map(({ id }) => id)
const projectTitles = (entries: typeof projects) => entries.map(({ title }) => title)

test("blog results are newest first across year boundaries, with stable order for equal dates", () => {
  const entries = [...posts, { ...posts[1], id: "same-date" }]
  const result = filterBlogPosts({ ...defaultFilters, posts: entries })
  assert.deepEqual(postIds(result), ["codex", "same-date", "climate", "ocean"])
})

test("blog search matches title or excerpt without case sensitivity", () => {
  assert.deepEqual(postIds(filterBlogPosts({ ...defaultFilters, posts, searchQuery: "cOdEx" })), ["codex"])
  assert.deepEqual(postIds(filterBlogPosts({ ...defaultFilters, posts, searchQuery: "OCEAN" })), ["climate", "ocean"])
})

test("blog search uses the selected language rather than silently matching a translation", () => {
  assert.deepEqual(postIds(filterBlogPosts({ ...defaultFilters, posts, language: "zh", searchQuery: "海洋" })), ["climate", "ocean"])
  assert.deepEqual(filterBlogPosts({ ...defaultFilters, posts, language: "en", searchQuery: "海洋" }), [])
})

test("blog topic and query filters must both match", () => {
  assert.deepEqual(postIds(filterBlogPosts({ ...defaultFilters, posts, searchQuery: "ocean", selectedTag: "expression" })), ["climate"])
  assert.deepEqual(filterBlogPosts({ ...defaultFilters, posts, searchQuery: "codex", selectedTag: "unknown" }), [])
  assert.deepEqual(filterBlogPosts({ ...defaultFilters, posts, searchQuery: "absent" }), [])
})

test("blog search keeps literal whitespace and does not introduce token or tag searching", () => {
  assert.deepEqual(filterBlogPosts({ ...defaultFilters, posts, searchQuery: "  codex  " }), [])
  assert.deepEqual(filterBlogPosts({ ...defaultFilters, posts, searchQuery: "ocean notes" }), [])
  assert.deepEqual(filterBlogPosts({ ...defaultFilters, posts, searchQuery: "experience" }), [])
})

test("blog queries never reorder or modify the source collection", () => {
  const before = structuredClone(posts)
  const immutableOrder = Object.freeze([...posts])
  const result = filterBlogPosts({ ...defaultFilters, posts: immutableOrder })
  assert.deepEqual(posts, before)
  assert.deepEqual(immutableOrder.map(({ id }) => id), ["ocean", "codex", "climate"])
  assert.notEqual(result, immutableOrder)
  assert.equal(result[0], posts[1])
})

test("project search preserves its existing trimming and case-insensitive substring behavior", () => {
  assert.deepEqual(projectTitles(filterProjects({ ...defaultFilters, projects, searchQuery: "  oCeAn  " })), ["OceanTools"])
  assert.deepEqual(projectTitles(filterProjects({ ...defaultFilters, projects, searchQuery: "CLIMATE" })), ["CodexWorkflows"])
  assert.deepEqual(projectTitles(filterProjects({ ...defaultFilters, projects, searchQuery: "   " })), ["OceanTools", "CodexWorkflows"])
})

test("project descriptions use the selected language and combine with topic selection", () => {
  assert.deepEqual(projectTitles(filterProjects({ ...defaultFilters, projects, language: "zh", searchQuery: "研究", selectedTag: "Automation" })), ["CodexWorkflows"])
  assert.deepEqual(filterProjects({ ...defaultFilters, projects, language: "en", searchQuery: "研究" }), [])
  assert.deepEqual(filterProjects({ ...defaultFilters, projects, language: "zh", searchQuery: "海洋", selectedTag: "Automation" }), [])
})

test("project topic identifiers remain case-sensitive English keys and are not search text", () => {
  assert.deepEqual(projectTitles(filterProjects({ ...defaultFilters, projects, language: "zh", selectedTag: "Science" })), ["OceanTools", "CodexWorkflows"])
  assert.deepEqual(filterProjects({ ...defaultFilters, projects, selectedTag: "science" }), [])
  assert.deepEqual(filterProjects({ ...defaultFilters, projects, selectedTag: "科学" }), [])
  assert.deepEqual(filterProjects({ ...defaultFilters, projects, searchQuery: "Science" }), [])
})

test("project filtering keeps source order and leaves the original data unchanged", () => {
  const before = structuredClone(projects)
  const immutableOrder = Object.freeze([...projects])
  const result = filterProjects({ ...defaultFilters, projects: immutableOrder, selectedTag: "Science" })
  assert.deepEqual(projectTitles(result), ["OceanTools", "CodexWorkflows"])
  assert.deepEqual(projects, before)
  assert.notEqual(result, immutableOrder)
  assert.equal(result[0], projects[0])
})

test("empty collections, unknown topics, and unmatched text return empty results", () => {
  assert.deepEqual(filterBlogPosts({ ...defaultFilters, posts: [] }), [])
  assert.deepEqual(filterProjects({ ...defaultFilters, projects: [] }), [])
  assert.deepEqual(filterProjects({ ...defaultFilters, projects, selectedTag: "unknown" }), [])
  assert.deepEqual(filterProjects({ ...defaultFilters, projects, searchQuery: "absent" }), [])
})
