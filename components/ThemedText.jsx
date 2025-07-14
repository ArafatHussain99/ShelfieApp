import { Text, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedText = ({style, title=false,...props}) => {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = Colors[colorScheme]
  const textColor = title?theme.title: theme.text
  return (
    <Text style = {[{color:textColor}, style]} {...props}/>
  )
}

export default ThemedText

