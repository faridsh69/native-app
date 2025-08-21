import { StyleSheet } from 'react-native'

import { designColors } from 'styles/common.style'

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },

  loading: {
    opacity: 0,
  },

  cached: {
    transitionDuration: 'none',
  },

  skeleton: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: designColors.grey300,
  },
})
