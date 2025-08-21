import { IBlogArticle, IBlogPost, IPaginatedResponse } from 'services/types'

import { PUBLIC_API_CLIENT } from '../clients/clients'

const BLOG = 'blog'

type BlogArticlesLatestApiFilters = {
  // ILatestArticlesParams
  category: string
  page: number
  size: number
  exclude: string
}
export const getBlogArticlesLatestApi = (data: BlogArticlesLatestApiFilters) =>
  PUBLIC_API_CLIENT.get<IPaginatedResponse<IBlogPost>>({
    endpoint: `${BLOG}/articles/latest`,
    data: {
      category: data.category,
      page: data.page || 1,
      size: data.size || 20,
      exclude: data.exclude || '',
    },
  })

export const getBlogArticlesIdApi = (slug: string) =>
  PUBLIC_API_CLIENT.get<IBlogArticle>({
    endpoint: `${BLOG}/article/${slug}`,
  })

export const getBlogArticlesAvailableCategoriesApi = () =>
  PUBLIC_API_CLIENT.get<string[]>({
    endpoint: `${BLOG}/articles/available-categories`,
  })
