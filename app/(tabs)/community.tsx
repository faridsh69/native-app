import { useState } from 'react'

import { StyleSheet } from 'react-native'

import ParallaxScrollView from 'components/ParallaxScrollView'
import { IconSymbol } from 'components/ui/IconSymbol'
import { UserInfo } from 'components/ui/UserInfo/UserInfo'

export default function TabCommunityScreen() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color='#808080'
          name='chevron.left.forwardslash.chevron.right'
          style={styles.headerImage}
        />
      }
    >
      <UserInfo
        userId={'1'}
        avatar={'https://avatars.githubusercontent.com/u/26208914?v=4'}
        username={'xxxxx'}
        likesCount={2}
        followersCount={4}
        isFollowed={false}
      />
    </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
})
