import { PUBLIC_API_CLIENT } from 'services/clients/clients'
import {
  CountryCodeMap,
  IDrinkingHistoryStatistic,
  IMyReviewStatistic,
  IPaginatedResponse,
  ISearchVintageWineData,
  IWineCellarStatistic,
  IWishlist,
} from 'services/types'
import { IWineRatingItem } from 'services/types/wineTypes'

const USER_PROFILE = 'users-profile'
const WINE_CELLAR = 'wine-cellar'
const DRINKING_HISTORY = 'drinking-history'
const WISH_LISTS = 'wishlists'
const RATINGS = 'ratings'

export const getUserProfileCountryCodeApi = () =>
  PUBLIC_API_CLIENT.get<CountryCodeMap>({
    endpoint: `${USER_PROFILE}/country-code`,
  })

export const getUserProfileWineCellarStatisticApi = () =>
  PUBLIC_API_CLIENT.get<IWineCellarStatistic>({
    endpoint: `${USER_PROFILE}/${WINE_CELLAR}/statistic`,
  })

export const getUserProfileDrinkingHistoryStatisticsApi = () =>
  PUBLIC_API_CLIENT.get<IDrinkingHistoryStatistic>({
    endpoint: `${USER_PROFILE}/${DRINKING_HISTORY}/statistic`,
  })

export const getUserProfileRatingStatisticApi = () =>
  PUBLIC_API_CLIENT.get<IMyReviewStatistic>({
    endpoint: `${USER_PROFILE}/${RATINGS}/statistic`,
  })

type UserProfileWishlistsApiFilters = {
  vintage_id: string
}
export const getUserProfileWishlistsApi = (data: UserProfileWishlistsApiFilters) =>
  PUBLIC_API_CLIENT.get<IPaginatedResponse<IWishlist>>({
    endpoint: `${USER_PROFILE}/${WISH_LISTS}`,
    data,
  })

type UserProfileWishlistsCreateApiPayload = {
  name: string
}
export const postUserProfileWishlistsCreateApi = (data: UserProfileWishlistsCreateApiPayload) =>
  PUBLIC_API_CLIENT.post<string>({
    endpoint: `${USER_PROFILE}/${WISH_LISTS}`,
    data,
  })

type UserProfileWishlistsUpdateApiPayload = {
  name: string
  newName: string
}
export const putUserProfileWishlistsUpdateApi = (data: UserProfileWishlistsUpdateApiPayload) =>
  PUBLIC_API_CLIENT.put<string>({
    endpoint: `${USER_PROFILE}/${WISH_LISTS}`,
    data,
  })

type UserProfileWishlistsDeleteApiPayload = {
  name: string
}
export const deleteUserProfileWishlistsDeleteApi = (data: UserProfileWishlistsDeleteApiPayload) =>
  PUBLIC_API_CLIENT.remove<string>({
    endpoint: `${USER_PROFILE}/${WISH_LISTS}`,
    data,
  })

type UserProfileAddVintageTowishlistsApiPayload = { name: string; vintageId: string }
export const putUserProfileAddVintageTowishlistsApi = (
  data: UserProfileAddVintageTowishlistsApiPayload,
) =>
  PUBLIC_API_CLIENT.put<string>({
    endpoint: `${USER_PROFILE}/${WISH_LISTS}/vintages`,
    data,
  })

type UserProfileRemoveVintageFromWishlistsApiPayload = { name: string; vintageId: string }
export const deleteUserProfileRemoveVintageFromWishlistsApi = (
  data: UserProfileRemoveVintageFromWishlistsApiPayload,
) =>
  PUBLIC_API_CLIENT.remove<string>({
    endpoint: `${USER_PROFILE}/${WISH_LISTS}/vintages`,
    data,
  })

type UserProfileAddVintageToWineCellarApiPayload = { vintageId: string }
export const putUserProfileAddVintageToWineCellarApi = (
  data: UserProfileAddVintageToWineCellarApiPayload,
) =>
  PUBLIC_API_CLIENT.put<string>({
    endpoint: `${USER_PROFILE}/${WINE_CELLAR}/vintages`,
    data,
  })

type UserProfileRemoveVintageFromWineCellarApiPayload = { vintage_id: string }
export const deleteUserProfileRemoveVintageFromWineCellarApi = (
  data: UserProfileRemoveVintageFromWineCellarApiPayload,
) =>
  PUBLIC_API_CLIENT.remove<string>({
    endpoint: `${USER_PROFILE}/${WINE_CELLAR}/vintages`,
    data,
  })

type UserProfileAddVintageToDrinkingHistoryApiPayload = { vintageId: string }
export const putUserProfileAddVintageToDrinkingHistoryApi = (
  data: UserProfileAddVintageToDrinkingHistoryApiPayload,
) =>
  PUBLIC_API_CLIENT.post<string>({
    endpoint: `${USER_PROFILE}/${DRINKING_HISTORY}/item`,
    data,
  })

type UserProfileRemoveVintageFromDrinkingHistoryApiPayload = { vintageId: string }
export const deleteUserProfileRemoveVintageFromDrinkingHistoryApi = (
  data: UserProfileRemoveVintageFromDrinkingHistoryApiPayload,
) =>
  PUBLIC_API_CLIENT.remove<string>({
    endpoint: `${USER_PROFILE}/${DRINKING_HISTORY}/items/${data.vintageId}`,
  })

type UserProfileHandPickedApiFilters = {
  limit: number
}
export const getUserProfileHandPickedApi = (data: UserProfileHandPickedApiFilters) =>
  PUBLIC_API_CLIENT.get<IPaginatedResponse<ISearchVintageWineData>>({
    endpoint: `${USER_PROFILE}/handpicked`,
    data,
  })

type UserProfileRatingsApiFilters = {
  sort_by: string
  rate: number
}
export const getUserProfileRatingsApi = (data: UserProfileRatingsApiFilters) =>
  PUBLIC_API_CLIENT.get<IWineRatingItem[]>({
    endpoint: `${USER_PROFILE}/ratings`,
    data,
  })
