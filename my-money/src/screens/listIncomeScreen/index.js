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
      listIncome();
    }
  }, [isFocused]);

  const listIncome = async () => {
    try {
      const { data } = await apiRequest({
        method: "get",
        url: "income/list",
      });

      setLista(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {lista.map((income, idx) => {
          return (
            <CardIncome_Expense
              key={idx}
              type={income.description}
              dateCard={income.income_date}
              amount={"+ $ " + income.import_income}
              colorMoney={'#07D9D9'}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
