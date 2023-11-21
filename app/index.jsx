import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default function Index() {
  return (
    <View style={Styles.main} >
      <Text >Our first screen</Text>
    </View>
  )
}

const Styles = StyleSheet.create({
    main: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})