import { View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

const PreparingOrderScreen = () => {
  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <Animatable.Image 
        source={require("../assets/pay1.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
        />

        <Animatable.Text 
            animation="slideInUp"
            iterationCount={1}
            className="text-lg my-10  text-center"
        >
        Waiting for Restaurant to accept your order!
        </Animatable.Text>

        <Progress.Circle size={60} indeterminate={true} color="gray"/>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;