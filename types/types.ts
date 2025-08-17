export type OptionValueType = string | number | null | undefined

export type WineType = {
  id: string
  label: string
  src?: string
  litr: number
  vintage: number
  price: number
  rate: number
  rateCount: number
  match: string
  country: string
  tags: string[]
}
