import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function CardTag({
  description,
  type,
  classification,
  colorCircle,
}) {
  return (
    <View style={styles.card}>
      <View
        style={{ ...styles.circle, ...{ backgroundColor: colorCircle } }}
      ></View>
      <View>
        <Text style={styles.text}>{description}</Text>
        <View style={styles.union}>
          <Text
            style={{
              ...styles.text,
              ...{ fontStyle: "italic" },
              ...{ fontWeight: "normal" },
              ...{ fontSize: 18 },
            }}
          >
            {type}
          </Text>

          <Text style={{...styles.text, ...{ fontSize: 18},}}>{classification}</Text>
        </View>
      </View>
    </View>
  );
}
