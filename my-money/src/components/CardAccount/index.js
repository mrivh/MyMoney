import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";

export default function CardHome({
  description,
  amount,
  type,
  numberCard,
  dateCard,
  key = null,
}) {
  return (
    <View key={key} style={styles.card}>
      <ImageBackground source= {require("../../../assets/icons/card_bg.png")} style={styles.image}>
        <View style={styles.union}>
          <Text style={styles.text}>{description}</Text>
          <Text style={styles.amount}>{amount}</Text>
        </View>
        <Text style={{...styles.text, ...{fontSize: 16}, ...{marginTop: 0}, ...{fontWeight: 'normal'},}}>{type}</Text>
        <Text style={{...styles.text, ...{fontSize: 25},}}>{numberCard}</Text>
        <Text style={{...styles.text, ...{fontSize: 16}, ...{fontStyle: 'italic'}, ...{fontWeight: 'normal'},}}>{dateCard}</Text>
      </ImageBackground>
    </View>
  );
}
