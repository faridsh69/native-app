import { IShareDetails, ISharedToken, ShareTokenSource } from 'services/types'

import { PUBLIC_API_CLIENT } from '../clients/clients'

const SHARING = 'sharing'

type SharingTokenApiFilters = {
  source: ShareTokenSource
}
export const getSharingTokenApi = (data: SharingTokenApiFilters) =>
  PUBLIC_API_CLIENT.get<ISharedToken>({
    endpoint: `${SHARING}/token`,
    data,
  })

type SharingDetailApiFilters = {
  token: string
}
export const getSharingDetailApi = (data: SharingDetailApiFilters) =>
  PUBLIC_API_CLIENT.get<IShareDetails>({
    endpoint: `${SHARING}/detail`,
    data,
  })
