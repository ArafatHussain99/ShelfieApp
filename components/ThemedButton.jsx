import { StyleSheet, Pressable } from 'react-native'
import React from 'react'

import {Colors} from '../constants/Colors'

const ThemedButton = ({style, ...props}) => {
  return (
    <Pressable style={({pressed})=> [styles.btn, pressed && styles.pressed, style]}
        {...props}
    >
    </Pressable>
  )
}

export default ThemedButton

const styles = StyleSheet.create({
    btn:{
        backgroundColor:Colors.primary,
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
    },
    pressed:{
        opacity:0.5,
    }
})