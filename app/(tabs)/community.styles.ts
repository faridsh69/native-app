import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    paddingTop: 16,
    paddingBottom: 24,
  },
  row: {
    flexDirection: 'column',
    gap: 0,
  },
  leftColumn: {
    width: '100%',
  },
  centerColumn: {
    width: '100%',
  },
  rightColumn: {
    width: '100%',
  },
  leftSidebar: {
    marginTop: 24,
  },
  rightSidebar: {
    marginTop: 24,
    flexDirection: 'column',
    gap: 16,
    rowGap: 16,
  },
  tabContent: {
    marginBottom: 16,
    gap: 16,
    rowGap: 16,
  },
  safeArea: {
    flex: 1,
  },
})
