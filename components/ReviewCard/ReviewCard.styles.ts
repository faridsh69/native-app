import { StyleSheet } from 'react-native'

import { designColors } from 'styles/common.style'

export const styles = StyleSheet.create({
  reviewCard: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: designColors.grey300,
    borderRadius: 12,
    flexDirection: 'column',
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userinfo: {
    flex: 1,
  },
  images: {
    flexDirection: 'row',
    gap: 12,
  },
  image: {
    overflow: 'hidden',
    marginRight: 12,
  },
  container: { width: '100%' },
  card: { marginBottom: 12, borderRadius: 12 },
  skeleton: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: designColors.grey300,
  },
})
