import { ChangeEvent, useState } from 'react'

import { View } from 'react-native'

import { FontsEnum, IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import { getRelativeTime } from 'helpers/dateHelpers'
import { optimisticUpdateReviewCommentsAfterCommentUpdate } from 'helpers/optimisticsUpdateHelper'
import { UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { useAuth } from 'services/hooks/useAuth'
import { useCrudDiscourseComments } from 'services/hooks/useCrudDiscourse'

import { UserInfo } from 'components/UserInfo/UserInfo'
import { Button } from 'components/ui/Button/Button'
import { Label } from 'components/ui/Label/Label'
import { Textarea } from 'components/ui/Textarea/Textarea'
import { toastError, toastSuccess } from 'components/ui/Toast/Toast'

import { styles } from './CommentCard.styles'
import { CommentCardProps } from './CommentCard.types'

export const CommentCard = (props: CommentCardProps) => {
  const { comment } = props

  const { authUser } = useAuth()
  const { updateMutation, deleteMutation } = useCrudDiscourseComments()

  const handleDeleteComment = () => {
    deleteMutation.mutate({
      id: comment.id,
      hideToast: true,
      onSuccess: () => {
        toastSuccess({ description: 'Comment deleted successfully.' })
      },
    })
  }

  const DEFAULT_EDITING_COMMENT = { id: '', description: '' }
  const [editingComment, setEditingComment] = useState(DEFAULT_EDITING_COMMENT)
  const handleChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEditingComment(p => ({ ...p, description: e.target.value }))
  }

  const handleEditComment = () => {
    setEditingComment({ id: comment.id, description: comment.description })
  }

  const handleSaveComment = () => {
    updateMutation.mutate({
      data: {
        id: comment.id,
        description: editingComment.description,
        username: authUser.username,
        avatar_link: authUser.avatar_link,
        review_id: comment.review_id,
      },
      hideToast: true,
      onSuccess: apiResponse => {
        optimisticUpdateReviewCommentsAfterCommentUpdate(
          [UTILS_QUERY_KEYS.discourse.comments, comment.review_id],
          apiResponse?.data,
        )
        setEditingComment(DEFAULT_EDITING_COMMENT)
        // invalidateQueryKey(UTILS_QUERY_KEYS.discourse.myReviews, 'all')
      },
      onError: () => {
        toastError({
          description: `Comment creation failed.`,
        })
      },
    })
  }

  return (
    <View style={styles.comment}>
      <UserInfo
        userId={comment.user.user_id}
        username={comment.user.username}
        avatar={comment.user.avatar_link}
        createdAt={getRelativeTime(comment.created_at)}
        hideFollow={true}
        size={SizesEnum.S}
      />
      <View style={styles.content}>
        {!editingComment.id && <Label label={comment.description} font={FontsEnum.Text14} />}
        {editingComment.id && (
          <>
            <Textarea
              placeholder='Editing comment...'
              value={editingComment.description}
              //@ts-ignore
              onChange={handleChangeComment}
              width={'100%'}
            />
            <View style={styles.commentBtn}>
              <Button
                size={SizesEnum.S}
                variant={VariantsEnum.Primary}
                label='Comment'
                iconLeft={IconsEnum.Comment}
                onClick={handleSaveComment}
              />
            </View>
          </>
        )}
        <View style={styles.actions}>
          <Button
            label={'Edit'}
            size={SizesEnum.S}
            variant={VariantsEnum.Text}
            onClick={handleEditComment}
            iconLeft={IconsEnum.Pencil}
          />
          <Button
            label={'Delete'}
            size={SizesEnum.S}
            variant={VariantsEnum.Text}
            onClick={handleDeleteComment}
            iconLeft={IconsEnum.CloseSmall}
          />
          {/* <Button
            iconLeft={IconsEnum.Like}
            label={'12'}
            size={SizesEnum.S}
            variant={VariantsEnum.Secondary}
          />
          <Button label={'Reply'} size={SizesEnum.S} variant={VariantsEnum.Secondary} /> */}
        </View>
      </View>
    </View>
  )
}
