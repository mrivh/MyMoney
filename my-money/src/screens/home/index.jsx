import React from "react";
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <View>
        <Text style={styles.title}>Home</Text>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#FFFFFF',
    justifyContent: "space-evenly",
    padding: 40,
    paddingVertical: 50,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E86C1',
    textAlign: 'center',
    marginBottom: 40,
  },
});
