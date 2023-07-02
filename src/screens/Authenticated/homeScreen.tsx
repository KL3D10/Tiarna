import { View, Text, Button } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuScreen from "./bottomScreens/menuScreen";
import FavoritesScreen from "./bottomScreens/favoritesScreen";
import { Icon } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ProfileScreen from "./bottomScreens/profileScreen";
import MenuNavigator from "../../navigators/Authenticated/menuNavigator";
import LocationScreen from "./bottomScreens/locationScreen";

const Tab = createBottomTabNavigator();
const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 60,
            backgroundColor: "#fff",
          },
        }}
        initialRouteName="Menu"
      >
        <Tab.Screen
          name="Location"
          component={LocationScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="earth" size={26} color={focused ? "#002c2b" : "#b6b6b6"} />
                <Text style={{ fontSize: 12, color: focused ? "#002c2b" : "#b6b6b6" }}>Location</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons name="menu" size={26} color={focused ? "#002c2b" : "#b6b6b6"} />
                <Text style={{ fontSize: 12, color: focused ? "#002c2b" : "#b6b6b6" }}>Browse</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialIcons name="favorite" size={26} color={focused ? "#002c2b" : "#b6b6b6"} />
                <Text style={{ fontSize: 12, color: focused ? "#002c2b" : "#b6b6b6" }}>Favorites</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="person" size={26} color={focused ? "#002c2b" : "#b6b6b6"} />
                <Text style={{ fontSize: 12, color: focused ? "#002c2b" : "#b6b6b6" }}>Profile</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default HomeScreen;
