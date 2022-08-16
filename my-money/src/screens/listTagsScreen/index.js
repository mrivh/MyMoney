import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import CardTag from "../../components/CardTag";
import { apiRequest } from "../../API";
import { useIsFocused } from "@react-navigation/native";

export default function ListTagsScreen({ navigation }) {
  const [lista, setLista] = useState([]);
  const isFocused = useIsFocused();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (isFocused) {
      listTag();
    }
  }, [isFocused]);

  const listTag = async () => {
    try {
      const { data } = await apiRequest({
        method: "get",
        url: "labels/list/",
      });

      setLista(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {lista.map((tag, idx) => {
          return (
            <CardTag
              key={idx}
              description={tag.description}
              type={tag.type}
              classification={tag.classification}
              colorCircle={tag.color}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
