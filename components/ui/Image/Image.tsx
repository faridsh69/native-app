import React, { useState } from 'react'

import { View } from 'react-native'

import { Image as ExpoImage, ImageSource } from 'expo-image'

import { IMAGE_STATES, MINIMUM_TIME_FOR_SHOW_ANIMATION } from './Image.constants'
import { styles } from './Image.styles'
import { ImageProps } from './Image.types'

export const Image = (props: ImageProps) => {
  const { src, alt = 'image', width, height, borderRadius = 10, keepRatio = true } = props

  const [imageState, setImageState] = useState(IMAGE_STATES.loading)
  const [mountingTime] = useState(Date.now())

  const handleLoadImage = () => {
    const loadedTime = new Date().getTime() - mountingTime

    if (loadedTime < MINIMUM_TIME_FOR_SHOW_ANIMATION) {
      setImageState(IMAGE_STATES.cached)
      return
    }

    setImageState(IMAGE_STATES.loaded)
  }
  const source: ImageSource = typeof src === 'string' ? { uri: src } : src

  const containerStyle: any = [{ width: width ?? '100%', height, overflow: 'hidden', borderRadius }]

  const transition = imageState === IMAGE_STATES.cached ? 0 : 400

  const contentFit = keepRatio ? 'contain' : 'fill'

  const imageStyles: any = [styles.img, imageState === IMAGE_STATES.loading && styles.loading]

  return (
    <View style={[containerStyle]} accessible accessibilityLabel={alt}>
      {imageState === IMAGE_STATES.loading && <View style={styles.skeleton} />}
      <ExpoImage
        source={source}
        onLoadEnd={handleLoadImage}
        contentFit={contentFit}
        transition={transition}
        style={imageStyles}
      />
    </View>
  )
}
