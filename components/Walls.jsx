import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { homeWalls } from '../constants';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';


export default function walls() {
    const router = useRouter()
  return (
    <View className="mx-4">
      <Text style={{ fontSize: hp(3) }} className="font-semibold text-red-800 text-center">Get Categories</Text>
      <FlatList
        data={homeWalls}
        numColumns={2}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20, }}
        columnWrapperStyle={{ justifyContent: 'space-between', }}
        renderItem={({ item, index })=> <WallCard router={router} index={index} item={item} />}
    />
    </View>
  )
}

const WallCard = ({item, index, router}) => {
    return (
        <View >
            <TouchableOpacity
                style={{ width: wp(44), height: wp(52) }}
                className="flex justify-end p-4 mb-4"
                onPress={() => router.push({pathname: '/wallpapers', params: item})}
            >
                <Image 
                    source={item.image} 
                    resizeMode='cover' 
                    style={{ width: wp(44), height: wp(52) }} 
                    className="rounded-[10px] absolute"
                />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                    style={{ width: wp(44), height: hp(15) }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className="absolute bottom-0 rounded-[10px]"
                />
                <Text style={{ fontSize: hp(2.3) }} className="text-white font-semibold text-center tracking-wide">
                    { item.name }
                </Text>
            </TouchableOpacity>
        </View>
    )
}