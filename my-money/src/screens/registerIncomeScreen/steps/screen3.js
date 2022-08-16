import { Text, View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { TextInput } from "react-native";
import { FormularioContext } from "..";

const Screen3 = () => {
  const { formulario, setFormulario } = useContext(FormularioContext);
  return (
    <View style={styles.sonContainer}>
      <Text>Tipo de cuenta :</Text>
      <TextInput
        value={formulario.income_type}
        onChangeText={(text) =>
          setFormulario({
            ...formulario,
            income_type: text,
          })
        }
      />
      <Text>Cuenta :</Text>
      <TextInput
        value={formulario.account}
        onChangeText={(text) =>
          setFormulario({
            ...formulario,
            account: text,
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

export default Screen3;
