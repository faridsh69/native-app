import {
  IBulkShoppingProducts,
  ICheckoutCompleteResponse,
  ICheckoutStripePayload,
  IShoppingCart,
  IShoppingOrder,
  IShoppingProductResponse,
} from 'services/types'

import { PUBLIC_API_CLIENT } from '../clients/clients'

const SHOPPING = 'shopping'

export const getShoppingProductsWinesSlugApi = (wineSlug: string) =>
  PUBLIC_API_CLIENT.get<IShoppingProductResponse>({
    endpoint: `${SHOPPING}/products/wines/slug/${wineSlug}`,
  })

type ShoppingProductsVintageBulkIdPayload = {
  vintageIds: string[]
}
export const postShoppingProductsVintageBulkIdApi = (data: ShoppingProductsVintageBulkIdPayload) =>
  PUBLIC_API_CLIENT.post<IBulkShoppingProducts>({
    endpoint: `${SHOPPING}/products/vintages/bulk-id`,
    data,
  })

export const getShoppingProductsVendorStripAccountIdApi = (vendorId: string) =>
  PUBLIC_API_CLIENT.get<string>({
    endpoint: `${SHOPPING}/vendors/${vendorId}/stripe-account-id`,
  })

export const getShoppingOrdersOrderIdApi = (orderId: string) =>
  PUBLIC_API_CLIENT.get<IShoppingOrder>({
    endpoint: `${SHOPPING}/orders/${orderId}`,
  })

export const getShoppingOrdersApi = () =>
  PUBLIC_API_CLIENT.get<IShoppingOrder[]>({
    endpoint: `${SHOPPING}/orders`,
  })

export const getShoppingCartByIdApi = (cartId: string) =>
  PUBLIC_API_CLIENT.get<IShoppingCart>({
    endpoint: `${SHOPPING}/carts/${cartId}`,
  })

type ShoppingCartsApiPayload = {
  variantId: string
  quantity: number
}
export const postShoppingCartsApi = (data: ShoppingCartsApiPayload) =>
  PUBLIC_API_CLIENT.post<IShoppingCart>({
    endpoint: `${SHOPPING}/carts`,
    data,
  })

type PostShoppingCartsLineItemsApiPayload = {
  cartId: string
  variantId: string
  quantity: number
}
export const postShoppingCartsLineItemsApi = (data: PostShoppingCartsLineItemsApiPayload) =>
  PUBLIC_API_CLIENT.put<IShoppingCart>({
    endpoint: `${SHOPPING}/carts/${data.cartId}/line-items`,
    data: {
      variantId: data.variantId,
      quantity: data.quantity,
    },
  })

type PutShoppingCartsLineItemsApiPayload = {
  cartId: string
  lineItemId: string
  quantity: number
}
export const putShoppingCartsLineItemsApi = (data: PutShoppingCartsLineItemsApiPayload) =>
  PUBLIC_API_CLIENT.put<IShoppingCart>({
    endpoint: `${SHOPPING}/carts/${data.cartId}/line-items/${data.lineItemId}?quantity=${data.quantity}`,
  })

type DeleteShoppingCartsLineItemsApiPayload = {
  cartId: string
  lineItemId: string
}
export const deleteShoppingCartsLineItemsApi = (data: DeleteShoppingCartsLineItemsApiPayload) =>
  PUBLIC_API_CLIENT.remove<IShoppingCart>({
    endpoint: `${SHOPPING}/carts/${data.cartId}/line-items/${data.lineItemId}`,
  })

export const postShoppingCartsCartIdCheckoutApi = (data: ICheckoutStripePayload) =>
  PUBLIC_API_CLIENT.post<ICheckoutCompleteResponse>({
    endpoint: `${SHOPPING}/carts/${data.cartId}/checkout/stripe-custom`,
    data: {
      shippingAddress: data.shippingAddress,
      billingAddress: data.billingAddress,
      emailAddress: data.emailAddress,
    },
  })

type ShoppingCartsCartIdCompleteApi = {
  cartId: string
}
export const postShoppingCartsCartIdCompleteApi = (data: ShoppingCartsCartIdCompleteApi) =>
  PUBLIC_API_CLIENT.post<ICheckoutCompleteResponse>({
    endpoint: `${SHOPPING}/carts/${data.cartId}/complete`,
  })

type ShoppingCartsCartIdApplyPromotionsApiPayload = {
  cartId: string
  promo_codes: string[] // promo_codes: [promoCode]
}
export const postShoppingCartsCartIdApplyPromotionsApi = (
  data: ShoppingCartsCartIdApplyPromotionsApiPayload,
) =>
  PUBLIC_API_CLIENT.post<IShoppingCart>({
    endpoint: `${SHOPPING}/carts/${data.cartId}/promotions`,
    data: {
      promo_codes: data.promo_codes,
    },
  })

type ShoppingCartsCartIdRemovePromotionsApiPayload = {
  cartId: string
  promo_codes: string[] // promo_codes: [promoCode]
}
export const deleteShoppingCartsCartIdRemovePromotionsApi = (
  data: ShoppingCartsCartIdRemovePromotionsApiPayload,
) =>
  PUBLIC_API_CLIENT.remove<IShoppingCart>({
    endpoint: `${SHOPPING}/carts/${data.cartId}/promotions`,
    data: {
      promo_codes: data.promo_codes,
    },
  })
