import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import { TextInput } from "react-native";
import { FormularioContext } from "..";

const Screen1 = () => {
  const { formulario, setFormulario } = useContext(FormularioContext);
  return (
      <View style={styles.sonContainer}>
        <Text>Nombre de la cuenta:</Text>
        <TextInput
          value={formulario.nameAccount}
          onChangeText={(text) =>
            setFormulario({
              ...formulario,
              nameAccount: text,
            })
          }
        />
        <Text>Número de cuenta:</Text>
        <TextInput
          value={formulario.numberAccount}
          onChangeText={(text) =>
            setFormulario({
              ...formulario,
              numberAccount: text,
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

