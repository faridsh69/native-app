import { IWineSearchResults } from 'services/types'

import { AUTO_SUGGEST_API_CLIENT } from '../clients/clients'

const SITE_SEARCH = 'site-search'

type SiteSearchQueryTextApiFilters = {
  max_results: number
  text: string
}
export const getSiteSearchQueryTextApi = (data: SiteSearchQueryTextApiFilters) =>
  AUTO_SUGGEST_API_CLIENT.get<IWineSearchResults>({
    endpoint: `${SITE_SEARCH}/query/${data.text}`,
    data,
  })

type SiteSearchDefaultsApiFilters = {
  max_results: number
}
export const getSiteSearchDefaultsApi = (data: SiteSearchDefaultsApiFilters) =>
  AUTO_SUGGEST_API_CLIENT.get<IWineSearchResults>({
    endpoint: `${SITE_SEARCH}/defaults`,
    data,
  })

type SiteSearchGlobalApiFilters = {
  queryText: string
  source: ['region__region', 'region__subregion'] | ['grape']
  max_results: number
}
export const postSiteSearchGlobalApi = (data: SiteSearchGlobalApiFilters) =>
  AUTO_SUGGEST_API_CLIENT.post<IWineSearchResults>({
    endpoint: `global?max_results=${data.max_results || 10}`,
    data,
  })
