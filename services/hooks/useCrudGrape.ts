import { UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { useCrud } from 'services/coreHooks/useCrud'

type GrapeType = {
  color: string
  fun_fact: string
  name: string
  slug: string
  image: {
    banner: string
    card: string
    main: string
  }
}

type GrapesGroupByInitialApiFiltersType = {
  initial_characters: string
}
export const useCrudGrapesGroupByInitial = (filters: GrapesGroupByInitialApiFiltersType) => {
  return useCrud<GrapeType>(
    UTILS_QUERY_KEY_APIS,
    UTILS_QUERY_KEYS.grapes.groupByInitial,
    0,
    filters,
  )
}

export const useCrudGrapesTopGrapes = () => {
  return useCrud<GrapeType>(UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS.grapes.topGrapes)
}

export const useCrudGrapesKeyGrapes = () => {
  return useCrud<GrapeType>(UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS.grapes.keyGrapes)
}

type GrapesGrapeFoodsApiFiltersType = {
  grape_name: string
}
export const useCrudGrapesGrapeFoods = (filters: GrapesGrapeFoodsApiFiltersType) => {
  return useCrud<GrapeType>(UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS.grapes.grapeFoods, 0, filters)
}
