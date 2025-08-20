import React, { useRef, useState } from 'react'

import { View } from 'react-native'

import { Image as ExpoImage } from 'expo-image'

import { IMAGE_STATES, MINIMUM_TIME_FOR_SHOW_ANIMATION } from './Image.constants'
import { styles } from './Image.styles'
import { ImageProps } from './Image.types'

export const Image = (props: ImageProps) => {
  const { src, alt = 'image', width, height, borderRadius = '0px', keepRatio = true } = props

  const [imageState, setImageState] = useState(IMAGE_STATES.loading)
  const mountedAtRef = useRef<number>(Date.now())

  const handleLoadEnd = () => {
    const elapsed = Date.now() - mountedAtRef.current
    setImageState(
      elapsed < MINIMUM_TIME_FOR_SHOW_ANIMATION ? IMAGE_STATES.cached : IMAGE_STATES.loaded,
    )
  }

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
        source={{ uri: src }}
        onLoadStart={() => setImageState(IMAGE_STATES.loading)}
        onLoadEnd={handleLoadEnd}
        onError={handleLoadEnd} // also hide skeleton on error
        contentFit={keepRatio ? 'cover' : 'contain'}
        transition={transition}
        style={imageStyles}
      />
    </View>
  )
}
