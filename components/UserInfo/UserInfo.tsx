import { View } from 'react-native'

import { APP_PATHS } from 'constants/constants'
import { ColorsEnum, FontsEnum, IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import { isNumber } from 'helpers/helpers'
import { useChangePath } from 'hooks/useChangePath'
import { useAuth } from 'services/hooks/useAuth'

import { Avatar } from 'components/ui/Avatar/Avatar'
import { Button } from 'components/ui/Button/Button'
import { Icon } from 'components/ui/Icon/Icon'
import { Label } from 'components/ui/Label/Label'

import { styles } from './UserInfo.styles'
import { UserInfoProps } from './UserInfo.types'

export const UserInfo = (props: UserInfoProps) => {
  const {
    userId,
    avatar = '',
    username,
    likesCount,
    followersCount,
    createdAt = '',
    isFollowed = false,
    description = '',
    hideFollow = false,
    size = SizesEnum.M,
  } = props

  const followersLabel = isNumber(followersCount) ? `${followersCount} followers` : ''
  const likesLabel = isNumber(likesCount) ? `${likesCount} likes` : ''
  const { authUser } = useAuth()

  const isAuthUser = authUser.user_id === userId

  const { navigate } = useChangePath()
  const handleRedirectUser = () => {
    navigate(APP_PATHS.communityUser.replace(':userId', userId))
  }

  return (
    <View style={styles.userInfo}>
      <View style={styles.body}>
        <Avatar src={avatar} size={size} alt={username} />

        <View style={styles.labels}>
          <View style={styles.username}>
            <Button
              label={username}
              variant={VariantsEnum.Text}
              size={SizesEnum.S}
              onPress={handleRedirectUser}
              onClick={handleRedirectUser}
            />

            {!!createdAt && (
              <Label
                label={createdAt}
                font={size === SizesEnum.S ? FontsEnum.Text12 : FontsEnum.Text14}
                color={ColorsEnum.Grey700}
              />
            )}

            {isAuthUser && <Icon icon={IconsEnum.Verified} size={SizesEnum.M} />}
          </View>

          {!description && (
            <Label
              label={`${followersLabel} ${likesLabel}`.trim()}
              font={FontsEnum.Text12}
              color={ColorsEnum.Grey700}
            />
          )}

          {!!description && (
            <Label label={description} font={FontsEnum.Text12} color={ColorsEnum.Black} />
          )}
        </View>
      </View>

      {/* {!isAuthUser && !hideFollow && <FollowAction userId={userId} isFollowed={isFollowed} />} */}
    </View>
  )
}
