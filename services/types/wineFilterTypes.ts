import type { WineColorEnum, WineTypeEnum } from './wineTypes'

export interface ISearchFilter {
  wineColors: WineColorEnum[]
  wineTypes: WineTypeEnum[]
  countries: string[]
  regions: string[]
  grapes: string[]
  merchants: string[]
  dishes: string[]
  foods: string[]
  flavors: string[]
  bottleVolumes: number[]
  priceMin?: number
  priceMax?: number
  yearMin?: number
  yearMax?: number
  tasteProfiles: string[]
  isNatural?: boolean
  isBlended?: boolean | null
  isSingleVariety?: boolean
  isMultipleVariety?: boolean
  shortenedFilterKeys?: IShortenedFilter[]
}

export interface IShortenedFilter {
  key: string
  shortenedValue: string | null
}

export interface IWineSearchMetadataSelectedFilter {
  type: string
  values: string[] | number[] | boolean
  shortenedValue: string | null
}

export interface IWineSearchMetadata {
  wineTypes: WineTypeEnum[]
  wineColors: WineColorEnum[]
  prices: {
    minValue: number
    maxValue: number
    histogram: number[]
  }
  bottleVolumes: number[]
  vintageYears: {
    minValue: number
    maxValue: number
    histogram: number[]
  }
  dishes: string[]
  grapes: string[]
  countries: string[]
  regions: string[]
  foods: string[]
  flavors: string[]
  merchants: string[]
  isNatural: boolean
  isBlended?: boolean
  tasteProfiles: string[]
  selectedFilters: IWineSearchMetadataSelectedFilter[]
  isSingleVariety?: boolean
  isMultipleVariety?: boolean
}

export interface IWineUserPreferences {
  isFavorite: boolean
  isInWineCellar: boolean
  isInWishlist: boolean
  isRecommended: boolean
  isOffered: boolean
  isInDrinkingHistory: boolean
  drinkingHistoryIds: string[]
}

export type WineSortKey = 'recommended' | 'rating-desc' | 'rating_count-desc' | 'price-desc' | 'price'
