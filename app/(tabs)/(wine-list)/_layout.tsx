import { Stack } from 'expo-router'

export default function WineListLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Main WineList page */}
      <Stack.Screen name='index' />
      {/* Wine details page */}
      <Stack.Screen name='details/[id]' />
    </Stack>
  )
}
