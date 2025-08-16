import { ComponentProps } from 'react'

import { StyleProp, TextStyle } from 'react-native'

import { SymbolWeight } from 'expo-symbols'

import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { IconsEnum, SizesEnum } from 'enums/enums'

export type IconProps = {
  icon: IconsEnum
  size?: number | SizesEnum
  color?: string
  style?: StyleProp<TextStyle>
  weight?: SymbolWeight
  useSF?: boolean
}

export const SIZE_MAP: Record<SizesEnum, number> = {
  [SizesEnum.S]: 16,
  [SizesEnum.M]: 20,
  [SizesEnum.L]: 24,
}

export const FONT_AWESOME_MAPPING: Partial<
  Record<IconsEnum, ComponentProps<typeof FontAwesome>['name']>
> = {
  [IconsEnum.Share]: 'share',
  [IconsEnum.Comment]: 'comment',
  [IconsEnum.Like]: 'heart',
  [IconsEnum.Dots]: 'ellipsis-h',
  [IconsEnum.Verified]: 'check-circle',
  [IconsEnum.Filters]: 'filter',
  [IconsEnum.Review]: 'star-half',
  [IconsEnum.Post]: 'file-text',
  [IconsEnum.View]: 'eye',
  [IconsEnum.CloseSmall]: 'times',
  [IconsEnum.CloseMedium]: 'times-circle',
  [IconsEnum.CloseBold]: 'close',
  [IconsEnum.Burger]: 'bars',
  [IconsEnum.ArrowDown]: 'arrow-down',
  [IconsEnum.ArrowRight]: 'arrow-right',
  [IconsEnum.ArrowLeft]: 'arrow-left',
  [IconsEnum.Geo]: 'map-marker',
  [IconsEnum.User]: 'user',
  [IconsEnum.Tag]: 'tag',
  [IconsEnum.Basket]: 'shopping-basket',
  [IconsEnum.Logo]: 'star',
  [IconsEnum.Sort]: 'sort',
  [IconsEnum.Plus]: 'plus',
  [IconsEnum.Star]: 'star',
  [IconsEnum.Car]: 'car',
  [IconsEnum.ArrowLogo]: 'arrow-circle-up',
  [IconsEnum.Check]: 'check',
  [IconsEnum.Invisible]: 'eye-slash',
  [IconsEnum.Visible]: 'eye',
  [IconsEnum.Info]: 'info-circle',
  [IconsEnum.Mines]: 'minus-circle',
  [IconsEnum.Success]: 'check-circle',
  [IconsEnum.Warning]: 'exclamation-triangle',
  [IconsEnum.Error]: 'times-circle',
  [IconsEnum.France]: 'flag',
}

export const MATERIAL_ICON_MAPPING: Partial<
  Record<IconsEnum, ComponentProps<typeof MaterialIcons>['name']>
> = {
  [IconsEnum.Check]: 'check',
  [IconsEnum.Info]: 'info',
  [IconsEnum.Warning]: 'warning',
  [IconsEnum.Error]: 'error',
  [IconsEnum.CloseSmall]: 'close',
  [IconsEnum.CloseMedium]: 'cancel',
  [IconsEnum.CloseBold]: 'highlight-off',
}
