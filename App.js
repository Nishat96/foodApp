import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import GlobalStyles from './src/styles/GlobalStyles';
import SplashComponent from "./src/components/SplashComponent";
import HomeComponent from "./src/components/HomeComponent";

const FoodApp = () => {
  return (
    <View
      >
      {/*<SplashComponent/>*/}
      <HomeComponent/>
    </View>
  )
}
export default FoodApp;
