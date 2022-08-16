import { Text, View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { TextInput } from "react-native";
import { FormularioContext } from "..";

const Screen2 = () => {
  const { formulario, setFormulario } = useContext(FormularioContext);
  return (
    <View style={styles.sonContainer}>
      <Text>Clasificación: </Text>
      <TextInput
        value={formulario.classification}
        onChangeText={(text) =>
          setFormulario({
            ...formulario,
            classification: text,
          })
        }
      />
      <Text>Color: </Text>
      <TextInput
        value={formulario.color}
        onChangeText={(text) =>
          setFormulario({
            ...formulario,
            color: text,
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

export default Screen2;