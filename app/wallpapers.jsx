import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AllWallpapers from '../components/AllWallpapers';

export default function Wallpapers() {
    const router = useRouter()
    const item = useLocalSearchParams()
    const [ wallpapers, setWallpapers ] = useState([])

    // console.log(item)
  return (
    <ScrollView>
      <StatusBar style='light'/>
      <Image 
        source={item.image} 
        style={{ width: wp(100), height: hp(45) }} 
        className="rounded-b-3xl"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-red-800 mx-4 absolute rounded-full flex justify-center items-center pr-1 "
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      {/* all wallpapers */}
      <View className="mx-4 space-y-3 mt-4" >
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-700 text-center"
        > {item.name} wallpapers </Text>
        <View className="mb-10">
          <AllWallpapers data={wallpapers} />
        </View>
      </View>
    </ScrollView>
  )
}