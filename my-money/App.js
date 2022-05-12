import React from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import LogIn from "./src/screens/login/index.jsx";
import ForgotPassword from "./src/screens/forgotpassword/index.jsx";
import Home from "./src/screens/home/index.jsx";


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LogIn/>
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