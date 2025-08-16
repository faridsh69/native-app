import { TextStyle } from 'react-native'

export const Colors = {
  white: '#ffffff',
  black: '#000000',

  grey100: '#f2f2f2',
  grey200: '#e2ecef',
  grey300: '#e6e6e6',
  grey400: '#d9d9d9',
  grey500: '#cccccc',
  grey600: '#999999',
  grey700: '#666666',
  grey800: '#333333',

  beige: '#f9f7f1',

  primaryMain: '#000000',
  primaryInverse: '#ffffff',
  primaryDark: '#333333',
  primaryLight: '#f2f2f2',

  secondaryMain: '#ffffff',
  secondaryInverse: '#000000',
  secondaryDark: '#333333',
  secondaryLight: '#f2f2f2',

  error: '#c92121',
  errorLight: '#ee2c2c',
  success: '#1eb82b',
  warning: '#ff9b44',

  disabledMain: '#cccccc',
  disabledInverse: '#666666',
}

export const FontSizes = {
  text12: 12,
  text14: 14,
  text16: 16,
  text18: 18,
  text20: 20,
  text22: 22,
  text26: 26,
  text30: 30,
  text40: 40,
  text50: 50,
}

export const FontWeights = {
  regular: '400' as TextStyle['fontWeight'],
  medium: '500' as TextStyle['fontWeight'],
  bold: '700' as TextStyle['fontWeight'],
}

export const fonts: { [key: string]: TextStyle } = {
  text12: { fontSize: FontSizes.text12, fontWeight: FontWeights.regular },
  text14: { fontSize: FontSizes.text14, fontWeight: FontWeights.regular },
  text16: { fontSize: FontSizes.text16, fontWeight: FontWeights.regular },
  header12: { fontSize: FontSizes.text12, fontWeight: FontWeights.bold },
  header14: { fontSize: FontSizes.text14, fontWeight: FontWeights.bold },
  header16: { fontSize: FontSizes.text16, fontWeight: FontWeights.bold },
  header18: { fontSize: FontSizes.text18, fontWeight: FontWeights.bold },
  header20: { fontSize: FontSizes.text20, fontWeight: FontWeights.bold },
  header22: { fontSize: FontSizes.text22, fontWeight: FontWeights.bold },
  header26: { fontSize: FontSizes.text26, fontWeight: FontWeights.bold },
  header30: { fontSize: FontSizes.text30, fontWeight: FontWeights.bold },
}

export const Spacing = { s: 8, m: 16, l: 20 }
export const Sizes = { s: 30, m: 40, l: 48 }
export const BorderRadius = { s: 4, m: 6, l: 8 }

export const inputStyle: TextStyle = {
  fontFeatureSettings: "'pnum' on, 'lnum' on",
}
