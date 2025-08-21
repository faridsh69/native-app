import type { IImageSize } from './commonUITypes'

export interface IBlogPost {
  id?: string
  slug: string
  coverImage: string | null
  title: string
  metaDescription: string
  author?: string
  publishedAt: string
  readTime: string
  category: string
  size: IImageSize
}

export interface IBlogArticle {
  id: string
  slug: string
  coverImage: string
  title: string
  metaDescription: string
  author: string
  publishedAt: string
  readTime: string
  content: string
  fullText: string
  metaKeywords: string[]
  searchQuery: string
  query: string
  contentJson: any
  preRendered: any
}
