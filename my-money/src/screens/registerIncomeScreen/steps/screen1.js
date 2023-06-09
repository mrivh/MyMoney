import { Text, View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { TextInput } from "react-native";
import { FormularioContext } from "..";

const Screen1 = () => {
  const { formulario, setFormulario } = useContext(FormularioContext);
  return (
      <View style={styles.sonContainer}>
        <Text>Concepto:</Text>
        <TextInput
          value={formulario.label}
          onChangeText={(text) =>
            setFormulario({
              ...formulario,
              label: text,
            })
          }
        />
        <Text>Fecha del ingreso:</Text>
        <TextInput
          value={formulario.income_date}
          onChangeText={(text) =>
            setFormulario({
              ...formulario,
              income_date: text,
            })
          }
        />
      </View>
  );
};

const styles = StyleSheet.create({
  sonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default Screen1;

