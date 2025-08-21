export interface IFoodPairing {
  foodName: string
  dishes: string[]
  score: number
  dishSlugs: string[]
  images: string[]
  image: string
}

export interface IFoodGroupMetaData {
  groupSlugToFoodName: {
    [key: string]: string[]
  }
  groupSlugToDishCount: {
    [key: string]: number
  }
  groupSlugToGroupName: {
    [key: string]: string
  }
}

export interface IFoodByGroupRequest {
  groupName: string
  foodName?: string
  limit?: number
  page: number
  size: number
}

export interface IFoodByGroup {
  slug: string
  dishName: string
  foodName: string
  groupName: string
  foodCountries: [string]
  foodType: string
  ingredients: [string]
  dishDescription: string
  winePairingDescription: string
  image: string
}
