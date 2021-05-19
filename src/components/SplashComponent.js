import React from "react";
import { Text, View, Image, ImageBackground, StyleSheet } from "react-native";
import SplashStyles from "../styles/SplashStyles";

/*images*/
import logo from "../assets/logo.png";
import splashBg from "../assets/splashBg.png";


const SplashComponent = () => {
  return (
    <ImageBackground source={splashBg} style={SplashStyles.bgImage}>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Image source={logo} />
    </View>
    </ImageBackground>
  );
};

export default SplashComponent;
