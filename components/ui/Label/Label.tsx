import React from 'react'

import { StyleProp, Text, TextStyle, View } from 'react-native'

import { ColorsEnum, FontsEnum, IconsEnum, TextAlignEnum } from 'enums/enums'
import { useThemeColor } from 'hooks/useThemeColor'

import { Icon } from '../Icon/Icon'
import { styles } from './Label.styles'
import { LabelProps } from './Label.types'

export const Label = ({
  label,
  disabled = false,
  required = false,
  hasError = false,
  active = false,
  hint,
  font = FontsEnum.Text16,
  textAlign = TextAlignEnum.Left,
  style,
  lightColor,
  darkColor,
  ...rest
}: LabelProps & { lightColor?: string; darkColor?: string }) => {
  if (!label) return null

  const baseColor = useThemeColor({ light: lightColor, dark: darkColor }, ColorsEnum.Black)
  const errorColor = useThemeColor({}, ColorsEnum.Error)
  const disabledColor = useThemeColor({}, ColorsEnum.Disabled)
  const activeColor = useThemeColor({}, ColorsEnum.PrimaryMain)

  const color = hasError ? errorColor : disabled ? disabledColor : active ? activeColor : baseColor

  const fontStyle: StyleProp<TextStyle> = [font, { color: color.toString(), textAlign }, style]

  return (
    <View style={styles.wrapper} accessible accessibilityLabel={label}>
      <Text style={fontStyle} {...rest}>
        {label}
      </Text>
      {required && <Text style={[fontStyle, styles.required]}> *</Text>}
      {hint && <Icon icon={IconsEnum.Info} style={styles.hint} />}
    </View>
  )
}
