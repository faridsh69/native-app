export enum OAuthType {
  GOOGLE = 'google',
  APPLE = 'apple',
}

export type User = {
  id: string
  email: string
  isActive: boolean
  isSuperuser: boolean
  isVerified: boolean
  username: string
  gender?: 'Male' | 'Female' | 'Others' | 'Not Specified'
  pronouns: string
  dob: string
  wantNewsletter?: boolean
  avatarLink?: string | null
  isOnboardingRequired: boolean
  countryCode: string
  emailSubscriptions: string[]
  oauthNames: OAuthType[]
  password?: string
}

export interface IOnboarding {
  email: string
  isAvailable: boolean
}

export interface IRegister {
  email: string
  password?: string
  isActive?: boolean
  isSuperuser?: boolean
  isVerified?: boolean
  username: string
  pronouns?: string
  noPronoun?: string | null
  signupPlatform?: string
  avatarLink?: string
  gender?: string
  dob: Date
  countryCode: string
}

export interface IUpdateUser {
  username: string
  pronouns?: string
  noPronoun?: string | null
  dob: Date
  countryCode: string
  emailSubscriptions: string[]
  email: string
}

export interface IUserInfo {
  username: string
  avatarLink: string | null
}
