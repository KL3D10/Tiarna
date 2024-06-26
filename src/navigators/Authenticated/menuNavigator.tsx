import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/Authenticated/homeScreen";
import OnboardingScreen from "../../screens/Authenticated/onboardingScreen";
import MenuScreen from "../../screens/Authenticated/bottomScreens/menuScreen";
import RestaurantsScreen from "../../screens/Authenticated/menuScreens/restaurant/restaurantsScreen";
import HotelsScreen from "../../screens/Authenticated/menuScreens/hotelsScreens/hotelsScreen";
import NightlifeScreen from "../../screens/Authenticated/menuScreens/nightlifeScreens/nightlifeScreen";
import ShoppingScreen from "../../screens/Authenticated/menuScreens/shoppingScreens/shoppingScreen";
import FavoritesScreen from "../../screens/Authenticated/bottomScreens/favoritesScreen";
import RestaurantDetailsScreen from "../../screens/Authenticated/menuScreens/restaurant/restaurantDetailsScreen";
import HotelDetailsScreen from "../../screens/Authenticated/menuScreens/hotelsScreens/hotelDetailsScreen";
import NightlifeDetailsScreen from "../../screens/Authenticated/menuScreens/nightlifeScreens/nightlifeDetailsScreen";
import HotspotsScreen from "../../screens/Authenticated/menuScreens/hotspotsScreen/hotspotsScreen";

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
      <Stack.Screen name="Hotspots" component={HotspotsScreen} />
      <Stack.Screen name="Restaurant Details" component={RestaurantDetailsScreen} />
      <Stack.Screen name="Hotel Details" component={HotelDetailsScreen} />
      <Stack.Screen name="Nightlife Details" component={NightlifeDetailsScreen} />
    </Stack.Navigator>
  );
};

export default MenuNavigator;
