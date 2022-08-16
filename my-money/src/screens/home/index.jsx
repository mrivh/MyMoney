import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CardHome from "../../components/CardHome";
import HeaderHome from "../../components/HeaderHome";
import AccountSVG from "../../../assets/icons/account.svg";
import IncomeSVG from "../../../assets/icons/income.svg";
import ExpenseSVG from "../../../assets/icons/expense.svg";
import SavingSVG from "../../../assets/icons/saving.svg";
import GoalSVG from "../../../assets/icons/goal.svg";
import BalanceSVG from "../../../assets/icons/balance.svg";
import TagSVG from "../../../assets/icons/tag.svg";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderHome />
      <ScrollView>
        <View style={styles.list}>
          <CardHome
            text="Cuentas"
            onPress={() => navigation.navigate("Registro Cuentas")}
            Icon={AccountSVG}
          />
          <CardHome
            text="Etiquetas"
            onPress={() => navigation.navigate("Registro Etiquetas")}
            Icon={TagSVG}
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
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    maxHeight: 400,
    flexWrap: "wrap",
    marginTop: 120,

    alignContent: "space-around",
  },
  container: {
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
});
