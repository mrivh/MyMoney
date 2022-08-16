import { Text, View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { TextInput } from "react-native";
import { FormularioContext } from "..";

const Screen1 = () => {
  const { formulario, setFormulario } = useContext(FormularioContext);
  return (
    <View style={styles.sonContainer}>
      <Text>Tipo de ahorro:</Text>
      <TextInput
        value={formulario.saving_list}
        onChangeText={(text) =>
          setFormulario({
            ...formulario,
            saving_list: text,
          })
        }
      />
      <Text>Fecha de ahorro:</Text>
      <TextInput
        value={formulario.saving_date}
        onChangeText={(text) =>
          setFormulario({
            ...formulario,
            saving_date: text,
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
