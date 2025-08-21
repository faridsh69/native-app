import { IRegionSearchItem, ISearchItem, ISuggestedQuery, IWineSearchResults } from 'services/types'

import { AUTO_SUGGEST_API_CLIENT } from '../clients/clients'

const SELECTED = 'selected'

export const getSelectedRegionsApi = () =>
  AUTO_SUGGEST_API_CLIENT.get<IRegionSearchItem>({
    endpoint: `${SELECTED}/regions`,
  })

export const getSelectedGrapesApi = () =>
  AUTO_SUGGEST_API_CLIENT.get<ISearchItem>({
    endpoint: `${SELECTED}/grapes`,
  })

type SelectedQueriesApiFilters = {
  count: number // 1
}
export const getSelectedQueriesApi = (data: SelectedQueriesApiFilters) =>
  AUTO_SUGGEST_API_CLIENT.get<ISuggestedQuery>({
    endpoint: `${SELECTED}/queries`,
    data,
  })

type SelectedQueryApiFilters = {
  text: string
  wine_title: string // all
  max_results: number // 5
}
export const getSelectedQueryApi = (data: SelectedQueryApiFilters) =>
  AUTO_SUGGEST_API_CLIENT.get<IWineSearchResults>({
    endpoint: `query/${data.text}`,
    data,
  })
