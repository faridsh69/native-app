import { StyleSheet } from 'react-native'

import { SizesEnum } from 'enums/enums'
import { designColors, designHeights } from 'styles/common.style'

export const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: designColors.grey100,
    borderWidth: 1,
    borderColor: 'transparent',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  size_s: {
    width: designHeights.s,
    height: designHeights.s,
    borderRadius: designHeights.s / 2,
  },
  size_m: {
    width: designHeights.m,
    height: designHeights.m,
    borderRadius: designHeights.m / 2,
  },
  size_l: {
    width: designHeights.l,
    height: designHeights.l,
    borderRadius: designHeights.l / 2,
  },
})

export const iconSize: Record<SizesEnum, number> = {
  [SizesEnum.S]: designHeights.s * 0.5,
  [SizesEnum.M]: designHeights.m * 0.5,
  [SizesEnum.L]: designHeights.l * 0.5,
}
