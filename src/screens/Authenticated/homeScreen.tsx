import { View, Text, Button } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuScreen from './menuScreen';

const Tab = createBottomTabNavigator();
const HomeScreen = ({navigation}: { navigation: any }) => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Settings" component={MenuScreen} />
    </Tab.Navigator>
    </View>
  )
}

export default HomeScreen