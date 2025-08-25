import React, { useState } from 'react'

import { FlatList, View } from 'react-native'

import { UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { useCrudDiscourseReviews } from 'services/hooks/useCrudDiscourse'
import { useCrudDiscourseReviewsPagination } from 'services/hooks/useCrudPagination'

import { ReviewCard } from 'components/ReviewCard/ReviewCard'
import { SkeletonReviewCard } from 'components/ReviewCard/SkeletonReviewCard'
import { DataNotFound } from 'components/ui/DataNotFound/DataNotFound'

import { styles } from './LastActivityTab.styles'

export const LastActivityTab = () => {
  const { list, isLoading, listQueryKey } = useCrudDiscourseReviews()

  const [page, setPage] = useState(1)

  const { isLoadingPagination } = useCrudDiscourseReviewsPagination(
    UTILS_QUERY_KEYS.discourse.reviews,
    listQueryKey,
    page,
  )

  if (!isLoading && list.length === 0) {
    return (
      <View style={[styles.container, styles.emptyContent]}>
        <DataNotFound label='No reviews created yet.' />
      </View>
    )
  }

  const onEndReached = () => {
    if (!isLoadingPagination && !isLoading && list.length > 0) {
      setPage(p => p + 1)
    }
  }

  return (
    <FlatList
      data={list}
      keyExtractor={review => review.id}
      renderItem={({ item: review }) => <ReviewCard key={review.id} review={review} />}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.2}
      removeClippedSubviews
      initialNumToRender={6}
      windowSize={10}
      contentContainerStyle={styles.listContent}
      ListHeaderComponent={isLoading && list.length === 0 ? <SkeletonReviewCard count={3} /> : null}
      ListFooterComponent={isLoadingPagination ? <SkeletonReviewCard count={1} /> : null}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  )
}
