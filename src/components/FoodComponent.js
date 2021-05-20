import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import GlobalStyles from "../styles/GlobalStyles";
import eggRice from "../assets/eggRice.png";
import plainRice from "../assets/rice.png";
import chawmin from "../assets/chawmin.png";
import veggieTomato from "../assets/veggieTomato.png";
import { TouchableOpacity } from "react-native-gesture-handler";

const FoodComponent = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{flexDirection: "row", paddingTop: 20}}>
        <View>
          <Image style={GlobalStyles.foodImg} source={eggRice} />
          <View style={{alignItems: "center"}}>
            <Text style={GlobalStyles.foodTitle}>Egg Fried</Text>
            <Text>Rice</Text>
          </View>
        </View>
        <View>
          <Image style={GlobalStyles.foodImg} source={plainRice} />
          <View style={{alignItems: "center"}}>
            <Text style={GlobalStyles.foodTitle}>Plain Rice</Text>
            <Text>Mixed</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: "row", paddingTop: 20}}>
        <View>
          <Image style={GlobalStyles.foodImg} source={chawmin} />
          <View style={{alignItems: "center"}}>
            <Text style={GlobalStyles.foodTitle}>Chawmin</Text>
            <Text>Mix</Text>
          </View>
        </View>
        <View>
          <Image style={GlobalStyles.foodImg} source={veggieTomato} />
          <View style={{alignItems: "center"}}>
            <Text style={GlobalStyles.foodTitle}>Veggie</Text>
            <Text>Tomato Mix</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: "row", paddingTop: 20}}>
        <View>
          <Image style={GlobalStyles.foodImg} source={plainRice} />
          <View style={{alignItems: "center"}}>
            <Text style={GlobalStyles.foodTitle}>Mixed Plain</Text>
            <Text>Rice</Text>
          </View>
        </View>
        <View>
          <Image style={GlobalStyles.foodImg} source={veggieTomato} />
          <View style={{alignItems: "center"}}>
            <Text style={GlobalStyles.foodTitle}>Veggie</Text>
            <Text>Tomato Mix</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: "row", paddingTop: 20, paddingBottom: 20}}>
        <View>
          <Image style={GlobalStyles.foodImg} source={chawmin} />
          <View style={{alignItems: "center"}}>
            <Text style={GlobalStyles.foodTitle}>Chawmin</Text>
            <Text>Mixed</Text>
          </View>
        </View>
        <View>
          <Image style={GlobalStyles.foodImg} source={eggRice} />
          <View style={{alignItems: "center"}}>
            <Text style={GlobalStyles.foodTitle}>Veggie</Text>
            <Text>Tomato Mix</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={{alignItems: "center", marginBottom: 15}}>
        <Text style={GlobalStyles.cartBtn}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
export default FoodComponent;
