import { StyleSheet } from 'react-native'

import { designColors } from 'styles/common.style'

export const styles = StyleSheet.create({
  reviewCard: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#D9D9D9', // map of var(--grey-300); adjust to your theme token if you have one
    borderRadius: 12,
    flexDirection: 'column',
    gap: 20 as unknown as number, // if your RN version supports gap, remove the cast; otherwise use margins
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
    gap: 12 as unknown as number, // see note above
  },
  image: {
    overflow: 'hidden',
    marginRight: 12, // fallback if 'gap' isn't supported
  },
  container: { width: '100%' },
  card: { marginBottom: 12, borderRadius: 12 },
  skeleton: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: designColors.grey300,
  },
})
