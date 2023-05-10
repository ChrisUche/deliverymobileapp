import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView} from 'react-native'
import React, { useMemo, useState , useEffect}from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { formatCurrency } from "../utility/formatCurrency"


const BasketScreen = ({imgUrl}) => {
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
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 bg-gray-100">
            <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs ">
                <View>
                    <Text className="text-lg font-bold text-center">BasketScreen</Text>
                    <Text className="text-gray-400 text-center">{restaurant.title}</Text>
                </View>

                <TouchableOpacity onPress={navigation.goBack} className="rounded-full bg-gray-100 absolute top-3 right-5">
                    <XCircleIcon color="#00CCBB" height={50} width={50} />
                </TouchableOpacity>
            </View>

            <View className="flex-row items-center  space-x-4 px-4 py-3 bg-white my-5">
            <Image
                source={{
                uri: "https://links.papareact.com/wru",
                }}
                className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <Text className="flex-1">Deliver in 30-50 min</Text>
            <TouchableOpacity>
                <Text className="text-[#00CCBB]">Change</Text>
            </TouchableOpacity>
            </View>

            <ScrollView className="divide-y divide-gray-200">
                {Object.entries(groupedItemInBasket).map(([key, items]) => (
                    <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                        <Text className="text-[#00CCBB] ">{items.length} x</Text>
                        <Image
                            source={{ uri: items[0]?.imgUrl }}
                            className="h-12 w-12 rounded-full"
                        />
                        <Text className="flex-1">{items[0]?.name}</Text>
                        <Text className="flex-1">
                            <Text className="text-gray-400 mt-2" >{formatCurrency(items[0]?.price)}</Text>

                        </Text>
 
                        <TouchableOpacity>
                            <Text 
                            className="text-[#00CCBB] text-xs"
                            onPress={() => dispatch(removeFromBasket({ id: key }))}
                            >
                                Remove
                            </Text>
                        </TouchableOpacity>

                    </View>
                ))}
            </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default BasketScreen