import { PUBLIC_API_CLIENT } from 'services/clients/clients'
import { IUpdateUser, User } from 'services/types'

const USERS = 'users'

export const getUsersMeApi = () =>
  PUBLIC_API_CLIENT.get<User>({
    endpoint: `${USERS}/me`,
  })

export const putUsersMeApi = (data: IUpdateUser) =>
  PUBLIC_API_CLIENT.put<User>({
    endpoint: `${USERS}/me`,
    data,
  })

export const deleteUsersMeApi = () =>
  PUBLIC_API_CLIENT.remove<string>({
    endpoint: `${USERS}/me`,
  })

type UsersMeChangePasswordApiPayload = {
  oldPassword: string
  newPassword: string
}
export const postUsersMeChangePasswordApi = (data: UsersMeChangePasswordApiPayload) =>
  PUBLIC_API_CLIENT.post<string>({
    endpoint: `${USERS}/me/change-password`,
    data,
  })
