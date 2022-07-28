import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import BottomText from "../../components/BottomText";
import { apiRequest } from "../../API";
import { useIsFocused } from "@react-navigation/native";

export default function ListIncomeScreen({ navigation }) {
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
            <View key={idx} style={styles.formcontainer}>
              <BottomText text={income.label} />
              <BottomText text={income.description} />
              <BottomText text={"CVE: 564"} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
