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
      <Text>Fecha de gasto:</Text>
      <TextInput
        value={formulario.spending_day}
        onChangeText={(text) =>
          setFormulario({
            ...formulario,
            spending_day: text,
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

export default Screen1;
