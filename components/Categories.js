import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
        {/* CategoryCard */}
      <CategoryCard imgUrl="https://qph.cf2.quoracdn.net/main-qimg-efafd90d16cce4d39903a6aa2a012465" title1="Offers"/>
      <CategoryCard imgUrl="https://nomoneynotime.com.au/uploads/recipes/shutterstock_2042520416-1.jpg" title="Pizza"/>
      <CategoryCard imgUrl="https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg" title="Burger"/>
      <CategoryCard imgUrl="https://i0.wp.com/plantbased-passport.com/wp-content/uploads/vegan-nigerian-red-stew-1-1.jpg?fit=1638%2C2048&ssl=1" title="Nigerian"/>
      <CategoryCard imgUrl="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1214757157.png" title="Asian"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Sushi"/>
      <CategoryCard imgUrl="https://asianinspirations.com.au/wp-content/uploads/2020/02/01_SouthtoNorth_1920x1280.jpg" title="Thai"/>
      <CategoryCard imgUrl="https://images.squarespace-cdn.com/content/v1/54222358e4b0ef23d87a996b/1594261178496-GVI2WE0RRK4EM9VUQEWS/slack-imgs.com-3+copy+2.jpeg?format=1000w" title="Jollof"/>

    </ScrollView>
  )
}

export default Categories