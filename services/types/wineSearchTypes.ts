import { IPaginatedResponse } from './commonTypes'
import { IFoodPairing } from './foodPairingTypes'
import { IShoppingPrice } from './marketTypes'
import {
  ISearchFilter,
  IWineSearchMetadata,
  IWineUserPreferences,
  WineSortKey,
} from './wineFilterTypes'
import { WineColorEnum, WineTypeEnum } from './wineTypes'

export interface IVintageSearchRequest {
  query: string
  sortBy?: WineSortKey
  filters: Partial<ISearchFilter>
  vintageSource?: any
  removedFilters?: any
  marketCountry?: string | null
  marketRegion?: string | null
}

export interface IFiltersMetaRequest extends IVintageSearchRequest {
  histogramSteps?: number
  userProvidedText?: boolean
}

export interface ISearchVintageWineData {
  id: string
  slug: string
  title: string
  wineType: WineTypeEnum | null
  wineColor: WineColorEnum | null
  description: string
  image: string
  images: {
    bottle: string
    bottleMobile: string
  }
  labels?: string[]
  isNatural: boolean
  userRating: number | null
  userRatingCount: number | null
  ratingFrequency: string | null
  expertRating: number | null
  winerySlug: string | null
  wineSlug: string
  vintageYear: number | null
  wineryName: string | null
  regionId: string | null
  regionSlug: string | null
  foodPairing: IFoodPairing[] | null
  price: number | null
  bottleVolume: number | null
  linkToShop: string | null
  availableVintageCount: number | null
  country: string
  region: string
  preference?: IWineUserPreferences
  shoppingPrices?: IShoppingPrice[]
}

export interface ISearchVintageMessageData {
  message: string
}

export interface ISearchVintagesItem {
  data: ISearchVintageWineData | ISearchVintageMessageData
  dataType: SearchVintageWithMetaItemType
}

export interface ISearchVintagesWithMetaResponse extends IPaginatedResponse<ISearchVintagesItem> {
  meta?: IWineSearchMetadata | null
}

export interface IServerSearchVintagesWithMetaResponse {
  data: Omit<IWineSearchMetadata, 'tasteProfiles'> | ISearchVintagesItem
  dataType: SearchVintageWithMetaItemType
}

export type SearchVintageWithMetaItemType = 'meta' | 'vintage' | 'message'

export interface IDrinkingHistorySearchItem {
  vintage: ISearchVintageWineData
  country: string | null
  createdDate: string
  description: string | null
  id: string
  region: string | null
  userImageUrls: string[]
  wineName: string | null
}

export interface IWineSearchResults {
  wineTitle: IWineSearchItem[]
  aroma: ISearchItem[]
  articleTitle: ISearchItem[]
  country: ISearchItem[]
  foodCombined: ISearchItem[]
  foodDish: ISearchItem[]
  foodGroup: ISearchItem[]
  grape: ISearchItem[]
  regionCombined: IRegionSearchItem[]
}

export interface IWineSearchItem {
  text: string
  score: number
  wineId: number
  wineSlug: string
  isReviewed: boolean
  isAvailable: boolean
  isValidated: boolean
  youngestVintageId: string
  imageFilename: string
  imageUrl: string
}

export interface ISearchItem {
  modelName: string
  score: number | null
  stringMatch: string | null
  text: string
  name?: string
  slug?: string
}

export interface IRegionSearchItem extends ISearchItem {
  countryName: string
  regionName?: string
}

export interface ISuggestedQuery {
  query?: string
  wineTitle?: string
  regionCombined?: string
  grape?: string
  foodDish?: string
  foodName?: string
  foodType?: string
  aroma?: string
}

export interface ISEOPageLink {
  image: string
  link: string
  title: string
}

export interface ISEOPage {
  [key: string]: {
    seoTitle: string
    seoDescription: string
    seoKeywords: string
    query: string
    pageTitle: string
    pageDescription: string
    links?: ISEOPageLink[]
    subCategories?: ISEOPage
  }
}

export interface ICategoryPage extends ISearchParamsProps {
  params: {
    category: string
    'sub-category'?: string
  }
}

export interface ISearchParamsProps {
  searchParams: {
    page: string
    size?: string
    sortby: WineSortKey
    q?: string
    'page-key'?: string
    // [SMART_SOMM_SEARCH_ID]?: string // SmartSomm View All information
    pricemin?: string
    pricemax?: string
    yearmin?: string
    yearmax?: string

    /**
     * 1 for searches that originate from a text input box.
     * It will be used to identify whether a query is from a text input box or not.
     * If it's from a text input box, user_provided_text will be passed into the search payload
     */
    usertext?: string
    isblended?: string
    isnatural?: string
    // [key: ValuesOf<typeof WINE_STRING_FILTERS>]: string | undefined
  }
}

export interface ISearchParams {
  page: string
  size?: string
  sortby: WineSortKey
  query?: string
  'page-key'?: string
  // [SMART_SOMM_SEARCH_ID]?: string // SmartSomm View All information
  pricemin?: string
  pricemax?: string
  yearmin?: string
  yearmax?: string

  /**
   * 1 for searches that originate from a text input box.
   * It will be used to identify whether a query is from a text input box or not.
   * If it's from a text input box, user_provided_text will be passed into the search payload
   */
  userText?: string
  isBlended?: string
  isNatural?: string
  // [key: ValuesOf<typeof WINE_STRING_FILTERS>]: string | undefined
}
