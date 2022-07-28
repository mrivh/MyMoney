import { Text, View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { TextInput } from "react-native";
import { FormularioContext } from "..";

const Screen1 = () => {
  const { formulario, setFormulario } = useContext(FormularioContext);
  return (
    <View style={styles.sonContainer}>
      <Text>Descripción:</Text>
      <TextInput
        value={formulario.description}
        onChangeText={(text) =>
          setFormulario({
            ...formulario,
            description: text,
          })
        }
      />
      <Text>Tipo:</Text>
      <TextInput
        value={formulario.type}
        onChangeText={(text) =>
          setFormulario({
            ...formulario,
            type: text,
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
