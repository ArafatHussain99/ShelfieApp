import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import {Colors} from "../constants/Colors"

import ThemedView from '../components/ThemedView';
import ThemedText from '@/components/ThemedText';

const About = () => {
  const colorScheme = useColorScheme() ?? 'light'
  const theme = Colors[colorScheme]

  return (
    <ThemedView style={[styles.container,{backgroundColor:theme.background}]}>
      <ThemedText style={[styles.title,{color:theme.text}]}>About Page</ThemedText>
      <Link href="/" style={[styles.link,{color:theme.text, borderBottomColor: theme.text}]}><ThemedText>Back</ThemedText></Link>
    </ThemedView>
  )
}

export default About

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  title:{
    fontWeight:'400',
    fontSize:18,
    marginBottom: 20
  },
  link:{
    marginVertical: 10,
    borderBottomWidth:1,
  }
})