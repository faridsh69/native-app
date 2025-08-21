import { IFoodByGroup, IFoodGroupMetaData, IPaginatedResponse } from 'services/types'

import { PUBLIC_API_CLIENT } from '../clients/clients'

const FOOD = 'food'

export const getFoodDishApi = (slug: string) =>
  PUBLIC_API_CLIENT.get<IFoodByGroup>({
    endpoint: `${FOOD}/dish/${slug}`,
  })

type FoodByGroupApiFilters = {
  groupName: string
  foodName?: string
  limit?: number
  page: number
  size: number
}
export const getFoodByGroupApi = (data: FoodByGroupApiFilters) =>
  PUBLIC_API_CLIENT.get<IPaginatedResponse<IFoodByGroup>>({
    endpoint: `${FOOD}/by-group`,
    data,
  })

export const getFoodByGroupMetaDataApi = () =>
  PUBLIC_API_CLIENT.get<IFoodGroupMetaData>({
    endpoint: `${FOOD}/by-group/metadata`,
  })
