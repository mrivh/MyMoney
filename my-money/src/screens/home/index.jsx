import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ButtonForInit from "../../components/ButtonForInit";
import CardHome from "../../components/CardHome";
import AccountSVG from "../../../assets/icons/account.svg";
import IncomeSVG from "../../../assets/icons/income.svg";
import ExpenseSVG from "../../../assets/icons/expense.svg";
import SavingSVG from "../../../assets/icons/saving.svg";
import GoalSVG from "../../../assets/icons/goal.svg";
import BalanceSVG from "../../../assets/icons/balance.svg";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <ScrollView>
        <CardHome
          text="Cuentas"
          onPress={() => navigation.navigate("Registro Cuentas")}
          Icon={AccountSVG}
        />
        <CardHome
          text="Etiquetas"
          onPress={() => navigation.navigate("Registro Etiquetas")}
          Icon={AccountSVG}
        />
        <CardHome
          text="Ingresos"
          onPress={() => navigation.navigate("Registro Ingresos")}
          Icon={IncomeSVG}
        />
        <CardHome
          text="Gastos"
          onPress={() => navigation.navigate("Registro Gastos")}
          Icon={ExpenseSVG}
        />
        <CardHome
          text="Ahorro"
          onPress={() => navigation.navigate("Registro Ahorros")}
          Icon={SavingSVG}
        />
        <CardHome
          text="Metas"
          onPress={() => navigation.navigate("Registro Cuentas")}
          Icon={GoalSVG}
        />
        <CardHome
          text="Balance"
          onPress={() => navigation.navigate("Registro Cuentas")}
          Icon={BalanceSVG}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-evenly",
    padding: 40,
    paddingVertical: 50,
  },

  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2E86C1",
    textAlign: "center",
    marginBottom: 40,
    paddingVertical: 50,
  },
});
