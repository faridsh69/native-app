export interface IWinery {
  id: string
  name: string
  description: string | null
  country: string
  slug: string
  winesAverageRating: number
  availableWinesCount: number
}
