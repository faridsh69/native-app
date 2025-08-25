import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 24,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  textareaWrap: {
    position: 'relative',
    flexDirection: 'column',
    gap: 5,
    alignItems: 'flex-end',
  },
  commentBtn: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
})
