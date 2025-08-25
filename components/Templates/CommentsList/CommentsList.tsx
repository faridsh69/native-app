import { View } from 'react-native'

import { SizesEnum } from 'enums/enums'
import { DiscourseCommentType } from 'services/apis/discourseApis'
import { useCrudDiscourseComments } from 'services/hooks/useCrudDiscourse'

import { DataNotFound } from 'components/ui/DataNotFound/DataNotFound'
import { Loader } from 'components/ui/Loader/Loader'

import { CommentCard } from '../CommentCard/CommentCard'
import { styles } from './CommentsList.styles'

export const CommentsList = ({ reviewId }: { reviewId: string }) => {
  const { single, isLoadingSingle } = useCrudDiscourseComments(reviewId)

  // @ts-ignore
  const comments = single as DiscourseCommentType[]

  if (isLoadingSingle)
    return (
      <View style={styles.comments}>
        <Loader size={SizesEnum.S} label='' subLabel='Loading comments' />
      </View>
    )

  if (!comments?.length)
    return (
      <View style={styles.comments}>
        <DataNotFound label='No comments found, be the first one to write a comment.' />
      </View>
    )

  return (
    <View style={styles.comments}>
      {comments.map(comment => (
        <CommentCard comment={comment} key={comment.id} />
      ))}
    </View>
  )
}
