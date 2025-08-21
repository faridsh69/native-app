import { IKeyRegion, IRegionGroupByCountry, ITopRegion, IWineRegion } from 'services/types'

import { PUBLIC_API_CLIENT } from '../clients/clients'

const REGION = 'region'
const REGIONS = 'regions'

export const getRegionIdApi = (slug: string) =>
  PUBLIC_API_CLIENT.get<IWineRegion>({
    endpoint: `${REGION}/${slug}`,
  })

export const getRegionKeyRegionsApi = () =>
  PUBLIC_API_CLIENT.get<IKeyRegion[]>({
    endpoint: `${REGIONS}/key-regions`,
  })

export const getRegionTopRegionsApi = () =>
  PUBLIC_API_CLIENT.get<ITopRegion[]>({
    endpoint: `${REGIONS}/top-regions`,
  })

type RegionGroupByCountryApiFilters = {
  initial_characters: string
}
export const getRegionGroupByCountryApi = (data: RegionGroupByCountryApiFilters) =>
  PUBLIC_API_CLIENT.get<IRegionGroupByCountry[]>({
    endpoint: `${REGIONS}/group-by-country`,
    data,
  })
