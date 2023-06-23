import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigator from "./Authenticated/mainNavigator";
import LoginNavigator from "./Unauthenticated/loginNavigator";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const ApplicationNavigator = () => {
  const isLoggedIn: boolean = true;

  const HomeNavigation = () => {
    if (!isLoggedIn) {
      return <LoginNavigator />;
    } else {
      return <MainNavigator />;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="Startup" component={Startup} /> */}
          <Stack.Screen name="Main" component={HomeNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
