import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import buffeloSauce from "../assets/buffeloSauce.jpg";
import pizzaSauce from "../assets/pizzaSauce.jpg";
import chipotleSauce from "../assets/chipotleSauce.jpg";
import tahiniSauce from "../assets/tahiniSauce.jpg";
import remouladeSauce from "../assets/remouladeSauce.jpg";
import { TouchableOpacity } from "react-native-gesture-handler";

const SauceComponent = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flexDirection: "row", paddingTop: 20, justifyContent: "space-around" }}>
        <View>
          <Image style={GlobalStyles.drinksImg} source={buffeloSauce} />
          <View style={{ alignItems: "center" }}>
            <Text style={GlobalStyles.foodTitle}>Buffelo</Text>
            <Text>Sauce</Text>
          </View>
        </View>
        <View>
          <Image style={GlobalStyles.drinksImg} source={pizzaSauce} />
          <View style={{ alignItems: "center" }}>
            <Text style={GlobalStyles.foodTitle}>Pizza</Text>
            <Text>Sauce</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", paddingTop: 20, justifyContent: "space-around" }}>
        <View>
          <Image style={GlobalStyles.drinksImg} source={chipotleSauce} />
          <View style={{ alignItems: "center" }}>
            <Text style={GlobalStyles.foodTitle}>Chipotle</Text>
            <Text>Sauce</Text>
          </View>
        </View>
        <View>
          <Image style={GlobalStyles.drinksImg} source={remouladeSauce} />
          <View style={{ alignItems: "center" }}>
            <Text style={GlobalStyles.foodTitle}>Remoulade</Text>
            <Text>Sauce</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", paddingTop: 20, justifyContent: "space-around" }}>
        <View>
          <Image style={GlobalStyles.drinksImg} source={tahiniSauce} />
          <View style={{ alignItems: "center" }}>
            <Text style={GlobalStyles.foodTitle}>Tahini</Text>
            <Text>Sauce</Text>
          </View>
        </View>
        <View>
          <Image style={GlobalStyles.drinksImg} source={pizzaSauce} />
          <View style={{ alignItems: "center" }}>
            <Text style={GlobalStyles.foodTitle}>Pizza</Text>
            <Text>Sauce</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", paddingTop: 20, paddingBottom: 20, justifyContent: "space-around" }}>
        <View>
          <Image style={GlobalStyles.drinksImg} source={chipotleSauce} />
          <View style={{ alignItems: "center" }}>
            <Text style={GlobalStyles.foodTitle}>Chipotle</Text>
            <Text>Sauce</Text>
          </View>
        </View>
        <View>
          <Image style={GlobalStyles.drinksImg} source={buffeloSauce} />
          <View style={{ alignItems: "center" }}>
            <Text style={GlobalStyles.foodTitle}>Buffelo</Text>
            <Text>Sauce</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={{ alignItems: "center", marginBottom: 15 }}>
        <Text style={GlobalStyles.cartBtn}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default SauceComponent;
