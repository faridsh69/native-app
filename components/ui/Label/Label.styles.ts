import { StyleSheet } from 'react-native'
import { Spacing } from 'styles/common.style'

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  required: {
    marginLeft: 2,
  },
  hint: {
    marginLeft: Spacing.s,
  },
})
