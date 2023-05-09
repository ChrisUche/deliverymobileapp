import { View, Text, TouchableOpacity } from 'react-native'
import React, { useMemo, useState , useEffect}from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { selectBasketItems } from '../features/basketSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XCircleIcon } from 'react-native-heroicons/solid';

const BasketScreen = () => {
const navigation = useNavigation();
const restaurant = useSelector(selectRestaurant);
const items = useSelector(selectBasketItems);
const [groupedItemInBasket, setGroupedItemInBasket] = useState([])
const dispatch = useDispatch();

    //group the product (somit wont show a product add multiple times just i.e food [3x])
    useEffect(() => {
      const groupedItems = items.reduce((results, item) => {
        (results[item.id] = results[item.id]  || []).push(item);
      
      return results; 
    }, {});

    setGroupedItemInBasket(groupedItems);
    }, [items]);
  return (
    <SafeAreaView>
        <View>
            <View>
                <View>
                    <Text className="text-lg font-bold text-center">BasketScreen</Text>
                    <Text className="text-gray-400 text-center">{restaurant.title}</Text>
                </View>

                <TouchableOpacity onPress={navigation.goBack} className="rounded-full bg-gray-100 absolute top-3 right-5">
                    <XCircleIcon color="#00CCBB" height={50} width={50} />
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  );
};

export default BasketScreen