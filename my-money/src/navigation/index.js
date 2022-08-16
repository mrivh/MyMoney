import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/Ionicons";
import LoginScreen from "../screens/loginScreen";
import RegisterScreen from "../screens/registerScreen";
import HomeScreen from "../screens/home";
import RegisterAccountsScreen from "../screens/registerAccounts";
import ListAccountsScreen from "../screens/listAccounts";
import RegisterTagsScreen from "../screens/registerTagsScreen";
import ListTagsScreen from "../screens/listTagsScreen";
import RegisterIncomeScreen from "../screens/registerIncomeScreen";
import ListIncomeScreen from "../screens/listIncomeScreen";
import RegisterExpenseScreen from "../screens/registerExpenseScreen";
import ListExpenseScreen from "../screens/listExpenseScreen";
import RegisterSavingScreen from "../screens/registerSavingScreen";
import ListSavingScreen from "../screens/listSavingScreen";
import WelcomeScreen from "../screens/welcomeScreen";
import SliderScreen from "../screens/sliderScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Logo() {
  return <Image source={require("../../assets/icons/logosmall.png")} />;
}

function RegisterAccountsTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Registro Cuentas") {
            iconName = focused ? "md-create" : "md-create-outline";
          } else if (route.name === "Lista Cuentas") {
            iconName = focused ? "md-list-sharp" : "md-list-outline";
          }
          return <Icon name={iconName} size={35} color={color} />;
        },
        tabBarActiveTintColor: "#00296A",
        tabBarInactiveTintColor: "gray",
        headerStyle: {
          backgroundColor: "#00296A",
        },
        headerTitleAlign: "center",
        headerTintColor: "#FFFFFF",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Registro Cuentas" component={RegisterAccountsScreen} />
      <Tab.Screen name="Lista Cuentas" component={ListAccountsScreen} />
    </Tab.Navigator>
  );
}

function RegisterTagsTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Registro Etiquetas") {
            iconName = focused ? "md-create" : "md-create-outline";
          } else if (route.name === "Lista Etiquetas") {
            iconName = focused ? "md-list-sharp" : "md-list-outline";
          }
          return <Icon name={iconName} size={35} color={color} />;
        },
        tabBarActiveTintColor: "#00296A",
        tabBarInactiveTintColor: "gray",
        headerStyle: {
          backgroundColor: "#00296A",
        },
        headerTitleAlign: "center",
        headerTintColor: "#FFFFFF",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Registro Etiquetas" component={RegisterTagsScreen} />
      <Tab.Screen name="Lista Etiquetas" component={ListTagsScreen} />
    </Tab.Navigator>
  );
}

function RegisterIncomeTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Registro Ingresos") {
            iconName = focused ? "md-create" : "md-create-outline";
          } else if (route.name === "Lista Ingresos") {
            iconName = focused ? "md-list-sharp" : "md-list-outline";
          }
          return <Icon name={iconName} size={35} color={color} />;
        },
        tabBarActiveTintColor: "#00296A",
        tabBarInactiveTintColor: "gray",
        headerStyle: {
          backgroundColor: "#00296A",
        },
        headerTitleAlign: "center",
        headerTintColor: "#FFFFFF",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Registro Ingresos" component={RegisterIncomeScreen} />
      <Tab.Screen name="Lista Ingresos" component={ListIncomeScreen} />
    </Tab.Navigator>
  );
}

function RegisterExpenseTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Registro Gastos") {
            iconName = focused ? "md-create" : "md-create-outline";
          } else if (route.name === "Lista Gastos") {
            iconName = focused ? "md-list-sharp" : "md-list-outline";
          }
          return <Icon name={iconName} size={35} color={color} />;
        },
        tabBarActiveTintColor: "#00296A",
        tabBarInactiveTintColor: "gray",
        headerStyle: {
          backgroundColor: "#00296A",
        },
        headerTitleAlign: "center",
        headerTintColor: "#FFFFFF",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Registro Gastos" component={RegisterExpenseScreen} />
      <Tab.Screen name="Lista Gastos" component={ListExpenseScreen} />
    </Tab.Navigator>
  );
}

function RegisterSavingTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Registro Ahorros") {
            iconName = focused ? "md-create" : "md-create-outline";
          } else if (route.name === "Lista Ahorros") {
            iconName = focused ? "md-list-sharp" : "md-list-outline";
          }
          return <Icon name={iconName} size={35} color={color} />;
        },
        tabBarActiveTintColor: "#00296A",
        tabBarInactiveTintColor: "gray",
        headerStyle: {
          backgroundColor: "#00296A",
        },
        headerTitleAlign: "center",
        headerTintColor: "#FFFFFF",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Registro Ahorros" component={RegisterSavingScreen} />
      <Tab.Screen name="Lista Ahorros" component={ListSavingScreen} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="welcomeScreen"
          component={WelcomeScreen}
        />
        <Stack.Screen
          options={{ headerTitle: (props) => <Logo {...props} />,
          headerTitleAlign: "center",headerLeft: () => null}}
          name="sliderScreen"
          component={SliderScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="loginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="registerScreen"
          component={RegisterScreen}
        />
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{
            headerTitle: (props) => <Logo {...props} />,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Registro Cuentas"
          component={RegisterAccountsTab}
          options={{
            headerTitle: (props) => <Logo {...props} />,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Registro Etiquetas"
          component={RegisterTagsTab}
          options={{
            headerTitle: (props) => <Logo {...props} />,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Registro Ingresos"
          component={RegisterIncomeTab}
          options={{
            headerTitle: (props) => <Logo {...props} />,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Registro Gastos"
          component={RegisterExpenseTab}
          options={{
            headerTitle: (props) => <Logo {...props} />,
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Registro Ahorros"
          component={RegisterSavingTab}
          options={{
            headerTitle: (props) => <Logo {...props} />,
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
