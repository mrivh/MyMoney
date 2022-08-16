import { Text, View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { TextInput } from "react-native";
import { FormularioContext } from "..";

const Screen3 = () => {
  const { formulario, setFormulario } = useContext(FormularioContext);
  return (
    <View style={styles.sonContainer}>
      <Text>Tipo de cuenta:</Text>
      <TextInput
        value={formulario.accountType}
        onChangeText={(text) =>
          setFormulario({
            ...formulario,
            account_type: text,
          })
        }
      />
      <Text>CVE-Número de seguridad:</Text>
      <TextInput
        value={formulario.cve}
        onChangeText={(text) =>
          setFormulario({
            ...formulario,
            cve: text,
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

export default Screen3;
