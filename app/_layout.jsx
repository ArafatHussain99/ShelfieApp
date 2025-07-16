
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import { UserProvider } from '../contexts/UserContext'

const RootLayout = () => {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = Colors[colorScheme]
  return (
    <UserProvider>
      <StatusBar style='auto'/>
      <Stack screenOptions={{headerStyle:{backgroundColor:theme.navBackground}, headerTintColor:theme.title}}>
        <Stack.Screen name='index' options={{title: 'Home',}}/>
        <Stack.Screen name='(auth)' options={{ headerShown: false}}/>
        <Stack.Screen name='(dashboard)' options={{ headerShown: false}}/>
      </Stack>
    </UserProvider>
  )
}

export default RootLayout
