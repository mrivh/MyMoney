import React from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import SignInScreen from "./src/screens/SignInScreen/SignInScreen";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SignInScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;