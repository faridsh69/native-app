import {
  IPaginatedResponse,
  ISearchVintagesItem,
  ISearchVintagesWithMetaResponse,
  ISearchVintageWineData,
  IServerSearchVintagesWithMetaResponse,
  IWineUserPreferences,
  WineSortKey,
} from 'services/types'
import {
  ITopWineSearchRequest,
  IWineDetails,
  IWineFullDetailsResponse,
} from 'services/types/wineTypes'

import { PUBLIC_API_CLIENT } from '../clients/clients'

const VINTAGES = 'vintages'
const VINTAGE = 'vintage'

type VintagesPromoApiFilters = {
  limit: number
  promo_type: string
}
export const getVintagesPromoApi = (data: VintagesPromoApiFilters) =>
  PUBLIC_API_CLIENT.get<ISearchVintageWineData[]>({
    endpoint: `${VINTAGES}/promo`,
    data,
  })

export type VintagesSearchWithMetaApiPayload = {
  page: number
  size: number
  histogram_steps: number
  query: string
  sort_by: WineSortKey
  user_provided_text: boolean
  filters: {
    wine_colors: string[]
    wine_types: string[]
    price_max: number
  }
  // @TODO we should add more data here Partial<IFiltersMetaRequest>
}

export const postVintagesSearchWithMetaApi = (data: VintagesSearchWithMetaApiPayload) =>
  PUBLIC_API_CLIENT.post<IPaginatedResponse<IServerSearchVintagesWithMetaResponse>>({
    endpoint: `${VINTAGES}/search-with-meta?page=${data.page || 1}&size=${data.size || 25}`,
    data: {
      histogram_steps: data.histogram_steps,
      filters: data.filters,
      query: data.query,
      sort_by: data.sort_by,
      user_provided_text: false,
    },
  })

type VintagesSearchApiPayload = {
  page: number
  size: number
  histogramSteps: number
  userProvidedText: boolean
  // @TODO we should add more data here Partial<IFiltersMetaRequest>
}
export const postVintagesSearchApi = (data: VintagesSearchApiPayload) =>
  PUBLIC_API_CLIENT.post<IPaginatedResponse<ISearchVintagesItem>>({
    endpoint: `${VINTAGES}/search?page=${data.page || 1}&size=${data.size || 25}`,
    data: {
      histogramSteps: data.histogramSteps,
      userProvidedText: data.userProvidedText,
    },
  })

type VintagesSearchFromSmartsommApiFilters = {
  search_id: string
  sort_by: WineSortKey
  page: number
  size: number
}
export const getVintagesSearchFromSmartsommApi = (data: VintagesSearchFromSmartsommApiFilters) =>
  PUBLIC_API_CLIENT.get<ISearchVintagesWithMetaResponse>({
    endpoint: `${VINTAGES}/search-from-smartsomm`,
    data: {
      search_id: data.search_id,
      sort_by: data.sort_by,
      page: data.page || 1,
      size: data.size || 25,
    },
  })

type VintagesAlsoBoughtApiFilters = {
  in_cart_vintage_ids: string[]
  limit: number
}
export const getVintagesAlsoBoughtApi = (data: VintagesAlsoBoughtApiFilters) =>
  PUBLIC_API_CLIENT.get<ISearchVintageWineData[]>({
    endpoint: `${VINTAGES}/also-bought`,
    data: {
      in_cart_vintage_ids: data.in_cart_vintage_ids.join(','),
      limit: data.limit || 5,
    },
  })

export const getVintagesSlugApi = (wineSlug: string) =>
  PUBLIC_API_CLIENT.get<IWineDetails>({
    endpoint: `${VINTAGE}/${wineSlug}`,
  })

type VintagesTopVintagesSearchApiPayload = {
  page: number
  size: number
} & ITopWineSearchRequest
export const postVintagesTopVintagesSearchApi = (data: VintagesTopVintagesSearchApiPayload) =>
  PUBLIC_API_CLIENT.post<IPaginatedResponse<ISearchVintageWineData>>({
    endpoint: `top-vintages/search?page=${data.page || 1}&size=${data.size || 25}`,
  })

type VintagesWineSlugFullDetailsApiFilters = {
  slug: string
  vintage_year?: string
}
export const getVintagesWineSlugFullDetailsApi = (data: VintagesWineSlugFullDetailsApiFilters) =>
  PUBLIC_API_CLIENT.get<IWineFullDetailsResponse>({
    endpoint: `wine/${data.slug}/full-details`,
    data: {
      vintage_year: data.vintage_year,
    },
  })

type VintagesCompactVintagesApiFilters = {
  slugs: string[] // slugs.map(slug => `slugs=${slug}`).join('&')
}
export const getVintagesCompactVintagesApi = (data: VintagesCompactVintagesApiFilters) =>
  PUBLIC_API_CLIENT.get<ISearchVintageWineData[]>({
    endpoint: `compact-vintages`,
    data: {
      slugs: data.slugs,
    },
  })

type vintageUserPreferencesFilterApiType = {
  vintage_ids_in: string[]
}
export const getVintagesVintageUserPreferencesApi = (data: vintageUserPreferencesFilterApiType) =>
  PUBLIC_API_CLIENT.get<Record<string, IWineUserPreferences>>({
    endpoint: `vintage-user-preferences`,
    data,
  })

type VintagesVintageIdUserPreferencesApiFilters = {
  vintage_id: string
}
export const getVintagesVintageIdUserPreferencesApi = (
  data: VintagesVintageIdUserPreferencesApiFilters,
) =>
  PUBLIC_API_CLIENT.get<IWineUserPreferences>({
    endpoint: `${VINTAGE}/${data.vintage_id}/user-preferences`,
    data,
  })
