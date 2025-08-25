import React, { useMemo } from 'react'

import { FlatList, View } from 'react-native'

import { styles } from './ReviewCard.styles'

// import { Skelet } from 'components/ui/Skelet/Skelet'

export const SkeletonReviewCard: React.FC<{ count?: number }> = ({ count = 3 }) => {
  const data = useMemo(() => Array.from({ length: count }, (_, i) => i), [count])

  return (
    <FlatList
      data={data}
      keyExtractor={k => String(k)}
      // renderItem={() => <Skelet variant={SkeletVariants.Card} width='100%' height={140} />}
      renderItem={() => <View style={styles.skeleton} />}
      contentContainerStyle={styles.container}
      initialNumToRender={Math.min(count, 6)}
      removeClippedSubviews
      windowSize={10}
      accessibilityElementsHidden
      importantForAccessibility='no-hide-descendants'
    />
  )
}
