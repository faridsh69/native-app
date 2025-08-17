import React from 'react'

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

import { ButtonStory } from 'components/stories/Button.Story'
import { IconsStory } from 'components/stories/Icon.Story'
import { LabelStory } from 'components/stories/Label.Story'
import { RatingStory } from 'components/stories/Rating.Story'
import { TabItemsStory } from 'components/stories/TabItems.story'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <IconsStory />
          <LabelStory />
          <ButtonStory />
          <TabItemsStory />
          <RatingStory />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    padding: 32,
  },
  container: {
    flexDirection: 'column',
    gap: 8,
  },
})
