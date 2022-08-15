import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function CardIncome_Expense({ type, dateCard, amount, colorMoney, key = null }) {
  return (
    <View key={key} style={styles.card}>
      <Text
        style={styles.text}
      >
        {type}
      </Text>
      <View style={styles.union}>
        <Text style={{...styles.text, ...{ fontStyle: "italic" }, ...{ fontWeight: "normal" }, ...{ fontSize: 18 },}}>{dateCard}</Text>
        <Text style={{...styles.text, ...{color:colorMoney},}}>{amount}</Text>
      </View>
    </View>
  );
}
