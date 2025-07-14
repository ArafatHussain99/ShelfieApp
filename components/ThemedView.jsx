import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import {Colors} from '../constants/Colors'
import React from 'react'

const ThemedView = ({style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme??'light']
  return (
    <View style={[{backgroundColor: theme.background}, style]} {...props}/>
  )
}

export default ThemedView

