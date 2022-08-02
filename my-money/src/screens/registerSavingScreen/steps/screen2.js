import { Text, View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { TextInput } from "react-native";
import { FormularioContext } from "..";

const Screen2 = () => {
  const { formulario, setFormulario } = useContext(FormularioContext);
  return (
    <View style={styles.sonContainer}>
      <Text>Importe:</Text>
      <TextInput
        value={formulario.saving_amount}
        onChangeText={(text) =>
          setFormulario({
            ...formulario,
            saving_amount: text,
          })
        }
      />
      <Text>Fecha de corte:</Text>
      <TextInput
        value={formulario.saving_concept}
        onChangeText={(text) =>
          setFormulario({
            ...formulario,
            saving_concept: text,
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