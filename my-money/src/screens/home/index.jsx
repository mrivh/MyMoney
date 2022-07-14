import React from "react";
import { View, Image, Text, SafeAreaView, StyleSheet } from 'react-native';
import ButtonForInit from '../../components/ButtonForInit';


export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Bienvenido</Text>
        <ButtonForInit 
          text="REGISTRO DE CUENTAS"
          onPress={() => navigation.navigate('registerAccountsScreen')}
          />
        <ButtonForInit 
          text="LISTADO DE CUENTAS"
          
          />
        
    </View>
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

  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },

  logo: {
    width: 150,
    height: 150,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E86C1',
    textAlign: 'center',
    marginBottom: 40,
    paddingVertical: 50,
  },
});
