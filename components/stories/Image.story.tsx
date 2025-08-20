import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { IMAGE_URLS } from 'constants/constants'
import { codeTextStyle } from 'styles/story.style'

import { Image } from 'components/ui/Image/Image'
import { ImageProps } from 'components/ui/Image/Image.types'

import { Story } from './Story'

const bigSizeImage =
  'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?cs=srgb&dl=pexels-dominikagregus-672532.jpg&fm=jpg'

export const ImageStory: React.FC = () => {
  const propsArray: ImageProps[] = []
  for (const src of [bigSizeImage, IMAGE_URLS.trash, IMAGE_URLS.ok]) {
    propsArray.push({
      src,
      height: 300,
      keepRatio: true,
    })
  }

  return (
    <Story>
      <Text style={styles.h4}>9) Image</Text>
      <Text style={codeTextStyle.inline}>&lt;Image src=&#123;IMAGE_URLS.trash&#125; /&gt;</Text>
      <Text style={styles.small}>
        Load image with default skeleton before image is loaded (cached loads skip fade).
      </Text>

      <View style={[styles.image]}>
        {propsArray.map((props, index) => (
          <View key={index} style={{ width: 300, marginRight: 12 }}>
            <Image alt='big size image' {...props} />
          </View>
        ))}
      </View>
    </Story>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
  small: { fontSize: 13, lineHeight: 18, opacity: 0.8, marginTop: 6, marginBottom: 8 },
  image: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
})
