import { View, Text,ScrollView, TouchableOpacity ,Image} from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/solid';
import {
    AdjustmentsIcon,
    UserIcon,
    ChevronDownIcon,
    AdjustmentsHorizontalIcon,
    MagnifyingGlassIcon,
    StarIcon,
  } from "react-native-heroicons/solid";
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {
    const navigation  =useNavigation();
    const dispatch  =useDispatch();

    const {params: {

          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
    },
} = useRoute();

  //to keep track of which restaurant you're in
  useEffect(() => {
    dispatch(setRestaurant({
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    })
    );

  }, [dispatch])
  

    useLayoutEffect(() => {
        navigation.setOptions({
        headerShown: false,
        });
    }, []);

  return (

    <>
    <BasketIcon />
    
    <ScrollView>
      <View className='relative'>
        <Image
          source={{
            uri: imgUrl
          }}
          className=" h-56 w-full bg-gray-300 p-4" />
        <TouchableOpacity
          onPress={navigation.goBack}
          className=" absolute top-14 left-5 p-2 bg-gray-100 rounded-full ">
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold ">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1 ">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text>. {genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1 ">
              <MapPinIcon color="gray" opacity={0.4} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-gray-500">Nearby. {address}</Text>
              </Text>
            </View>
          </View>

          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>

        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View className="pb-36">
        <Text className="px-4 pt-2 mb-3 text-xl font-bold">Menu</Text>


        {/*DishRow */}


        <DishRow className=" h-56 w-full bg-gray-300 p-4"
          id={123}
          name="food"
          description="yrs fvvf"
          price={44}
          imgUrl="https://www.foodandwine.com/thmb/_Bfuv0FsNMVExh12yJBAIlnIIRY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/McDonalds-Hacks-Menu-FT-1-BLOG0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg" />

        <DishRow className=" h-56 w-full bg-gray-300 p-4"
          id={124}
          name="food"
          description="yrs fvvf"
          price={44}
          imgUrl="https://www.foodandwine.com/thmb/_Bfuv0FsNMVExh12yJBAIlnIIRY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/McDonalds-Hacks-Menu-FT-1-BLOG0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg" />

        <DishRow className=" h-56 w-full bg-gray-300 p-4"
          id={125}
          name="food"
          description="yrs fvvf"
          price={44}
          imgUrl="https://www.foodandwine.com/thmb/_Bfuv0FsNMVExh12yJBAIlnIIRY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/McDonalds-Hacks-Menu-FT-1-BLOG0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg" />

        <DishRow className=" h-56 w-full bg-gray-300 p-4"
          id={126}
          name="food"
          description="yrs fvvf"
          price={44}
          imgUrl="https://www.foodandwine.com/thmb/_Bfuv0FsNMVExh12yJBAIlnIIRY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/McDonalds-Hacks-Menu-FT-1-BLOG0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg" />

        <DishRow className=" h-56 w-full bg-gray-300 p-4"
          id={127}
          name="food"
          description="yrs fvvf"
          price={44}
          imgUrl="https://www.foodandwine.com/thmb/_Bfuv0FsNMVExh12yJBAIlnIIRY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/McDonalds-Hacks-Menu-FT-1-BLOG0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg" />



      </View>
    </ScrollView>
    </>
  );
};

export default RestaurantScreen;