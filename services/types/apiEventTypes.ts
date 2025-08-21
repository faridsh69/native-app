export type WineShareClickApiEvent = {
  vintageId: string
}

export type ShopClickApiEvent = {
  vintageId: string
  searchId: string
  shopUrl: string
}

export type SearchResultClickApiEvent = {
  vintageId: string
  searchId: string
  resultIndex: number
}
