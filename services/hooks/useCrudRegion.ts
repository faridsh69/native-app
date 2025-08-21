import { UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { useCrud } from 'services/coreHooks/useCrud'

export type RegionType = {
  country: string
  fun_fact: string
  image: {
    banner: string
    card: string
    main: string
  }
  region_name: string
  slug: string
}

export const useCrudRegionId = (slug: string) =>
  useCrud<RegionType>(UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS.region.id, slug)

export const useCrudRegionKeyRegions = () =>
  useCrud<RegionType>(UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS.region.keyRegions)

export const useCrudTopRegions = () =>
  useCrud<RegionType>(UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS.region.topRegions)

type RegionGroupByCountryApiFiltersType = {
  initial_characters: string
}
export const useCrudGroupByCountry = (filters: RegionGroupByCountryApiFiltersType) =>
  useCrud<RegionType>(UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS.region.groupByCountry, 0, filters)
