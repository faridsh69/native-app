import { CountriesEnum } from 'enums/enums'
import { WineType } from 'types/types'

export const mappingDataWinesSearchToWineList = (list: any): WineType[] => {
  if (!list.length) return []

  return list
    .filter((item: any) => item.data_type === 'vintage')
    .map((item: any) => item.data)
    .map((wine: any) => ({
      id: wine.id,
      label: wine.title,
      src: wine.image,
      litr: wine.bottle_volume,
      vintage: wine.vintage_year,
      price: wine.price,
      rate: wine.user_rating,
      rateCount: wine.user_rating_count,
      country: wine.country,
      match: wine.region,
      tags: wine.labels,
    }))
}

export const mappingDataCountryNameToFlag = (countryName: string) => {
  if (countryName === 'United States') return CountriesEnum.Us
  if (countryName === 'Spain') return CountriesEnum.Sp
  if (countryName === 'Italy') return CountriesEnum.It
  if (countryName === 'Australia') return CountriesEnum.Au

  return CountriesEnum.Fr
}
