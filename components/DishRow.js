import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState }from 'react';

import { formatCurrency } from "../utility/formatCurrency"
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector }from "react-redux";
import { addToBasket, selectBasketItems } from '../features/basketSlice';



const DishRow = ({id, name, description, price,imgUrl}) => {
    const [isPressed, setisPressed] = useState(false);
    const items = useSelector(selectBasketItems);
    const dispatch = useDispatch();
    usesel

    const addItemToBasket = () => {
        dispatch(addToBasket({id, name, description, price, imgUrl}));
    };

    
    
  return (
    <>
    <TouchableOpacity 
         onPress={() => setisPressed(!isPressed)}
         className={`bg-white border p-4 border-gray-200 ${
            isPressed && "border-b-0"
         }`}>
      <View className="flex-row"> 
        <View className="flex-1 pr-2">
            <Text className="text-lg mb-1" >{name}</Text>
            <Text className="text-gray-400" >{description}</Text>
            <Text className="text-gray-400 mt-2" >{formatCurrency(price)}</Text>
        </View>
      
      
        <View>
            <Image 

            source={{uri:imgUrl }}
            style={{
                borderWidth: 1,
                borderColor: "#F3F3F4"
            }}
            className= "h-20 w-20 bg-gray-300 p-4"/>
        </View>

      </View>
    </TouchableOpacity>

    {isPressed && (
        <View className="bg-white px-4">
            <View className="flex-row items-center space-x-2 pb-3">
                <TouchableOpacity>
                    <MinusCircleIcon color="#00CCBB"
                    size={40}/>
                </TouchableOpacity>

                <Text>{items.length}</Text>

                <TouchableOpacity onPress={addItemToBasket}>
                    <PlusCircleIcon color="#00CCBB"
                    size={40}/>
                </TouchableOpacity>
            </View>

        </View>
    )}    
    </>
  );
};

export default DishRow;