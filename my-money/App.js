import React from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import LogIn from "./src/screens/login/index.jsx";
import MyTextInput from "./src/components/mytextinput.jsx";
import Alerts from "./src/components/alerts";


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