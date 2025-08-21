import { AUTH_API_CLIENT, PUBLIC_API_CLIENT } from '../clients/clients'

const SMARTSOMM = 'smartsomm'

export const getSmartSommAutoCompleteApi = () =>
  PUBLIC_API_CLIENT.get<string[]>({
    endpoint: `${SMARTSOMM}/auto-complete`,
    data: {
      query: 'this api is not using',
      limit: 10,
    },
  })

type SmartSommSampleQueriesApiFilters = {
  k_min: number // 1
  k_max: number // 8
}
export const getSmartSommSampleQueriesApi = (data: SmartSommSampleQueriesApiFilters) =>
  PUBLIC_API_CLIENT.get<string[]>({
    endpoint: `${SMARTSOMM}/sample-queries`,
    data,
  })

export const getSmartSommIsAvailableApi = () =>
  PUBLIC_API_CLIENT.get<boolean>({
    endpoint: `${SMARTSOMM}/is-available`,
  })

type SmartSommSampleQueryClickedApiFilters = {
  query: string
}
export const postSmartSommSampleQueryClickedApi = (data: SmartSommSampleQueryClickedApiFilters) =>
  PUBLIC_API_CLIENT.post<string>({
    endpoint: `${SMARTSOMM}/on-sample-query-clicked`,
    data,
  })

type SmartSommRegisterSessionApiFilters = {
  sessionId: string
  clientDetails: {
    platform: string // 'web'
    browser: string
    os: string // userAgentData.platform
  }
}
export const postSmartSommRegisterSessionApi = (data: SmartSommRegisterSessionApiFilters) =>
  AUTH_API_CLIENT.post<string>({
    endpoint: `${SMARTSOMM}/register-session`,
    data,
  })

export const postSmartSommMessagesIdThumpsUpApi = (messageId: number) =>
  PUBLIC_API_CLIENT.post({
    endpoint: `${SMARTSOMM}/messages/${messageId}/thumbs-up`,
  })

type SmartSommMessagesIdThumpsDownApiPayload = {
  messageId: number
  comment: string
}
export const postSmartSommMessagesIdThumpsDownApi = (
  data: SmartSommMessagesIdThumpsDownApiPayload,
) =>
  PUBLIC_API_CLIENT.post<string>({
    endpoint: `${SMARTSOMM}/messages/${data.messageId}/thumbs-down`,
    data,
  })

export const getSmartSommSettingsInteractionLimitApi = () =>
  PUBLIC_API_CLIENT.get<number>({
    endpoint: `${SMARTSOMM}/settings/interaction-limit`,
  })

// k: 5
export const getSmartSommPopularWinesApi = () =>
  PUBLIC_API_CLIENT.get({
    endpoint: `${SMARTSOMM}/settings/popular-wines`,
  })
