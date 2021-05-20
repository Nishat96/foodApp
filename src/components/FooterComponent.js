import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import GlobalStyles from "../styles/GlobalStyles";

const FooterComponent = ({navigation}) => {
  return (
    <View style={[GlobalStyles.flexRow, GlobalStyles.footerArea]}>
      <FontAwesome5 name={"home"} size={25} color="orange" />
      <FontAwesome5 name={"heart"} size={25} color="#C0C0C0" />
      <TouchableOpacity
        onPress={()=>navigation.navigate('Profile')}
      >
        <FontAwesome5 name={"user-alt"} size={25} color="#C0C0C0" />
      </TouchableOpacity>
      <FontAwesome5 name={"history"} size={25} color="#C0C0C0" />
    </View>
  );
};
export default FooterComponent;
