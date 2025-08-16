import { StyleSheet } from 'react-native'

import { Colors, Sizes, Spacing } from 'styles/common.style'

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    userSelect: 'none',
    gap: 8,
    borderRadius: 20,
  },

  size_s: {
    height: Sizes.s,
    minHeight: Sizes.s,
    paddingHorizontal: Spacing.s,
    // borderRadius: BorderRadius.m,
  },
  size_m: {
    height: Sizes.m,
    minHeight: Sizes.m,
    paddingHorizontal: Spacing.m,
    // borderRadius: BorderRadius.m,
  },
  size_l: {
    height: Sizes.l,
    minHeight: Sizes.l,
    paddingHorizontal: Spacing.l,
    // borderRadius: BorderRadius.l,
  },

  variant_primary: {
    backgroundColor: Colors.primaryMain,
    borderColor: Colors.primaryMain,
    color: Colors.primaryInverse,
  },
  variant_secondary: {
    backgroundColor: Colors.secondaryMain,
    borderColor: Colors.secondaryInverse,
    color: Colors.secondaryInverse,
  },
  variant_text: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: Colors.black,
    minHeight: 30,
    paddingHorizontal: 0,
    position: 'relative',
  },

  // Active states
  active_primary: {
    backgroundColor: Colors.primaryInverse,
    color: Colors.primaryMain,
    borderColor: Colors.primaryMain,
  },
  active_secondary: {
    backgroundColor: Colors.secondaryInverse,
    color: Colors.secondaryMain,
    borderColor: Colors.black,
  },
  active_text: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },

  disabled: {
    backgroundColor: Colors.disabledMain,
    color: Colors.disabledInverse,
    borderWidth: 0,
    opacity: 0.5,
  },

  noBorderRadius_left: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  noBorderRadius_right: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  noBorderRadius_top: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  noBorderRadius_bottom: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },

  noHover: {},
})
