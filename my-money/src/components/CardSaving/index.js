import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function CardSaving({ list, concept, amount, dateSaving }) {
  return (
    <View style={styles.card}>
      <View style={styles.union}>
        <Text style={styles.text}>{list}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
      <Text
        style={{
          ...styles.text,
          ...{ fontSize: 16 },
          ...{ marginTop: 0 },
          ...{ fontWeight: "normal" },
        }}
      >
        {concept}
      </Text>
      <Text
        style={{
          ...styles.text,
          ...{ fontSize: 16 },
          ...{ fontStyle: "italic" },
          ...{ fontWeight: "normal" },
        }}
      >
        {dateSaving}
      </Text>
    </View>
  );
}
