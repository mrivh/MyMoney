import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icons from "../icons";
import styles from "./styles";

export default function CardHome({ text, onPress = null, Icon }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Icons IconProp={Icon} />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
