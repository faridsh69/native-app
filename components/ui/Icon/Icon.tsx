import React from 'react'

import { Platform } from 'react-native'

import { SymbolView } from 'expo-symbols'

import { FontAwesome } from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { ColorsEnum, SizesEnum } from 'enums/enums'

import { FONT_AWESOME_MAPPING, IconProps, MATERIAL_ICON_MAPPING, SIZE_MAP } from './Icon.types'

export const Icon = (props: IconProps) => {
  const {
    icon,
    size = SizesEnum.M,
    color = ColorsEnum.Black,
    style,
    weight = 'regular',
    useSF = false,
  } = props
  const resolvedSize = typeof size === 'number' ? size : SIZE_MAP[size]

  // Use SF Symbols on iOS if flag is true
  if (Platform.OS === 'ios' && useSF) {
    const sfName = icon ? MATERIAL_ICON_MAPPING[icon] : undefined

    return (
      <SymbolView
        // @ts-ignore
        name={sfName}
        weight={weight}
        tintColor={color}
        resizeMode='scaleAspectFit'
        style={[{ width: resolvedSize, height: resolvedSize }]}
      />
    )
  }

  const faName = FONT_AWESOME_MAPPING[icon]
  if (faName) return <FontAwesome name={faName} size={resolvedSize} color={color} style={style} />

  // MaterialIcons (Android/Web)
  const miName = MATERIAL_ICON_MAPPING[icon] || 'help-outline'
  return <MaterialIcons name={miName} size={resolvedSize} color={color} style={style} />
}
