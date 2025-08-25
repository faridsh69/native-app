import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
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
