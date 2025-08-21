import { IImage } from './commonTypes'

export interface IGrape {
  color: string
  description: string
  image: IImage
  name: string
  slug: string
}

export interface IWineGrape {
  name: string
  slug: string
  description: string
  regionalFeatures: string
  colorAromaTaste: string
  aromas: string[] | null
  color: string
  image: IImage
  funFact: string
  foods: string[]
}

export interface IGrapeFood {
  foodName: string
  dishes: string[]
  score: number
  dishSlugs: string[]
  images: string[]
  image: string
}

export type IKeyGrape = Pick<IWineGrape, 'name' | 'color' | 'image' | 'funFact' | 'slug'>

export type ITopGrape = Pick<IWineGrape, 'name' | 'color' | 'image' | 'slug'>

export interface IGrapeGroupByInitial {
  initial: string
  grapes: Array<Pick<IWineGrape, 'name' | 'slug'>>
}
