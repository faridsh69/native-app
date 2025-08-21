import { IGrapeFood, IGrapeGroupByInitial, IKeyGrape, ITopGrape, IWineGrape } from 'services/types'

import { PUBLIC_API_CLIENT } from '../clients/clients'

const GRAPE = 'grape'
const GRAPES = 'grapes'

export const getGrapesSlugApi = (slug: string) =>
  PUBLIC_API_CLIENT.get<IWineGrape>({
    endpoint: `${GRAPE}/${slug}`,
  })

type GrapesGroupByInitialApiFilters = { initial_characters: number }
export const getGrapesGroupByInitialApi = (data: GrapesGroupByInitialApiFilters) =>
  PUBLIC_API_CLIENT.get<IGrapeGroupByInitial[]>({
    endpoint: `${GRAPES}/group-by-initial`,
    data,
  })

export const getGrapesTopGrapesApi = () =>
  PUBLIC_API_CLIENT.get<ITopGrape[]>({
    endpoint: `${GRAPES}/top-grapes`,
  })

export const getGrapesKeyGrapesApi = () =>
  PUBLIC_API_CLIENT.get<IKeyGrape[]>({
    endpoint: `${GRAPES}/key-grapes`,
  })

type GrapesGrapeFoodsApiFilters = {
  grape_name: string
}
export const getGrapesGrapeFoodsApi = (data: GrapesGrapeFoodsApiFilters) =>
  PUBLIC_API_CLIENT.get<IGrapeFood>({
    endpoint: `grape-foods`,
    data,
  })
