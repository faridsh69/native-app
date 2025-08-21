import { IContactUs, IGetUpdateUPP, IPartnership } from 'services/types'

import { FIREBASE_API_CLIENT, PUBLIC_API_CLIENT } from '../clients/clients'

// { path, query }
type OthersCreateAppLinkApiPayload = {
  path: string
  query: string
}
export const postOthersCreateAppLinkApi = (data: OthersCreateAppLinkApiPayload) =>
  FIREBASE_API_CLIENT.post({
    endpoint: `createAppLink`,
    data,
  })

type NewsletterSubscriptionApiPayload = {
  email: string
}

export const postOtherNewsletterSubscriptionApi = (data: NewsletterSubscriptionApiPayload) =>
  PUBLIC_API_CLIENT.post<string>({
    endpoint: `newsletter_subscription`,
    data,
  })

export const postOtherPartnershipApi = (data: IPartnership) =>
  PUBLIC_API_CLIENT.post<string>({
    endpoint: `partnership`,
    data,
  })

export const postOtherContactUsApi = (data: IContactUs) =>
  PUBLIC_API_CLIENT.post<string>({
    endpoint: `contact_us`,
    data,
  })

export const deleteOtherNewsletterSubscriptionApi = (data: IContactUs) =>
  PUBLIC_API_CLIENT.remove<string>({
    endpoint: `newsletter-subscription`,
    data,
  })

export const getOtherUppUpdate = (data: IContactUs) =>
  PUBLIC_API_CLIENT.remove<IGetUpdateUPP>({
    endpoint: `upp/update`,
    data,
  })
