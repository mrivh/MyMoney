import { Text, View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { TextInput } from "react-native";
import { FormularioContext } from "..";

const Screen2 = () => {
  const { formulario, setFormulario } = useContext(FormularioContext);
  return (
    <View style={styles.sonContainer}>
      <Text>Saldo Actual:</Text>
      <TextInput
        value={formulario.balance}
        onChangeText={(text) =>
          setFormulario({
            ...formulario,
            current_balance: text,
          })
        }
      />
      <Text>Fecha de corte:</Text>
      <TextInput
        value={formulario.date}
        onChangeText={(text) =>
          setFormulario({
            ...formulario,
            court_date: text,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sonContainer: {
    flex: 1,
  },
});

export default Screen2;