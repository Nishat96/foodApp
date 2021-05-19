import React from "react";
import { Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import GlobalStyles from "../styles/GlobalStyles";

const HelloWorldApp = () => {
  return (
    <View style={[GlobalStyles.flexRow, GlobalStyles.footerArea]}>
      <FontAwesome5 name={"home"} size={25} color="orange" />
      <FontAwesome5 name={"heart"} size={25} color="#C0C0C0" />
      <FontAwesome5 name={"user-alt"} size={25} color="#C0C0C0" />
      <FontAwesome5 name={"history"} size={25} color="#C0C0C0" />
    </View>
  );
};
export default HelloWorldApp;
