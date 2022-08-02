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
        value={formulario.import_income}
        onChangeText={(text) =>
          setFormulario({
            ...formulario,
            import_income: text,
          })
        }
      />
      <Text>Descripción del ingreso:</Text>
      <TextInput
        value={formulario.description}
        onChangeText={(text) =>
          setFormulario({
            ...formulario,
            description: text,
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