import { IFoodGroupMetaData, IFoodPairing } from './foodPairingTypes'
import { IGrape } from './grapeTypes'
import { IRegion } from './regionTypes'

export interface IHeaderNavItemImage {
  label: string
  imageSrc?: string
  url?: string
  link?: string
  query?: string
}

export interface IHeaderNavItemBlockItem {
  label: string
  value?: string
  url?: string
}

export interface IHeaderNavItemBlock {
  title: string
  href?: string
  type?: 'normal' | 'highlight' // A default is normal
  queryKey?: string // A default is "query"
  baseRedirectUrl?: string // If exists, items will be redirected to the detail page
  items: IHeaderNavItemBlockItem[]
}

export interface IHeaderNavItemDetailInfo {
  images: IHeaderNavItemImage[]
  blocks: IHeaderNavItemBlock[]
}

export interface IMenuItemsResponse {
  surpriseMeItems: string[]
  topSearchedQueries: string[]
  popularGrapes: IGrape[]
  grapesOfTheDay: IGrape[]
  popularRegions: IRegion[]
  regionsOfTheDay: IRegion[]
  foods: IFoodPairing[]
}

export interface IMenuData {
  surpriseMe: string[]
  popularGrapes: IGrape[]
  popularRegions: IRegion[]
  grapes: IGrape[]
  regions: IRegion[]
  topQueries: string[]
  foodGroupMetaData: IFoodGroupMetaData | null
  foodPairings: IFoodPairing[]
  articleCategories: string[]
}

export type IHeaderMenuType =
  | 'red-wine'
  | 'white-wine'
  | 'rose-wine'
  | 'sparkling-wine'
  | 'news-and-articles'
  | 'food-pairing'

export interface IHeaderMenu {
  type: IHeaderMenuType
  title: string
  href?: string
  detail?: IHeaderNavItemDetailInfo
}

export interface IDish {
  slug: string
  dishName: string
  image: string
  foodName?: string
}
