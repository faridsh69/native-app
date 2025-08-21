import type { ISearchVintageWineData } from './wineSearchTypes'

export interface IWishlist {
  name: string
  vintageCount: number // Must use this field for vintage count instead of items.length
  createdAt: string
  coverImages?: string[]
  title?: string
  items?: ISearchVintageWineData[]
  shared?: boolean
}
