import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'

export default function Wallpapers() {
    const router = useRouter()
    const item = useLocalSearchParams()
    console.log(item)
  return (
    <View className="mt-20" >
      <Text>Wallpapers</Text>

      <TouchableOpacity
        onPress={() => router.back()}
      >
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  )
}