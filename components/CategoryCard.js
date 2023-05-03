import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title, title1}) => {
  return (
    <TouchableOpacity className="relative mr-2">
        <Image source={{
            uri:imgUrl
        }}
        className="h-20 w-20 rounded"
        /> 
      <Text className= "absolute bottom-1 left-1 text-white font-bold">{title}</Text>
      <Text className= "absolute bottom-1 left-1 text-gray-700 font-bold">{title1}</Text>

    </TouchableOpacity>
  )
}

export default CategoryCard