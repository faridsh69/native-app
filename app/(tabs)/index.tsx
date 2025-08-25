import React from 'react'

import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'

import AvatarsStory from 'components/stories/AvatarsStory'
import { ButtonStory } from 'components/stories/Button.story'
import { IconsStory } from 'components/stories/Icon.story'
import { ImageStory } from 'components/stories/Image.story'
import { LabelStory } from 'components/stories/Label.story'
import { LoaderStory } from 'components/stories/Loader.story'
import { ModalStory } from 'components/stories/Modal.story'
import { RatingStory } from 'components/stories/Rating.story'
import { SliderStory } from 'components/stories/SliderStory'
import { TabItemsStory } from 'components/stories/TabItems.story'
import { TextareaStory } from 'components/stories/Textarea.story'
import { ToastStory } from 'components/stories/ToastStory'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ToastStory />
          <AvatarsStory />
          <ImageStory />
          <IconsStory />
          <LabelStory />
          <ButtonStory />
          <TabItemsStory />
          <RatingStory />
          <LoaderStory />
          <TextareaStory />
          <ModalStory />
          <SliderStory />
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
