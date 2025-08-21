import { IDish, IMenuItemsResponse } from 'services/types'

import { PUBLIC_API_CLIENT } from '../clients/clients'

const MENU = 'menu'

export const getMenuAllMenuItemsApi = () =>
  PUBLIC_API_CLIENT.get<IMenuItemsResponse>({
    endpoint: `${MENU}/all-menu-items`,
  })

type MenuDishesOfTheDayApiFilters = {
  k: number
}
export const getMenuDishesOfTheDayApi = (data: MenuDishesOfTheDayApiFilters) =>
  PUBLIC_API_CLIENT.get<IDish[]>({
    endpoint: `${MENU}/dishes-of-the-day`,
    data: {
      k: data.k || 5,
    },
  })
