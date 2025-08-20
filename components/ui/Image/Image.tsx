import React, { useState } from 'react'

import { View } from 'react-native'

import { Image as ExpoImage, ImageSource } from 'expo-image'

import { IMAGE_STATES, MINIMUM_TIME_FOR_SHOW_ANIMATION } from './Image.constants'
import { styles } from './Image.styles'
import { ImageProps } from './Image.types'

export const Image = (props: ImageProps) => {
  const { src, alt = 'image', width, height, borderRadius = '0px', keepRatio = true } = props

  const [imageState, setImageState] = useState(IMAGE_STATES.loading)
  const [mountingTime] = useState(new Date().getTime())

  const handleLoadImage = () => {
    const loadedTime = new Date().getTime() - mountingTime

    if (loadedTime < MINIMUM_TIME_FOR_SHOW_ANIMATION) {
      setImageState(IMAGE_STATES.cached)
      return
    }

    setImageState(IMAGE_STATES.loaded)
  }

  const resolvedSource: ImageSource = typeof src === 'string' ? { uri: src } : src

  const containerStyle: any = { width, height, borderRadius, overflow: 'hidden' }

  const transition = imageState === IMAGE_STATES.cached ? 0 : 400

  const imageStyles: any = [
    imageState === IMAGE_STATES.loading && styles.loading,
    { width: '100%', height: '100%', borderRadius },
  ]

  return (
    <View style={[containerStyle]} accessible accessibilityLabel={alt}>
      {/* Add a Skeleton here based on `imageState === IMAGE_STATES.loading` */}
      <ExpoImage
        source={resolvedSource}
        onLoadStart={() => setImageState(IMAGE_STATES.loading)}
        onLoadEnd={handleLoadImage}
        onError={handleLoadImage} // also hide skeleton on error
        contentFit={keepRatio ? 'cover' : 'contain'}
        transition={transition}
        style={imageStyles}
      />
    </View>
  )
}
