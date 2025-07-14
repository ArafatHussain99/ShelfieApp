
import { Slot, Stack } from 'expo-router'
import {StatusBar} from 'expo-status-bar'
import {Colors} from '../constants/Colors'
import { useColorScheme } from 'react-native'

const RootLayout = () => {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = Colors[colorScheme]
  return (
    <>
      <StatusBar style='auto'/>
      <Stack screenOptions={{headerStyle:{backgroundColor:theme.navBackground}, headerTintColor:theme.title}}>
        <Stack.Screen name='index' options={{title: 'Home',}}/>
        <Stack.Screen name='(auth)' options={{ headerShown: false}}/>
      </Stack>
    </>
  )
}

export default RootLayout
