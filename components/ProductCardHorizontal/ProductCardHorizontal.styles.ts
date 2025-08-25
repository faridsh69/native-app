import { StyleSheet } from 'react-native'

import { designColors } from 'styles/common.style'

export const styles = StyleSheet.create({
  productCard: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: designColors.beige,
    borderRadius: 16,
    padding: 10,
    overflow: 'hidden',
  },

  imageHolder: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    flexShrink: 0,
  },

  content: {
    flex: 1,
    minWidth: 0,
  },

  titleRow: {
    minWidth: 0,
    marginBottom: 8,
  },

  rate: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 2,
    marginBottom: 6,
  },
  iconPad: {
    marginRight: 6,
  },

  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 4,
    minWidth: 0,
  },
  tagItem: {
    marginRight: 4,
    marginBottom: 4,
    flexShrink: 1,
    minWidth: 0,
  },
})
