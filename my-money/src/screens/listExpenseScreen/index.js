import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";
import { apiRequest } from "../../API";
import { useIsFocused } from "@react-navigation/native";
import CardIncome_Expense from "../../components/CardIncome_Expense";

export default function ListIncomeScreen({ navigation }) {
  const [lista, setLista] = useState([]);
  const isFocused = useIsFocused();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (isFocused) {
      listExpense();
    }
  }, [isFocused]);

  const listExpense = async () => {
    try {
      const { data } = await apiRequest({
        method: "get",
        url: "expense/list",
      });

      setLista(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {lista.map((expense, idx) => {
          return (
            <CardIncome_Expense
              key={idx}
              type={expense.description}
              dateCard={expense.spending_day}
              amount={"- $ " + expense.amount}
              colorMoney={"#FF2A6D"}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
