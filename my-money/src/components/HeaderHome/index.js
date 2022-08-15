import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import MoneySVG from "../../../assets/icons/money_image.svg";

export default function HeaderHome({text}) {
  return (
    <View style={styles.container}>
      <MoneySVG />
      <View style={styles.union}>
        <Text style={styles.text}>¡Hola!</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}
