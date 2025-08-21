import { UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { useCrud } from 'services/coreHooks/useCrud'

export const useCrudSmartsommAutoComplete = () =>
  useCrud<void>({ queryKey: UTILS_QUERY_KEYS.smartsomm.autoComplete })

type SmartSommSampleQueriesApiFiltersType = {
  k_min: number
  k_max: number
}
export const useCrudSmartSommSampleQueries = (filters: SmartSommSampleQueriesApiFiltersType) =>
  useCrud<string>({ queryKey: UTILS_QUERY_KEYS.smartsomm.sampleQueries, modelId: 0, filters })

export const useCrudSmartSommIsAvailable = () =>
  useCrud<boolean>({ queryKey: UTILS_QUERY_KEYS.smartsomm.isAvailable })

type SampleQueryClickType = {
  query: string
}
export const useCrudSmartSommSampleQueryClicked = () =>
  useCrud<SampleQueryClickType>({ queryKey: UTILS_QUERY_KEYS.smartsomm.onSampleQueryClicked })

type RegisterSessionType = {
  query: string
  session_id: string
}
export const useCrudSmartSommRegisterSession = () =>
  useCrud<RegisterSessionType>({ queryKey: UTILS_QUERY_KEYS.smartsomm.registerSession })

type MessageThumbType = {
  message_id: number
}
export const useCrudSmartSommMessagesIdThumpsUp = () =>
  useCrud<MessageThumbType>({ queryKey: UTILS_QUERY_KEYS.smartsomm.messagesIdThumpsUp })

export const useCrudSmartSommMessagesIdThumpsDown = () =>
  useCrud<MessageThumbType>({ queryKey: UTILS_QUERY_KEYS.smartsomm.messagesIdThumpsDown })

export const useCrudSmartSommSettingsInteractionLimit = () =>
  useCrud<any>({ queryKey: UTILS_QUERY_KEYS.smartsomm.settingsInteractionLimit })
