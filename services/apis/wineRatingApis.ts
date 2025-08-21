import { IPaginatedResponse } from 'services/types'
import {
  IRatingMeta,
  ISendReviewRequest,
  IWineRatingItem,
  IWineReviewResponse,
  WineRatingsSortByEnum,
} from 'services/types/wineTypes'

import { PUBLIC_API_CLIENT } from '../clients/clients'

const RATINGS = 'ratings'

type WineRatingApiFilters = {
  slug: string
  size: number
  page: number
  sortBy: WineRatingsSortByEnum
  vintageYear?: string
}
export const getWineRatingApi = (data: WineRatingApiFilters) =>
  PUBLIC_API_CLIENT.get<IPaginatedResponse<IWineRatingItem>>({
    endpoint: `wine/${RATINGS}`,
    data: {
      slug: data.slug,
      size: data.size || 10,
      page: data.page || 1,
      sortBy: data.sortBy || WineRatingsSortByEnum.RECENT,
      vintageYear: data.vintageYear,
    },
  })

export const putWineRatingRateIdLikeApi = (ratingId: string) =>
  PUBLIC_API_CLIENT.put<string>({
    endpoint: `${RATINGS}/${ratingId}/like`,
  })

export const deleteWineRatingUndoRateIdLikeApi = (ratingId: string) =>
  PUBLIC_API_CLIENT.remove({
    endpoint: `${RATINGS}/${ratingId}/like`,
  })

export const postWineRatingReviewApi = (data: ISendReviewRequest) =>
  PUBLIC_API_CLIENT.post<IWineReviewResponse>({
    endpoint: `${RATINGS}`,
    data,
  })

export const patchWineRatingReviewApi = (data: ISendReviewRequest) =>
  PUBLIC_API_CLIENT.post<IWineReviewResponse>({
    endpoint: `${RATINGS}/${data.vintageId}`,
    data,
  })

export const deleteWineRatingReviewApi = (data: ISendReviewRequest) =>
  PUBLIC_API_CLIENT.remove<IWineReviewResponse>({
    endpoint: `${RATINGS}/${data.vintageId}`,
  })

type WineRatingMetaApiFilters = {
  slug: string
}
export const getWineRatingBaseUrlMetaApi = (data: WineRatingMetaApiFilters) =>
  PUBLIC_API_CLIENT.get<IRatingMeta>({
    endpoint: `wine/${RATINGS}/meta`,
    data,
  })
