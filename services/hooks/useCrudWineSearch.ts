import { UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { VintagesSearchWithMetaApiPayload } from 'services/apis/vintageApis'
import { useCrud } from 'services/coreHooks/useCrud'

export const useCrudVintagesSearchWithMeta = () =>
  useCrud<VintagesSearchWithMetaApiPayload>({ queryKey: UTILS_QUERY_KEYS.vintages.searchWithMeta })
