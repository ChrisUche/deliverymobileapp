import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
      <View className=" mt-4 flex-row items-center justify-between px-4">
        <Text className = " font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView 
        horizontal
        contentContainerStyle={{
            paddingHorizontal:15,
            paddingTop: 10,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
    >
        {/* RestauranrCards */}
        <RestaurantCard
            id={123}
            imgUrl="https://www.foodandwine.com/thmb/_Bfuv0FsNMVExh12yJBAIlnIIRY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/McDonalds-Hacks-Menu-FT-1-BLOG0122-4ac9d62f6c9143be8da3d0a8553348b0.jpg"
            title="McDonalds"
            rating={4.2}
            genre="Nigerian"
            address="434 allen st"
            short_description="Applewood smoked bacon? Yes. Creamy ranch sauce? Double yes... Try it today, for a limited time only—or go a little extra with toppings and get the Bacon Ranch Deluxe McCrispy™. "
            dishes={[]}
            long={-95.619456}
            lat={37.033289}
            />

        {/* RestauranrCards */}
        <RestaurantCard
            id={123}
            imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/18/27/ca/74/filet-and-shrimp.jpg"
            title="Ruths Chris"
            rating={4.2}
            genre="Nigerian"
            address="434 allen st"
            short_description="This is a Test description"
            dishes={[]}
            long={-86.765082}
            lat={21.103209}
            />
        
        {/* RestauranrCards */}
        <RestaurantCard
            id={123}
            imgUrl="https://cdn.sanity.io/images/snoqg9vl/production/ed5ad54c1de85d00cdddc52d502efc3d63bd5697-700x700.webp?w=2000&fit=max&auto=format"
            title="Le Relais de l'Entrecôte"
            rating={4.2}
            genre="Nigerian"
            address="434 allen st"
            short_description="This is a Test description"
            dishes={[]}
            long={48.073930549783 }
            lat={29.340590616427}
            />
        {/* RestauranrCards */}
        <RestaurantCard
            id={123}
            imgUrl="https://tb-static.uber.com/prod/image-proc/processed_images/8fe82646a8a3f13b36e996a83752c618/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg"
            title="KFC"
            rating={4.2}
            genre="Nigerian"
            address="434 allen st"
            short_description="This is a Test description"
            dishes={[]}
            long={22.445409}
            lat={-33.972582}
            />
        {/* RestauranrCards */}
        <RestaurantCard
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="hey, sushi"
            rating={4.2}
            genre="Nigerian"
            address="434 allen st"
            short_description="This is a Test description"
            dishes={[]}
            long={20}
            lat={0}
            />
        {/* RestauranrCards */}
        <RestaurantCard
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="hey, sushi"
            rating={4.2}
            genre="Nigerian"
            address="434 allen st"
            short_description="This is a Test description"
            dishes={[]}
            long={20}
            lat={0}
            />
       
    </ScrollView>
    </View>
  )
}

export default FeaturedRow