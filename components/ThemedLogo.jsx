import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

import DarkLogo from '../assets/img/logo_dark.png'
import LightLogo from '../assets/img/logo_light.png'

const ThemedLogo = () => {
  const colorScheme = useColorScheme()
  const logo = colorScheme ==='dark'?DarkLogo:LightLogo
  return (
    <Image source={logo}/>
  )
}

export default ThemedLogo