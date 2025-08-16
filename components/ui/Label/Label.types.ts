import { StyleProp, TextProps, TextStyle } from 'react-native'

import { FontsEnum, TextAlignEnum } from 'enums/enums'

export interface LabelProps extends TextProps {
  label: string
  disabled?: boolean
  required?: boolean
  hasError?: boolean
  active?: boolean
  hint?: string
  font?: FontsEnum
  textAlign?: TextAlignEnum
  style?: StyleProp<TextStyle>
}
