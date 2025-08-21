import { PUBLIC_API_CLIENT } from '../clients/clients'

const COMMON = 'posts'

export const getProductsApi = (filters: { page: number; perPage: number }) =>
  PUBLIC_API_CLIENT.get({
    endpoint: `${COMMON}`,
    data: {
      page: filters.page,
      per_page: filters.perPage,
    },
  })

export const getProductApi = (entityId: number) =>
  PUBLIC_API_CLIENT.get({
    endpoint: `${COMMON}/${entityId}`,
  })

export const createProductApi = (data: object) =>
  PUBLIC_API_CLIENT.post({
    endpoint: COMMON,
    data,
  })

export const updateProductApi = (data: { id: number }) =>
  PUBLIC_API_CLIENT.put({
    endpoint: `${COMMON}/${data.id}`,
    data,
  })

export const deleteProductApi = (entityId: number) =>
  PUBLIC_API_CLIENT.remove({
    endpoint: `${COMMON}/${entityId}`,
  })
