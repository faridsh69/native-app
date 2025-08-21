import { UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { useCrud } from 'services/coreHooks/useCrud'

type LocationType = {
  country: string
  medusa_us_state: string
  region: string
}

export const useCrudLocationIpAddress = () => {
  return useCrud<LocationType>(UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS.location.ipAddress)
}

export const useCrudLocationMarketLocationHeader = () => {
  return useCrud<LocationType>(UTILS_QUERY_KEY_APIS, UTILS_QUERY_KEYS.location.marketLocationHeader)
}

type LocationReverseGeocodeType = {
  latitude: number
  longitude: number
}
export const useCrudLocationReverseGeocode = (filters: LocationReverseGeocodeType) => {
  return useCrud<LocationType>(
    UTILS_QUERY_KEY_APIS,
    UTILS_QUERY_KEYS.location.reverseGeocode,
    0,
    filters,
  )
}
