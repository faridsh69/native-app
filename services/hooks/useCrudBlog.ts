import { UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { useCrud } from 'services/coreHooks/useCrud'
import { IBlogPost } from 'services/types'

export const useCrudBlogArticlesLatest = (slug: string) =>
  useCrud<IBlogPost>({ queryKey: UTILS_QUERY_KEYS.blog.articlesLatest, modelId: slug })

export const useCrudBlogArticleAvailableCategories = () =>
  useCrud<string>({ queryKey: UTILS_QUERY_KEYS.blog.articlesAvailableCategories })

// articlesLatest: `Latests blogs  ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 14 blog/articles/latest
// // articlesId: 'blog/article/id', // 15 single
// articlesAvailableCategories: `Blog categories  ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 16 blog/articles/available-categories
