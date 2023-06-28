import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/Authenticated/homeScreen";
import OnboardingScreen from "../../screens/Authenticated/onboardingScreen";
import MenuScreen from "../../screens/Authenticated/bottomScreens/menuScreen";
import RestaurantsScreen from "../../screens/Authenticated/menuScreens/restaurantsScreen";
import HotelsScreen from "../../screens/Authenticated/menuScreens/hotelsScreen";
import NightlifeScreen from "../../screens/Authenticated/menuScreens/nightlifeScreen";
import ShoppingScreen from "../../screens/Authenticated/menuScreens/shoppingScreen";
import FavoritesScreen from "../../screens/Authenticated/bottomScreens/favoritesScreen";

const Stack = createStackNavigator();

// @refresh reset
const MenuNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MenuScreen">
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
      <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
      <Stack.Screen name="Hotels" component={HotelsScreen} />
      <Stack.Screen name="Nightlife" component={NightlifeScreen} />
      <Stack.Screen name="Shopping" component={ShoppingScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

export default MenuNavigator;
