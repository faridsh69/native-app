import { StyleSheet } from 'react-native'

import { designColors } from 'styles/common.style'

export const styles = StyleSheet.create({
  comment: {
    flexDirection: 'column',
    gap: 10,
  },
  content: {
    flexDirection: 'column',
    gap: 16,
    borderLeftWidth: 1,
    borderLeftColor: designColors.grey300,
    paddingLeft: 24,
  },
  actions: {
    flexDirection: 'row',
    gap: 20,
  },
  commentBtn: {
    alignSelf: 'flex-end',
  },
})
