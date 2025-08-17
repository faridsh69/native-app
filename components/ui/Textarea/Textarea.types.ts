import type {
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
} from 'react-native'

import { TextareaSizes } from './Textarea.enums'

export interface TextareaProps extends Omit<TextInputProps, 'onChange'> {
  value?: string
  onChange?: (text: string) => void
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void

  label?: string
  disabled?: boolean
  size?: TextareaSizes
  required?: boolean
  hasError?: boolean
  hint?: string
  hintZIndex?: number
  min?: number
  max?: number
  width?: any
  placeholder?: string
  isResizable?: boolean
  errorText?: string
  wrapperClassName?: string
  numberOfLines?: number
  style?: StyleProp<TextStyle>
}

export type CharacterCounterProps = {
  valueLength?: number
  min?: number
  max?: number
  invalidLength?: boolean
}
