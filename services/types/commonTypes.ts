export interface IImage {
  banner: string
  main: string
  card?: string
  location?: string
}

export interface IPaginatedResponse<T> {
  items: T[]
  page: number
  pages: number
  size: number
  total: number
  xSearchId?: string
}

export type MarketLocationType = {
  marketCountry: string
  marketRegion: string
}

export type StorageMarketLocationType = {
  initialMarketCountry?: string
  initialMarketRegion?: string
} & Partial<MarketLocationType>

export type ValuesOf<T extends any[]> = T[number]
