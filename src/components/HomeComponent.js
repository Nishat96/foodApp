import React, {useEffect, useState} from 'react';
import { Text, View, TextInput } from 'react-native';
import GlobalStyles from "../styles/GlobalStyles";

const HomeComponent = () => {
  return (
    <View>
      <Text style={GlobalStyles.titleBar}>Delicious</Text>
      <Text style={GlobalStyles.titleBar}>Food For You</Text>
      <View style={{ justifyContent: "center"}}>
        <TextInput style={GlobalStyles.searchBar} placeholderTextColor="#fff" placeholder="Search" />
      </View>
    </View>
  )
}
export default HomeComponent;
