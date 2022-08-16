import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import styles from "./styles";
import CardSaving from "../../components/CardSaving";
import { apiRequest } from "../../API";
import { useIsFocused } from "@react-navigation/native";

export default function ListIncomeScreen({ navigation }) {
  const [lista, setLista] = useState([]);
  const isFocused = useIsFocused();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (isFocused) {
      listSaving();
    }
  }, [isFocused]);

  const listSaving = async () => {
    try {
      const { data } = await apiRequest({
        method: "get",
        url: "saving/list",
      });

      setLista(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {lista.map((saving, idx) => {
          return (
            <CardSaving
              key={idx}
              list={saving.saving_list}
              concept={saving.saving_concept}
              amount={"$ " + saving.saving_amount}
              dateSaving={saving.saving_date}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
