import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Screen1 from "./steps/screen1";
import Screen2 from "./steps/screen2";
import Screen3 from "./steps/screen3";
import { apiRequest } from "../../API";

const initialState = {
  description: "",
  type: "",
  classification: "",
  color: "",
};

export const FormularioContext = React.createContext({
  formulario: initialState,
  setFormulario: () => {},
});

const paginas = [<Screen1 />, <Screen2 />];


export default function Formulario() {
  const [posicion, setPosicion] = useState(0);
  const [formulario, setFormulario] = useState(initialState);

  const registerTag = async () => {
    try {
      const response = await apiRequest({
        method: "post",
        url: "labels/register",
        data: formulario,
        sendToken: true,
      });

      alert("Etiqueta creada");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FormularioContext.Provider value={{ formulario, setFormulario }}>
        {paginas[posicion]}
      </FormularioContext.Provider>

      <View style={styles.footer}>
        <Button
          title="Atrás"
          disabled={posicion === 0}
          onPress={() => setPosicion(posicion - 1)}
        />
        {posicion === paginas.length - 1 ? (
          <Button onPress={registerTag} title="Guardar" />
        ) : (
          <Button onPress={() => setPosicion(posicion + 1)} title="Siguiente" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
});
