import React from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import Register from "./src/screens/register/index";
import LogIn from "./src/screens/login/index.jsx";
import ForgotPassword from "./src/screens/forgotpassword/index.jsx";
import Home from "./src/screens/home/index.jsx";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

