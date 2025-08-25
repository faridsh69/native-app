import { StyleSheet } from 'react-native'

import { designColors } from 'styles/common.style'

export const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'flex-start',
    maxWidth: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 1,
    gap: 8,
  },
  close: {
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  noHover: {
    pointerEvents: 'none',
    borderColor: designColors.grey400,
  },
})
