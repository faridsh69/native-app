import { UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { useCrud } from 'services/coreHooks/useCrud'

export type MenuType = {
  dishes_of_the_day: any[]
  foods: { food_name: string; dishes: string[]; score: number; dish_slugs: string[] }[]
  grapes_of_the_day: any[]
  popular_grapes: any[]
  popular_regions: any[]
  regions_of_the_day: any[]
  surprise_me_items: any[]
  top_searched_queries: any[]
}

export const useCrudMenuAllMenuItems = () =>
  useCrud<MenuType>(UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS.menu.allMenuItems)

type MenuDishesOfDayType = {
  dish_name: string
  image: string
  slug: string
}

export const useCrudMenuDishesOfTheDay = () =>
  useCrud<MenuDishesOfDayType>(UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS.menu.dishesOfTheDay)
