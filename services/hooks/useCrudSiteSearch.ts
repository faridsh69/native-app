import { UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { useCrud } from 'services/coreHooks/useCrud'

type WineTitleType = {
  has_generated_details: boolean
  image_filename: string
  image_url: string
  is_available: boolean
  is_reviewed: boolean
  is_validated: boolean
  model_name: string
  score: number
  string_match: number
  text: string
  wine_color: string
  wine_id: number
  wine_slug: string
  wine_type: string
  youngest_vintage_id: string
}

type AromaType = {
  model_name: string
  name: string
  score: string
  string_match: string
  text: string
}

type ArticleTitleType = {
  cover_image: string
  model_name: string
  score: string
  slug: string
  string_match: string
  text: string
}

type CountryType = {
  model_name: string
  score: string
  string_match: string
  text: string
}

type FoodType = {
  image_url: string
  model_name: string
  score: string
  slug: string
  string_match: string
  text: string
}

type GrapeType = {
  color: string
  image_url: string
  model_name: string
  score: string
  slug: string
  string_match: string
  text: string
}

type RegionType = {
  country_name: string
  image_url: string
  model_name: string
  region_name: string
  score: string
  slug: string
  string_match: string
  text: string
}

export type SiteSearchType = {
  aroma: AromaType[]
  article_title: ArticleTitleType[]
  country: CountryType[]
  food__combined: FoodType[]
  food__discover_learn_category: FoodType[]
  food__dish: FoodType[]
  food__group: FoodType[]
  grape: GrapeType[]
  region__combined: RegionType[]
  wine_title: WineTitleType
}

type SiteSearchQueryTextApiFiltersType = {
  max_results: number
  text: string
}
export const useCrudSiteSearchQueryText = (filters: SiteSearchQueryTextApiFiltersType) =>
  useCrud<SiteSearchType>({
    queryKey: UTILS_QUERY_KEYS.siteSearch.queryText,
    filters,
    configs: { enabled: !!filters.text },
  })

export const useCrudSiteSearchDefaults = () =>
  useCrud<SiteSearchType>({ queryKey: UTILS_QUERY_KEYS.siteSearch.defaults })

type SiteSearchGlobalType = { query_text: string; source: string[] }
export const useCrudSiteSearchGlobal = () =>
  useCrud<SiteSearchGlobalType>({ queryKey: UTILS_QUERY_KEYS.siteSearch.global })
