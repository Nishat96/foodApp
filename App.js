import React from 'react';
import HomeComponent from "./src/components/HomeComponent";
import ProfileComponent from "./src/components/ProfileComponent";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FooterComponent from "./src/components/FooterComponent";
import SplashComponent from "./src/components/SplashComponent";
import FoodComponent from "./src/components/FoodComponent";
import DrinksComponent from "./src/components/DrinksComponent";
import SnacksComponent from "./src/components/SnacksComponent";
import SauceComponent from "./src/components/SauceComponent";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRoute="SplashScreen">
        <Stack.Screen name="Splash Screen" component={SplashComponent} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeComponent} options={{headerShown: false}}/>
        <Stack.Screen name="Foods" component={FoodComponent}/>
        <Stack.Screen name="Drinks" component={DrinksComponent}/>
        <Stack.Screen name="Snacks" component={SnacksComponent}/>
        <Stack.Screen name="Sauce" component={SauceComponent}/>
        <Stack.Screen name="Profile" component={ProfileComponent} />
        <Stack.Screen name="Footer" component={FooterComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
