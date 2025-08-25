import { StyleSheet } from 'react-native'

import { designColors } from 'styles/common.style'

export const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: designColors.white,
    backgroundColor: 'transparent',
  },
  logoBtn: {},
  centerWrap: {
    alignItems: 'center',
    gap: 12,
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
  },
  optionBtn: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '600',
  },
  rightBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    gap: 6,
  },
})
