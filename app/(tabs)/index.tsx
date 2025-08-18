import React from 'react'

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

import { ButtonStory } from 'components/stories/Button.Story'
import { IconsStory } from 'components/stories/Icon.Story'
import { LabelStory } from 'components/stories/Label.Story'
import { LoaderStory } from 'components/stories/Loader.story'
import { ModalStory } from 'components/stories/Modal.story'
import { RatingStory } from 'components/stories/Rating.Story'
import { TabItemsStory } from 'components/stories/TabItems.story'
import { TextareaStory } from 'components/stories/Textarea.story'

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
          <LoaderStory />
          <TextareaStory />
          <ModalStory />
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
