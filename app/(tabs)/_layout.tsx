import React from 'react'

import { Platform } from 'react-native'

import { Tabs } from 'expo-router'

import { ColorsTheme } from 'constants/Colors'
import { useColorScheme } from 'hooks/useColorScheme'

import { HapticTab } from 'components/HapticTab'
import { HeaderNavbar } from 'components/Templates/HeaderNavbar/HeaderNavbar'
import { IconSymbol } from 'components/ui/IconSymbol'
import TabBarBackground from 'components/ui/TabBarBackground'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        header: () => <HeaderNavbar />,
        tabBarActiveTintColor: ColorsTheme[colorScheme ?? 'light'].tint,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name='house.fill' color={color} />,
        }}
      />
      <Tabs.Screen
        name='community'
        options={{
          title: 'Community',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name='paperplane.fill' color={color} />,
        }}
      />
      <Tabs.Screen
        name='(wine-list)'
        options={{
          title: 'WineList',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name='paperplane.fill' color={color} />,
        }}
      />
    </Tabs>
  )
}
