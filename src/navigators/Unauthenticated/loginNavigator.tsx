import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CreateScreen from "../../screens/Unauthenticated/createScreen";
import FirstScreen from "../../screens/Unauthenticated/firstScreen";
import ForgetPasswordScreen from "../../screens/Unauthenticated/forgetPasswordScreen";
import LoginScreen from "../../screens/Unauthenticated/loginScreen";


const LoginStack = createStackNavigator()

const LoginNavigator = () => {
    return (
      <LoginStack.Navigator>
         <LoginStack.Screen
          name="FirstScreen"
          component={FirstScreen}
          options={{ headerShown: false }}
        />
        <LoginStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <LoginStack.Screen
          name="Create"
          component={CreateScreen}
          options={{ headerShown: false }}
        />
        <LoginStack.Screen
          name="ForgetPassword"
          component={ForgetPasswordScreen}
          options={{ headerShown: false }}
        />
      </LoginStack.Navigator>
    )
  }
  
  export default LoginNavigator