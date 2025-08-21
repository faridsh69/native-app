import {
  AuthEmailAvailabilityApiFilters,
  AuthForgetPasswordApiPayload,
  AuthGoogleAuthorizeApiFilters,
  AuthGoogleCallbackApiFilters,
  AuthRequestVerifyTokenApiFilters,
  AuthVerifyApiPayload,
} from 'services/apis/authApis'
import { UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { useCrud } from 'services/coreHooks/useCrud'
import {
  ILoginRequest,
  ILoginResponse,
  INewPasswordRequest,
  INewTokenRequest,
  User,
} from 'services/types'

export const useCrudAuthRegister = () =>
  useCrud<User>({
    queryKey: UTILS_QUERY_KEYS.auth.register,
  })

export const useCrudEmailAvailablity = (filters: AuthEmailAvailabilityApiFilters) =>
  useCrud<boolean>({
    queryKey: UTILS_QUERY_KEYS.auth.emailAvailability,
    filters,
    configs: { enabled: !!filters.email },
  })

export const useCrudAuthLogin = () =>
  useCrud<ILoginRequest>({ queryKey: UTILS_QUERY_KEYS.auth.jwtLogin })

export const useCrudAuthLogout = () =>
  useCrud<{ id?: string }>({ queryKey: UTILS_QUERY_KEYS.auth.jwtLogout })

export const useCrudAuthForgetPassword = () =>
  useCrud<AuthForgetPasswordApiPayload>({ queryKey: UTILS_QUERY_KEYS.auth.forgetPassword })

export const useCrudAuthResetPassword = () =>
  useCrud<INewPasswordRequest>({ queryKey: UTILS_QUERY_KEYS.auth.resetPassword })

export const useCrudAuthGoogleAuthorize = () =>
  useCrud<AuthGoogleAuthorizeApiFilters>({ queryKey: UTILS_QUERY_KEYS.auth.googleAuthorize })

export const useCrudAuthGoogleCallback = () =>
  useCrud<AuthGoogleCallbackApiFilters>({ queryKey: UTILS_QUERY_KEYS.auth.googleCallback })

export const useCrudAuthToken = () => useCrud<string>({ queryKey: UTILS_QUERY_KEYS.auth.token })

export const useCrudAuthRefreshNew = () =>
  useCrud<ILoginResponse>({ queryKey: UTILS_QUERY_KEYS.auth.refreshNew })

export const useCrudAuthRefreshUse = () =>
  useCrud<INewTokenRequest>({ queryKey: UTILS_QUERY_KEYS.auth.refreshUse })

export const useCrudAuthVerify = () =>
  useCrud<AuthVerifyApiPayload>({ queryKey: UTILS_QUERY_KEYS.auth.verify })

export const useCrudAuthRequestVerifyToken = () =>
  useCrud<AuthRequestVerifyTokenApiFilters>({ queryKey: UTILS_QUERY_KEYS.auth.requestVerifyToken })
