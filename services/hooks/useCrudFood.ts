import { UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { useCrud } from 'services/coreHooks/useCrud'

export type FoodType = {
  id: number
}

export const useCrudFoodDish = (slug: string) =>
  useCrud<FoodType>({ queryKey: UTILS_QUERY_KEYS.food.dish, modelId: slug })

type FoodByGroupApiFiltersType = {
  group_name: string
}
export const useCrudFoodByGroup = (filters: FoodByGroupApiFiltersType) =>
  useCrud<FoodType>({ queryKey: UTILS_QUERY_KEYS.food.byGroup, filters })

export const useCrudFoodByGroupMetaData = () => {
  return useCrud<FoodType>({ queryKey: UTILS_QUERY_KEYS.food.byGroupMetadata })
}
