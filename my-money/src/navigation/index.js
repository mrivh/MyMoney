import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import HomeScreen from '../screens/home'
import RegisterAccountsScreen from '../screens/registerAccounts'
import ListAccountsScreen from '../screens/listAccounts'

const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false,}}>
        <Stack.Screen name="loginScreen" component={LoginScreen} />
        <Stack.Screen name="registerScreen" component={RegisterScreen} />
        <Stack.Screen name="homeScreen" component={HomeScreen} />
        <Stack.Screen name="registerAccountsScreen" component={RegisterAccountsScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

