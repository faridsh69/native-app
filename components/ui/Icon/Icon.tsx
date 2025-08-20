import React from 'react'

import { Platform } from 'react-native'

import { SymbolView } from 'expo-symbols'

import { FontAwesome } from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { ColorsEnum, SizesEnum } from 'enums/enums'
import Svg from 'react-native-svg'

import {
  FontAwesomeMapping,
  IconProps,
  MaterialIconMapping,
  sizeMapping,
  svgMapping,
} from './Icon.types'

export const Icon = (props: IconProps) => {
  const { icon, size = SizesEnum.M, color = ColorsEnum.Black, className, style } = props
  const height = typeof size === 'number' ? size : sizeMapping[size]
  const svgData = svgMapping[icon]

  if (svgData) {
    const { Svg: IconPaths, viewBox } = svgData

    return (
      <Svg
        width={height}
        height={height}
        viewBox={viewBox}
        fill={'transparent'}
        color={color}
        style={style}
        className={className}
      >
        <IconPaths />
      </Svg>
    )
  }

  if (Platform.OS === 'ios') {
    const sfName = icon ? MaterialIconMapping[icon] : undefined

    return (
      <SymbolView
        // @ts-ignore
        name={sfName}
        weight='regular'
        tintColor={color}
        resizeMode='scaleAspectFit'
        style={[{ width: height, height: height }]}
      />
    )
  }

  const faName = FontAwesomeMapping[icon]
  if (faName) return <FontAwesome name={faName} size={height} color={color} style={style} />

  // MaterialIcons (Android/Web)
  const miName = MaterialIconMapping[icon] || 'help-outline'
  return <MaterialIcons name={miName} size={height} color={color} style={style} />
}
