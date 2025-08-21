export interface ILoginRequest {
  username: string
  password: string
}

export interface ILoginResponse {
  accessToken: string
  tokenType: string
}

export interface IRefreshToken {
  token: string
}

export interface ITokensResponse extends ILoginResponse {
  refreshToken: string
}

export interface INewTokenRequest {
  token: string
  email: string
}

export interface INewPasswordRequest {
  token: string
  password: string
}

export interface ITokenRequest {
  code: string
  email: string
}

export enum OnboardingFlow {
  ONBOARDING = 'Onboarding',
  LOGIN = 'Login',
  NEW_ACCOUNT = 'NewAccount',
  NEW_PASSWORD = 'NewPassword',
  FORGOT_PASSWORD = 'ForgotPassword'
}
