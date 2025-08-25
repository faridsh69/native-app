import { useState } from 'react'

import { View } from 'react-native'

import { IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import {
  invalidateQueryKey,
  optimisticUpdateMyFeedAfterCommentAction,
  optimisticUpdateReviewAfterCommentAction,
} from 'helpers/optimisticsUpdateHelper'
import { DiscourseReviewType } from 'services/apis/discourseApis'
import { UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { useAuth } from 'services/hooks/useAuth'
import {
  useCrudDiscourseComments,
  useCrudDiscourseMyFeed,
  useCrudDiscourseReviews,
} from 'services/hooks/useCrudDiscourse'

import { Button } from 'components/ui/Button/Button'
import { Textarea } from 'components/ui/Textarea/Textarea'
import { toastError } from 'components/ui/Toast/Toast'

import { CommentsList } from '../CommentsList/CommentsList'
import { LikeAction } from '../LikeAction/LikeAction'
import { styles } from './CommentAction.styles'

export const CommentAction = (props: { review: DiscourseReviewType }) => {
  const { review } = props

  const [showComments, setShowComments] = useState(false)
  const [comment, setComment] = useState('')

  const { authUser } = useAuth()

  const handleChangeComment = (e: any) => {
    setComment(e.target.value)
  }

  const { listQueryKey: reviewsQueryKey } = useCrudDiscourseReviews()
  const { listQueryKey: myFeedQueryKey } = useCrudDiscourseMyFeed()

  const { createMutation: createCommentMutation } = useCrudDiscourseComments()

  const handleSaveComment = () => {
    createCommentMutation.mutate({
      data: {
        review_id: review.id,
        description: comment,
        username: authUser.username,
        avatar_link: authUser.avatar_link,
      },
      hideToast: true,
      onSuccess: () => {
        setComment('')
        // toastSuccess({
        //   description: `Comment created successfully.`,
        // })
        // optimisticUpdateReviewCommentsAfterCommentAction(
        //   [UTILS_QUERY_KEYstyles.discourse.comments, review.id],
        //   apiResponse?.data,
        // )
        optimisticUpdateReviewAfterCommentAction(reviewsQueryKey, review.id)
        optimisticUpdateMyFeedAfterCommentAction(myFeedQueryKey, review.id)
        invalidateQueryKey(UTILS_QUERY_KEYS.discourse.myReviews, 'all')
        invalidateQueryKey([UTILS_QUERY_KEYS.discourse.comments, review.id], 'exact')
      },
      onError: () => {
        toastError({
          description: `Comment creation failed.`,
        })
      },
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <LikeAction review={review} />
        <Button
          iconLeft={IconsEnum.Comment}
          label={`${review.comments_count} comments`}
          variant={showComments ? VariantsEnum.Primary : VariantsEnum.Secondary}
          size={SizesEnum.S}
          onClick={() => setShowComments(prev => !prev)}
        />
        <Button
          iconLeft={IconsEnum.Share}
          label='Share'
          variant={VariantsEnum.Secondary}
          size={SizesEnum.S}
        />
      </View>

      {showComments && <CommentsList reviewId={review.id} />}

      <View style={styles.textareaWrap}>
        <Textarea
          placeholder='Write a comment...'
          value={comment}
          // keep both handlers so the component works on web & native
          onChange={(e: any) => setComment(e?.target?.value ?? e?.nativeEvent?.text ?? '')}
          onChangeText={(text: string) => setComment(text)}
          width='100%'
        />
        {!!comment.trim() && (
          <View style={styles.commentBtn}>
            <Button
              size={SizesEnum.S}
              variant={VariantsEnum.Primary}
              label='Comment'
              iconLeft={IconsEnum.Comment}
              onClick={handleSaveComment}
            />
          </View>
        )}
      </View>
    </View>
  )
}
