import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import GlobalStyles from "../styles/GlobalStyles";

/*images*/
import burger from "../assets/burger.jpg";
import pizza from "../assets/pizza.jpg";
import nuggets from "../assets/nuggets.jpg";
import meetBall from "../assets/meetball.jpg";
import sub from "../assets/sub.jpg";

const SnacksComponent = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ flexDirection: "row", paddingTop: 20, justifyContent: "space-around" }}>
        <View>
          <Image style={GlobalStyles.drinksImg} source={burger} />
          <View style={{ alignItems: "center" }}>
            <Text style={GlobalStyles.foodTitle}>Classic Smashed</Text>
            <Text>Burger</Text>
          </View>
        </View>
        <View>
          <Image style={GlobalStyles.drinksImg} source={pizza} />
          <View style={{ alignItems: "center" }}>
            <Text style={GlobalStyles.foodTitle}>Fresh Grilled</Text>
            <Text>Pizza</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", paddingTop: 20, justifyContent: "space-around" }}>
        <View>
          <Image style={GlobalStyles.drinksImg} source={nuggets} />
          <View style={{ alignItems: "center" }}>
            <Text style={GlobalStyles.foodTitle}>Chicken</Text>
            <Text>Nuggets</Text>
          </View>
        </View>
        <View>
          <Image style={GlobalStyles.drinksImg} source={meetBall} />
          <View style={{ alignItems: "center" }}>
            <Text style={GlobalStyles.foodTitle}>Italian</Text>
            <Text>MeetBall</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", paddingTop: 20, justifyContent: "space-around" }}>
        <View>
          <Image style={GlobalStyles.drinksImg} source={sub} />
          <View style={{ alignItems: "center" }}>
            <Text style={GlobalStyles.foodTitle}>Maxican Sub</Text>
            <Text>Sandwich</Text>
          </View>
        </View>
        <View>
          <Image style={GlobalStyles.drinksImg} source={burger} />
          <View style={{ alignItems: "center" }}>
            <Text style={GlobalStyles.foodTitle}>Classic Smashed</Text>
            <Text>Burger</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", paddingTop: 20, paddingBottom: 20, justifyContent: "space-around" }}>
        <View>
          <Image style={GlobalStyles.drinksImg} source={nuggets} />
          <View style={{ alignItems: "center" }}>
            <Text style={GlobalStyles.foodTitle}>Chicken</Text>
            <Text>Nuggets</Text>
          </View>
        </View>
        <View>
          <Image style={GlobalStyles.drinksImg} source={pizza} />
          <View style={{ alignItems: "center" }}>
            <Text style={GlobalStyles.foodTitle}>Fresh Grilled</Text>
            <Text>Pizza</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={{ alignItems: "center", marginBottom: 15 }}>
        <Text style={GlobalStyles.cartBtn}>Add to Cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default SnacksComponent;
