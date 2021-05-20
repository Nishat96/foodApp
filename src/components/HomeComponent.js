import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Image, ScrollView } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import HomeStyles from "../styles/HomeStyles";
import GlobalStyles from "../styles/GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

/*images*/
import veggieImg from "../assets/veggie.png";
import spicyChicken from "../assets/spicyChicken.png";

import FooterComponent from "./FooterComponent";

const HomeComponent = ({navigation}) => {
  return (
    <ScrollView>
      <View style={HomeStyles.notificationBar}>
        <FontAwesome5 style={{ flex: 3 }} name={"bars"} size={25} color="#C0C0C0" />
        <FontAwesome5 style={{ flex: 1 }} name={"cart-plus"} size={25} color="#C0C0C0" />
      </View>
      <Text style={HomeStyles.titleBarOne}>Delicious</Text>
      <Text style={HomeStyles.titleBarTwo}>Food For You</Text>
      <View style={HomeStyles.inputArea}>
        <TextInput style={HomeStyles.searchBar} placeholderTextColor="#000" placeholder="Search" />
        <FontAwesome5 style={{ paddingRight: 20 }} name={"search"} size={20} color="#C0C0C0" />
      </View>
      <View style={{ flexDirection: "row", paddingTop: 20 }}>
        <TouchableOpacity onPress={()=>navigation.navigate('Foods')}>
          <Text style={HomeStyles.navTitle}>Foods</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Drinks')}>
          <Text style={HomeStyles.navTitle}>Drinks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Snacks')}>
          <Text style={HomeStyles.navTitle}>Snacks</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Sauce')}>
          <Text style={HomeStyles.navTitle}>Sauce</Text>
        </TouchableOpacity>
      </View>
      <Text style={HomeStyles.seeMoreBtn}>See More</Text>
      <View style={{ flexDirection: "row" , paddingTop: 20}}>
        <View>
          <Image style={GlobalStyles.foodImg} source={veggieImg} />
          <View style={HomeStyles.foodNameArea}>
            <Text style={HomeStyles.foodName}>Veggie</Text>
            <Text style={HomeStyles.foodName}>Tomato Mix</Text>
          </View>
        </View>
        <View>
          <Image style={GlobalStyles.foodImg} source={spicyChicken} />
          <View style={HomeStyles.foodNameArea}>
            <Text style={HomeStyles.foodName}>Spicy food</Text>
            <Text style={HomeStyles.foodName}>with sauce</Text>
          </View>
        </View>
      </View>
      <View>
        <FooterComponent navigation={navigation}/>
      </View>
    </ScrollView>
  );
};
export default HomeComponent;
