import { StyleSheet } from 'react-native'

import { BorderRadius, Colors, Sizes, Spacing } from 'styles/common.style'

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.grey600,
    borderRadius: BorderRadius.s,
  },

  size_s: { width: Sizes.s, height: Sizes.s },
  size_m: { width: Sizes.m, height: Sizes.m },
  size_l: { width: Sizes.l, height: Sizes.l },

  checked: {
    backgroundColor: Colors.black,
  },
  unchecked: {
    backgroundColor: Colors.white,
  },
  disabled: {
    opacity: 0.6,
  },
  error: {
    borderColor: Colors.dangerLight,
  },

  label: {
    marginLeft: Spacing.s,
  },
})
