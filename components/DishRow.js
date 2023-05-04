import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState }from 'react';

import { formatCurrency } from "../utility/formatCurrency"
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';



const DishRow = ({id, name, description, price, image,imgUrl}) => {
    const [isPressed, setisPressed] = useState(false);
  return (
    <>
    <TouchableOpacity 
         onPress={() => setisPressed(!isPressed)}
         className="bg-white border p-4 border-gray-200">
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
        <View>
            <View>
                <TouchableOpacity>
                    <MinusCircleIcon
                    size={40}/>
                </TouchableOpacity>

                <Text>0</Text>

                <TouchableOpacity>
                    <PlusCircleIcon
                    size={40}/>
                </TouchableOpacity>
            </View>

        </View>
    )}    
    </>
  );
};

export default DishRow;