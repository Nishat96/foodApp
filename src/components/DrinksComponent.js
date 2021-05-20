import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import GlobalStyles from "../styles/GlobalStyles";
import summerJuice from "../assets/summerJuice.jpg";
import orangeJuice from "../assets/orange.jpg";
import pineapple from "../assets/pineapple.jpg";
import raspberry from "../assets/raspberry.jpg";
import soda from "../assets/soda.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";

const DrinksComponent = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{flexDirection: "row", paddingTop: 20, justifyContent: "space-around"}}>
        <View>
          <Image style={GlobalStyles.drinksImg} source={summerJuice } />
          <View style={{alignItems: "center"}}>
            <Text style={GlobalStyles.foodTitle}>Summer Friendly</Text>
            <Text>Juice</Text>
          </View>
        </View>
        <View>
          <Image style={GlobalStyles.drinksImg} source={orangeJuice} />
          <View style={{alignItems: "center"}}>
            <Text style={GlobalStyles.foodTitle}>Fresh Orange</Text>
            <Text>Juice</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: "row", paddingTop: 20, justifyContent: "space-around"}}>
        <View>
          <Image style={GlobalStyles.drinksImg} source={pineapple} />
          <View style={{alignItems: "center"}}>
            <Text style={GlobalStyles.foodTitle}>Fresh Pineapple</Text>
            <Text>Juice</Text>
          </View>
        </View>
        <View>
          <Image style={GlobalStyles.drinksImg} source={raspberry} />
          <View style={{alignItems: "center"}}>
            <Text style={GlobalStyles.foodTitle}>Fresh Raspberry</Text>
            <Text>Juice</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: "row", paddingTop: 20, justifyContent: "space-around"}}>
        <View>
          <Image style={GlobalStyles.drinksImg} source={soda} />
          <View style={{alignItems: "center"}}>
            <Text style={GlobalStyles.foodTitle}>Plain</Text>
            <Text>Soda</Text>
          </View>
        </View>
        <View>
          <Image style={GlobalStyles.drinksImg} source={summerJuice} />
          <View style={{alignItems: "center"}}>
            <Text style={GlobalStyles.foodTitle}>Summer Friendly</Text>
            <Text>Juice</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: "row", paddingTop: 20, paddingBottom: 20, justifyContent: "space-around"}}>
        <View>
          <Image style={GlobalStyles.drinksImg} source={soda} />
          <View style={{alignItems: "center"}}>
            <Text style={GlobalStyles.foodTitle}>Plain</Text>
            <Text>Soda</Text>
          </View>
        </View>
        <View>
          <Image style={GlobalStyles.drinksImg} source={raspberry} />
          <View style={{alignItems: "center"}}>
            <Text style={GlobalStyles.foodTitle}>Fresh Raspberry</Text>
            <Text>Juice</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={{alignItems: "center", marginBottom: 15}}>
        <Text style={GlobalStyles.cartBtn}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
export default DrinksComponent;
