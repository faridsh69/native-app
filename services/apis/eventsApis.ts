import { PUBLIC_API_CLIENT } from '../clients/clients'

const EVENTS = 'events'

type EventsShopClickApiPayload = {
  // ShopClickApiEvent
  vintageId: string
  searchId: string
  shopUrl: string
}
export const postEventsShopClickApi = (data: EventsShopClickApiPayload) =>
  PUBLIC_API_CLIENT.post({
    endpoint: `${EVENTS}/shop-click`,
    data,
  })

type EventsWineShareApiPayload = {
  // WineShareClickApiEvent
  vintageId: string
}
export const postEventsWineShareApi = (data: EventsWineShareApiPayload) =>
  PUBLIC_API_CLIENT.post({
    endpoint: `${EVENTS}/wine-share`,
    data,
  })

type EventsSearchResultClickApiPayload = {
  // SearchResultClickApiEvent
  vintageId: string
  searchId: string
  resultIndex: number
}
export const postEventsSearchResultClickApi = (data: EventsSearchResultClickApiPayload) =>
  PUBLIC_API_CLIENT.post({
    endpoint: `${EVENTS}/search-result-click`,
    data,
  })
