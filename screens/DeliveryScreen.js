import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { XCircleIcon, XMarkIcon } from 'react-native-heroicons/solid';


const DeliveryScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView>
        <View >
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <XCircleIcon color="white" size={30}/>
            </TouchableOpacity>
            <Text>Order Help</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen