import { StyleSheet } from 'react-native'

import { designColors } from 'styles/common.style'

export const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
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
