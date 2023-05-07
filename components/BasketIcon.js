import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'


const BasketIcon = () => {
    //have access to all items in the basket
    const items = useSelector(selectBasketItems);
    const navigation = useNavigation();
  return (
    <View>
      <Text>BasketIcon</Text>
    </View>
  )
}

export default BasketIcon