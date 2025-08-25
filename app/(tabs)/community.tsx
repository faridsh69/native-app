import { SafeAreaView, ScrollView, View } from 'react-native'

import { DirectionsEnum } from 'enums/enums'
import { usePersistState } from 'hooks/usePersistState'
import { useAuth } from 'services/hooks/useAuth'
import { useCrudDiscourseUsers } from 'services/hooks/useCrudDiscourse'
import { OptionValueType } from 'types/types'

import { LastActivityTab } from 'components/Templates/LastActivityTab/LastActivityTab'
import { DataNotFound } from 'components/ui/DataNotFound/DataNotFound'
import { TabItems } from 'components/ui/TabItems/TabItems'

import { styles } from './community.styles'

export default function TabCommunityScreen() {
  const { authUser } = useAuth()

  const { list: users, isLoading: isUsersLoading } = useCrudDiscourseUsers()

  const TAB_VALUES = {
    lastActivity: 'Latest activity',
    myFeed: 'My feed',
    notification: 'Notifications',
  }
  const TABS = [
    {
      label: 'Explore',
      value: TAB_VALUES.lastActivity,
    },
    {
      label: 'My feed',
      value: TAB_VALUES.myFeed,
    },
    {
      label: 'Notifications',
      value: TAB_VALUES.notification,
      badge: 1,
    },
  ]
  const [tab, setTab] = usePersistState<OptionValueType>('discourseTab', TAB_VALUES.lastActivity)

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.row}>
          {/* Left column */}
          {/* <View style={styles.leftColumn}>
          <View style={styles.leftSidebar}>
            <UserInfo
              userId={authUser.user_id}
              avatar={authUser.avatar_link}
              username={authUser.username}
              likesCount={authUser.likes_count}
              followersCount={authUser.followers_count}
              isFollowed={false}
            />
          </View>
        </View> */}

          {/* Center column */}
          <View style={styles.centerColumn}>
            <View style={styles.tabContent}>
              <TabItems
                value={tab}
                onChange={setTab}
                direction={DirectionsEnum.Horizontal}
                options={TABS}
              />
              {TAB_VALUES.lastActivity === tab && <LastActivityTab />}
              {/* {TAB_VALUES.myFeed === tab && <MyFeedTab />} */}
              {TAB_VALUES.notification === tab && <DataNotFound label='No notifications' />}
            </View>
          </View>

          {/* <View style={styles.rightColumn}>
            <View style={styles.rightSidebar}>
              <PostReviewCreation />
              {isUsersLoading && <SkeletonUserInfo />}
              {users
                .filter(u => u.user_id !== authUser.user_id)
                .map(user => (
                  <UserInfo
                    userId={user.user_id}
                    username={user.username}
                    avatar={user.avatar_link}
                    likesCount={user.likes_count}
                    isFollowed={user.is_followed}
                    key={user.user_id}
                  />
                ))}
              <NewsList />
            </View>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
