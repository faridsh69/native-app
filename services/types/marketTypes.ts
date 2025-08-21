import type { ISearchVintageWineData } from './wineSearchTypes'

export interface IShoppingProductResponse {
  variantId: string
  bottleVolume: string
  priceAmount: number
  stockQuantity: number
  vendorId: string
  vendorName: string
  vintageSlug: string
  vintageYear: number
  vintageId: string
  wineSlug: string
  wineId: number
  usMarketStates: string[]
}

export type IBulkShoppingProducts = Record<number | string, IShoppingProductResponse>

export interface ICartVendor {
  id: string
  name: string
}

export interface ILineItem {
  id: string
  variantId: string
  productId: string
  productTitle: string
  quantity: number
  stockQuantity: number
  unitPrice: number
  vendor: ICartVendor
  usMarketStates: string[]
  total: number
  compactVintage: ISearchVintageWineData
}

export interface IAddress {
  firstName: string
  lastName: string
  phone: string
  address1: string
  address2?: string
  city: string
  postalCode: string
  countryCode: string
  province: string
}

export interface ICheckoutShippingInfo {
  email: string
  nameOnCard: string
  isSameAsShipping: boolean
  isShippingProvinceChanged: boolean
  shippingAddress: IAddress
  billingAddress: IAddress
}

export interface IShoppingCart {
  id: string
  lineItems: ILineItem[]
  itemSubtotal: number
  shippingTotal: number
  itemTaxTotal: number
  total: number
  shippingAddress: IAddress
  billingAddress: IAddress
  completedAt: string
  usMarketState: string
  cartVendor: ICartVendor
  paymentCollection: IPaymentCollection
  shippingDeliveryEstimate: string
  shippingFreeDelivery: number
  errorItemsNotAvailable: ILineItem[]
  errorMessage: string
  promotions: string[]
  discountSubtotal: number
}

export interface IRawAmount {
  precision: number
  value: number | string
}

export interface IPaymentSessionData {
  clientSecret: string
}
export interface IPaymentSession {
  data: IPaymentSessionData
}

export interface IPaymentCollection {
  amount: number
  authorizedAmount: number
  capturedAmount: number
  completedAt: string | null
  createdAt: string | null
  currencyCode: string
  deletedAt: string | null
  id: string
  metadata: any
  updatedAt: string | null
  refundedAmount: number
  status: 'authorized'
  rawAmount: IRawAmount
  rawAuthorizedAmount: IRawAmount
  rawCapturedAmount: IRawAmount
  rawRefundedAmount: IRawAmount
  paymentSessions: IPaymentSession[]
}

export interface IShippingTracking {
  carrier: string
  trackingNumber: string
  trackingUrl: string
}

export interface IShoppingOrder {
  id: string
  email: string
  createdAt: string
  shippingAddress: IAddress
  billingAddress: IAddress
  lineItems: ILineItem[]
  paymentCollections: IPaymentCollection[]
  itemSubtotal: number
  shippingTotal: number
  itemTaxTotal: number
  total: number
  status: string
  paymentStatus: string
  fulfillmentStatus: string
  shippingTrackingNumber: string[] | null
  shippingDeliveryEstimate: string
  shippingFreeDelivery: number
  shippingTracking: IShippingTracking[] | null
  fulfilledAt?: string
}

export interface ICheckoutStripePayload {
  shippingAddress: Omit<IAddress, 'province' | 'countryCode'>
  billingAddress: Omit<IAddress, 'countryCode'>
  emailAddress: string
  cartId: string
}

export interface ICheckoutCompleteResponse {
  cart: IShoppingCart
  order?: IShoppingOrder
}

export interface IShoppingPrice {
  priceAmount: number
  variantId: string
  vintageId: string
  wineId: number
  vendorId: string
}

export interface IOrderLineItem extends ILineItem {
  compactVintage: ISearchVintageWineData
  stockQuantity: number
}
