import React from 'react'

import { Image, ImageStyle, StyleProp, View, ViewStyle } from 'react-native'

import { IconsEnum, SizesEnum } from 'enums/enums'

import { Icon } from 'components/ui/Icon/Icon'

import { iconSize, styles } from './Avatar.styles'
import { AvatarProps } from './Avatar.types'

export const Avatar = ({ avatar, size = SizesEnum.M }: AvatarProps) => {
  const containerStyle: StyleProp<ViewStyle> = [styles.avatar, styles[`size_${size}`]]

  const imageStyle: StyleProp<ImageStyle> = [styles.image]

  return (
    <View
      style={containerStyle}
      accessibilityRole='image'
      accessibilityLabel={avatar ? 'User avatar' : 'Default avatar'}
    >
      {avatar ? (
        <Image source={{ uri: avatar }} style={imageStyle} resizeMode='cover' />
      ) : (
        <Icon icon={IconsEnum.User} size={iconSize[size]} />
      )}
    </View>
  )
}
