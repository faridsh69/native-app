import { IPaginatedResponse } from './commonTypes'
import { IGrape } from './grapeTypes'
import { IUserInfo } from './userTypes'
import { IWinery } from './wineryTypes'
import { ISearchVintageWineData } from './wineSearchTypes'

export enum WineTypeEnum {
  STILL = 'Still',
  SPARKLING = 'Sparkling',
  FORTIFIED = 'Fortified',
  DESSERT = 'Dessert',
  NOT_WINE = 'Not Wine',
}

export enum WineColorEnum {
  RED = 'Red',
  WHITE = 'White',
  ROSE = 'Rose',
  OTHER = 'Other',
}

export interface ITopWineSearchRequest {
  fieldName: string
  fieldValue: string
  promoType: string
  wineColor?: string
  wineType?: string
  priceMin?: number
  priceMax?: number
  marketCountry?: string
  marketRegion?: string
  histogramSteps?: number
  limit?: number
}

export enum WineRatingRankEnum {
  RARELY_REVIEWED = 1,
  SOMETIMES_REVIEWED,
  REGULARLY_REVIEWED,
  HIGHLY_REVIEWED,
  MOST_REVIEWED,
}

export enum WineRatingsSortByEnum {
  RECENT = 'recent',
  HIGHEST_RATING = 'highest_rating',
  LOWEST_RATING = 'lowest_rating',
  MOST_LIKED = 'most_liked',
  OLDEST = 'oldest',
}

export interface IWineTasteProfile {
  name: string
  value: number
  step: number
  text: string
}

export interface IWineTasteFlavor {
  group: string
  sub_groups: string[]
}

export interface IWineDetails extends ISearchVintageWineData {
  subRegion: string | null
  vintageYear: number | null
  grapes: string[]
  taste: IWineTaste
  pros: string[] | null
  cons: string[] | null
  expertNote: string | null
  seoTitle: string | null
  seoDescription: string | null
  seoKeywords: string | null
}

export interface IWineDrinkingWindow {
  startYear: number
  endYear: number
  isMatured: boolean
}

export interface IWinePrice {
  amount: number
  volumeMl: number
  currency: string
  linkToShop: string
}

export interface IShoppingPrice {
  variantId: string
  priceAmount: number
  vintageId: string
  wineId: number
  vendorId: string
  vendorName: string
}

export interface IWineSibling {
  vintageId: string
  slug: string
  vintageTitle: string
  vintageYear: number
  shoppingPrices: IShoppingPrice[] | null
}

export interface IWineReviewAggregate {
  averageRating: number | null
  ratingCount: number
}

export interface IWineReviewResponse extends IWineRatingItem {
  aggregate: IWineReviewAggregate
}

export interface IWineRatingItem {
  rate: number
  note: string
  createdAt: string
  id: string
  author: IUserInfo
  likeCount: number
  isMine: boolean
  isLiked: boolean
  vintage: ISearchVintageWineData
  vintageYear: number
}

export interface ISendReviewRequest {
  vintageId: string
  rate: number
  note?: string
}

export interface IWineAroma {
  slug: string
  displayName: string
  imageUrl: string
}

export interface IWineTaste {
  profiles: IWineTasteProfile[]
  flavors: IWineTasteFlavor[] // deprecated
  aromas: string[] // deprecated
  aromasStructured: IWineAroma[] | null
}

export interface IRatingVintageItem {
  vintageId: string
  vintageYear: number
  hasRating?: boolean
  ratingCount: number
  isRated: boolean
  rating: Pick<IWineRatingItem, 'rate' | 'note' | 'id'> | null
}

export interface IRatingMeta {
  vintages: IRatingVintageItem[]
}

export interface IWineRatingAiSummaryDescriptor {
  term: string
  count: number
  samples: string[]
}

export interface IWineRatingAiSummary {
  summary: string
  sentimentScore: number
  sentimentAdj: string
  descriptors: IWineRatingAiSummaryDescriptor[]
}

export interface IWineFullDetailsResponse {
  drinkingWindow: IWineDrinkingWindow | null
  regionDescription: string
  winery: IWinery | null
  vintagePrices: IWinePrice[]
  siblingVintages: IWineSibling[]
  similarVintages: ISearchVintageWineData[]
  grapes: IGrape[]
  ratings: IPaginatedResponse<IWineRatingItem>
  vintage: IWineDetails
  ratingMeta?: IRatingMeta | null
  ratingAiSummary?: IWineRatingAiSummary | null
}
