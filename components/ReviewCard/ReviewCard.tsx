import { FlatList, View } from 'react-native'

import { FontsEnum, SizesEnum } from 'enums/enums'
import { getRelativeTime } from 'helpers/dateHelpers'
import { getIsPost } from 'helpers/logicHelpers'
import { useAuth } from 'services/hooks/useAuth'

import { UserInfo } from 'components/UserInfo/UserInfo'
import { Image } from 'components/ui/Image/Image'
import { Label } from 'components/ui/Label/Label'
import { Rating } from 'components/ui/Rating/Rating'

import { styles } from './ReviewCard.styles'
import { ReviewCardProps } from './ReviewCard.types'

const Wine1 = require('assets/9temp/images/w1.png')

export const ReviewCard = (props: ReviewCardProps) => {
  const { review } = props
  const { user_id, username, avatar_link } = review.user

  const isPost = getIsPost(review)

  const { authUser } = useAuth()
  const isAuthReview = review.user_id === authUser.user_id

  const FAKE_WINE = {
    wine_id: 1,
    wine_title: 'Rombauer Vineyards Carneros Chardonnay',
    vintage_year: 2021,
    bottle_volume: 750,
    wine_image: Wine1,
    price: 69.99,
    user_rating: 4.3,
    rateCount: 97,
    match: 'Your 97% match',
    country: 'United states',
    tags: ['Organic', 'Napa Valley', 'Dry'],
  }

  const wine = {
    id: review.wine_id, // FAKE_WINE.wine_id
    label: review.wine?.wine_title, // FAKE_WINE.wine_title
    vintage: review.wine?.vintage_year, // FAKE_WINE.vintage_year,
    litr: review.wine?.bottle_volume || FAKE_WINE.bottle_volume, //
    src: review.wine?.wine_image || FAKE_WINE.wine_image, // FAKE_WINE.wine_image
    // price: review.wine?.price, // FAKE_WINE.price
    rate: review.wine?.user_rating || FAKE_WINE.user_rating, // FAKE_WINE.user_rating
    // rateCount: review.wine?.ratesCount, // FAKE_WINE.ratesCount
    // match: review.wine?.match, // FAKE_WINE.match
    country: review.wine?.country, // FAKE_WINE.country
    // tags: review.wine?.tags, // FAKE_WINE.tags
  }

  return (
    <View style={styles.reviewCard}>
      <View style={styles.header}>
        <View style={styles.userinfo}>
          <UserInfo
            userId={user_id}
            username={username}
            avatar={avatar_link}
            isFollowed={review.is_followed}
            createdAt={getRelativeTime(review.created_at)}
            description='Posted a review'
          />
        </View>
        {/* {isAuthReview && <PostReviewContextMenu review={review} />} */}
      </View>
      {!isPost && <Rating value={review.rate} size={SizesEnum.S} noHover={true} />}
      <Label label={review.title} font={FontsEnum.Label18} />
      <Label label={review.description} font={FontsEnum.Text14} />

      {!!review.image_urls?.length && (
        <FlatList
          horizontal
          data={review.image_urls}
          keyExtractor={src => src}
          // contentContainerStyle={styles.images}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: src }) => (
            <Image src={src} width={120} height={100} borderRadius={12} />
          )}
        />
      )}

      {/* {!isPost && <ProductCardHorizontal wine={wine} />} */}

      {/* <CommentAction review={review} /> */}
    </View>
  )
}
