import { IWineCellarStatistic } from './userProfileTypes'
import { IUserInfo } from './userTypes'

export type ShareTokenSource = 'Taste Log' | 'Wishlist' | 'Wine Cellar'

export interface ISharedToken {
  sharingToken: string
}

export interface IWishlistAdditionalInfo {
  name: string
}

export interface IShareDetails {
  owner: IUserInfo
  source: ShareTokenSource
  createdDate: string
  additionalDetails: IWishlistAdditionalInfo | IWineCellarStatistic | null
}

export type IGetUpdateUPP = {
  message: string
}
