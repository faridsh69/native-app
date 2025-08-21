import {
  ILoginRequest,
  ILoginResponse,
  INewPasswordRequest,
  INewTokenRequest,
  IRefreshToken,
  IRegister,
  ITokenRequest,
  ITokensResponse,
  User,
} from 'services/types'

import { AUTH_API_CLIENT, PUBLIC_API_CLIENT, PUBLIC_PURE_API_CLIENT } from '../clients/clients'
import { HEADER_CONTENT_TYPE_URLENCODED } from './queryConstants'

const AUTH = 'auth'

export const postAuthRegisterApi = (data: IRegister) =>
  PUBLIC_API_CLIENT.post<User>({
    endpoint: `${AUTH}/register`,
    data,
  })

export const postAuthLoginApi = (data: ILoginRequest) =>
  PUBLIC_PURE_API_CLIENT.post<ILoginResponse>({
    endpoint: `${AUTH}/jwt/login`,
    data,
    options: HEADER_CONTENT_TYPE_URLENCODED,
  })

export type AuthEmailAvailabilityApiFilters = {
  email: string
}
export const getAuthEmailAvailabilityApi = (data: AuthEmailAvailabilityApiFilters) =>
  PUBLIC_API_CLIENT.get<boolean>({
    endpoint: `user-email/availability`,
    data,
  })

export const postAuthLogoutApi = () =>
  AUTH_API_CLIENT.post<string>({ endpoint: `${AUTH}/jwt/logout` })

export type AuthForgetPasswordApiPayload = {
  email: string
  source: 'app'
}
export const postAuthForgetPasswordApi = (data: AuthForgetPasswordApiPayload) =>
  PUBLIC_PURE_API_CLIENT.post({
    endpoint: `${AUTH}/forgot-password?source=${data.source || 'app'}`,
    data,
  })

export const postAuthResetPasswordApi = (data: INewPasswordRequest) =>
  PUBLIC_PURE_API_CLIENT.post({
    endpoint: `${AUTH}/reset-password`,
    data,
  })

export type AuthGoogleAuthorizeApiFilters = {
  scopes: 'email' | 'profile'
}
export const getAuthGoogleAuthorizeApi = (data: AuthGoogleAuthorizeApiFilters) =>
  PUBLIC_PURE_API_CLIENT.get({
    endpoint: `${AUTH}/google/authorize`,
    data: {
      scopes: data.scopes || 'profile',
    },
  })

export type AuthGoogleCallbackApiFilters = {
  code: string
  state: string
}
export const getAuthGoogleCallbackApi = (data: AuthGoogleCallbackApiFilters) =>
  PUBLIC_PURE_API_CLIENT.get<ILoginResponse>({
    endpoint: `${AUTH}/google/callback`,
    data: {
      code: encodeURIComponent(data.code),
      state: encodeURIComponent(data.state),
    },
  })

export const getAuthTokenApi = (data: ITokenRequest) =>
  PUBLIC_PURE_API_CLIENT.get<string>({
    endpoint: `${AUTH}/token`,
    data,
  })

export const postAuthRefreshNewApi = (data: ILoginResponse) =>
  PUBLIC_PURE_API_CLIENT.post<IRefreshToken>({
    endpoint: `${AUTH}/refresh/new`,
    data,
  })

export const postAuthRefreshUseApi = (data: INewTokenRequest) =>
  PUBLIC_PURE_API_CLIENT.post<ITokensResponse>({
    endpoint: `${AUTH}/refresh/use`,
    data,
  })

export type AuthVerifyApiPayload = {
  token: string
}
export const postAuthVerifyApi = (data: AuthVerifyApiPayload) =>
  PUBLIC_PURE_API_CLIENT.post<ITokensResponse>({
    endpoint: `${AUTH}/verify`,
    data,
  })

export type AuthRequestVerifyTokenApiFilters = {
  email: string
}
export const postAuthRequestVerifyTokenApi = (data: AuthRequestVerifyTokenApiFilters) =>
  PUBLIC_PURE_API_CLIENT.post<ITokensResponse>({
    endpoint: `${AUTH}/request-verify-token`,
    data,
  })
