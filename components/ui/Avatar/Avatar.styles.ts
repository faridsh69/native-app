import { StyleSheet } from 'react-native'

import { SizesEnum } from 'enums/enums'
import { Colors, Sizes } from 'styles/common.style'

export const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: Colors.grey100,
    borderWidth: 1,
    borderColor: 'transparent',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  size_s: {
    width: Sizes.s,
    height: Sizes.s,
    borderRadius: Sizes.s / 2,
  },
  size_m: {
    width: Sizes.m,
    height: Sizes.m,
    borderRadius: Sizes.m / 2,
  },
  size_l: {
    width: Sizes.l,
    height: Sizes.l,
    borderRadius: Sizes.l / 2,
  },
})

export const iconSize: Record<SizesEnum, number> = {
  [SizesEnum.S]: Sizes.s * 0.5,
  [SizesEnum.M]: Sizes.m * 0.5,
  [SizesEnum.L]: Sizes.l * 0.5,
}
