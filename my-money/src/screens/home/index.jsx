import React from "react";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ButtonForInit from '../../components/ButtonForInit';


export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Bienvenido</Text>
        <ScrollView>
          <ButtonForInit 
            text="CUENTAS"
            onPress={() => navigation.navigate('Registro Cuentas')}
            />
          <ButtonForInit 
            text="ETIQUETAS"
            onPress={() => navigation.navigate('Registro Etiquetas')}
            />
          <ButtonForInit 
            text="INGRESOS"
            onPress={() => navigation.navigate('Registro Ingresos')}
            />
          <ButtonForInit 
            text="GASTOS"
            onPress={() => navigation.navigate('Registro Gastos')}
            />
          <ButtonForInit 
            text="METAS"
            onPress={() => navigation.navigate('Registro Cuentas')}
            />
          <ButtonForInit 
            text="AHORRO"
            onPress={() => navigation.navigate('Registro Cuentas')}
            />
          <ButtonForInit 
            text="BALANCE"
            onPress={() => navigation.navigate('Registro Cuentas')}
            />
        </ScrollView>
        
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
