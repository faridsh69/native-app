export type CountryCodeMap = {
  [key: string]: string
}

export interface IWineCellarStatistic {
  vintageCount: number
  totalWorth: number
  ratingAverage: number | null
  regionCount: number
}

export interface IDrinkingHistoryStatistic {
  wineCount: number | null
  averageRating?: number
  regionCount?: number
}

export interface IMyReviewStatistic {
  wineCount: number | null
  selfAverageRating: number | null
  regionCount: number | null
}

export enum AccountSettings {
  ProfileSettings = 'profile-settings',
  LoginSecurity = 'login-security',
  Notifications = 'notifications'
}
