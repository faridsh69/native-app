import { APIUserLocationDataType } from 'services/types/geoTypes'

import { PUBLIC_API_CLIENT } from '../clients/clients'

const LOCATION = 'location'

export const getLocationMarketLocationHeaderApi = () =>
  PUBLIC_API_CLIENT.get<APIUserLocationDataType>({
    endpoint: `${LOCATION}/market-location-header`,
  })

export const getLocationIpAddressApi = () =>
  PUBLIC_API_CLIENT.get<APIUserLocationDataType>({
    endpoint: `${LOCATION}/ip-address`,
  })

type LocationReverseGeocodeApiFilters = {
  latitude: number
  longitude: number
}
export const getLocationReverseGeocodeApi = (data: LocationReverseGeocodeApiFilters) =>
  PUBLIC_API_CLIENT.get<APIUserLocationDataType>({
    endpoint: `reverse-geocode`,
    data,
  })
