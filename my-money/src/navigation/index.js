import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import HomeScreen from '../screens/home'
import RegisterAccountsScreen from '../screens/registerAccounts'
import ListAccountsScreen from '../screens/listAccounts'
import RegisterTagsScreen from '../screens/registerTagsScreen'
import ListTagsScreen from '../screens/listTagsScreen'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Logo() {
  return (
    <Image
      source={require('../../assets/icons/logosmall.png')}
    />
  )
}

function RegisterAccountsTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00296A'
        },
        headerTitleAlign: 'center',
        headerTintColor: '#FFFFFF',
      }}
    >
      <Tab.Screen name="Registro Cuentas" component={RegisterAccountsScreen} />
      <Tab.Screen name="Lista Cuentas" component={ListAccountsScreen} />
    </Tab.Navigator>
  );
}

function RegisterTagsTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00296A'
        },
        headerTitleAlign: 'center',
        headerTintColor: '#FFFFFF',
      }}
    >
      <Tab.Screen name="Registro Etiquetas" component={RegisterTagsScreen} />
      <Tab.Screen name="Lista Etiquetas" component={ListTagsScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        options={{headerShown: false,}}
        name="loginScreen" 
        component={LoginScreen} />
        <Stack.Screen 
        options={{headerShown: false,}} 
        name="registerScreen" 
        component={RegisterScreen} />
        <Stack.Screen 
        name="homeScreen" 
        component={HomeScreen} 
        options={{ headerTitle: (props) => <Logo {...props}/>, headerTitleAlign: 'center'}} />
        <Stack.Screen 
        name="Registro Cuentas" 
        component={RegisterAccountsTab} 
        options={{ headerTitle: (props) => <Logo {...props}/>, headerTitleAlign: 'center'}} />
        <Stack.Screen 
        name="Registro Etiquetas" 
        component={RegisterTagsTab} 
        options={{ headerTitle: (props) => <Logo {...props}/>, headerTitleAlign: 'center'}} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

