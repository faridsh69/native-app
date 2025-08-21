import { IImage } from './commonTypes'

export interface IRegion {
  id: string | null
  country: string
  description: string
  image: IImage
  regionName: string
  slug: string
  subRegionName: string
}

export interface IWineRegion {
  slug: string
  regionName: string
  country: string
  subRegionName: string
  description: string
  image: IImage
  subRegions?: string[]
  grapes: string[]
  geography: string
  wineStyles: string
  famousProducers: string
  funFact: string
  lat: number
  lng: number
}

export type IKeyRegion = Pick<IWineRegion, 'slug' | 'regionName' | 'country' | 'funFact' | 'image'>

export type ITopRegion = Pick<IWineRegion, 'slug' | 'regionName' | 'country' | 'image'>

export interface IRegionGroupByCountry {
  country: string
  regions: Array<Pick<IWineRegion, 'slug' | 'regionName'>>
}
