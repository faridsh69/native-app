import React from 'react'

import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useColorScheme } from 'hooks/useColorScheme'
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'

import { toastConfig } from 'components/ui/Toast/Toast'

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })
  const insets = useSafeAreaInsets()

  if (!loaded) return null

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
            <Stack.Screen name='+not-found' />
          </Stack>
          <StatusBar style='auto' />
          <Toast config={toastConfig} position='bottom' bottomOffset={insets.bottom + 82} />
        </ThemeProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
