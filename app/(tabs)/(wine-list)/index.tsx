import { SafeAreaView, StyleSheet } from 'react-native'

import { ThemedText } from 'components/ThemedText'

export default function TabWineListScreen() {
  return (
    <SafeAreaView style={styles.titleContainer}>
      <ThemedText type='title'>WineListtyyssss</ThemedText>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
})
