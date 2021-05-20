import React from 'react';
import { Text, View, ScrollView, Image } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import spicyChicken from "../assets/spicyChicken.png";
import veggieImg from "../assets/veggie.png";
import profileImage from "../assets/proImg.png";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileComponent = () => {
  return (
    <ScrollView>
      <View style={{flexDirection: "row", justifyContent: "space-around", paddingTop: 20}}>
        <Text>Personal details</Text>
        <Text style={{color: "orange", fontWeight: "bold"}}>change</Text>
      </View>
      <View>
        <View style={{flexDirection: "row", backgroundColor: "#fff", padding: 20, marginTop: 10}}>
          <Image style={GlobalStyles.profileImg} source={profileImage} />
          <View style={{paddingLeft: 20}}>
            <Text style={{fontWeight: "bold"}}>Marvis Ighedosa</Text>
            <Text>Dosamarvis@gmail.com</Text>
            <Text>+234 9011039271</Text>
            <Text>No 15 uti street off ovie palace</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={{alignItems: "center", marginBottom: 15}}>
        <Text style={GlobalStyles.cartBtn}>Update Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}
export default ProfileComponent;
