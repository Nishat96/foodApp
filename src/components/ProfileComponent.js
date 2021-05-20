import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import ProfileStyles from "../styles/ProfileStyles";
import profileImage from "../assets/proImg.png";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileComponent = () => {
  return (
    <ScrollView>
      <View style={ProfileStyles.profileTopBar}>
        <Text style={{ fontWeight: "bold" }}>Personal details</Text>
        <Text style={{ color: "orange", fontWeight: "bold" }}>change</Text>
      </View>
      <View>
        <View style={ProfileStyles.profileSection}>
          <Image style={GlobalStyles.profileImg} source={profileImage} />
          <View style={{ paddingLeft: 20 }}>
            <Text style={{ fontWeight: "bold" }}>Marvis Ighedosa</Text>
            <Text>Dosamarvis@gmail.com</Text>
            <Text>+234 9011039271</Text>
            <Text>No 15 uti street off ovie palace</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={ProfileStyles.firstProfileBar}>
        <Text style={ProfileStyles.profileBtn}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ProfileStyles.profileBar}>
        <Text style={ProfileStyles.profileBtn}>Pending Reviews</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ProfileStyles.profileBar}>
        <Text style={ProfileStyles.profileBtn}>FAQ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ProfileStyles.profileBar}>
        <Text style={ProfileStyles.profileBtn}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={GlobalStyles.cartBtn}>Update Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default ProfileComponent;
