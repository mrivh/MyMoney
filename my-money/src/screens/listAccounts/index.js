import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import styles from "./styles";
import BottomText from "../../components/BottomText";
import { apiRequest } from "../../API";
import { useIsFocused } from "@react-navigation/native";
import CardAccount from "../../components/CardAccount"

export default function ListAccountsScreen({ navigation }) {
  const [lista, setLista] = useState([]);
  const isFocused = useIsFocused();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (isFocused) {
      listAccount();
    }
  }, [isFocused]);

  const listAccount = async () => {
    try {
      const { data } = await apiRequest({
        method: "get",
        url: "account/list",
      });

      setLista(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {lista.map((account, idx) => {
          return (
            <CardAccount 
              key={idx}
              description={account.name}
              amount={account.current_balance}
              type={account.account_type}
              numberCard={account.number}
              dateCard={account.court_date}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
