import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import MyButton from '../../components/mybutton';
import MyTextInput from '../../components/mytextinput';

const ForgotPassword = () => {
    const [Password, setPassword] = React.useState("");
  const [ShowPassword, setShowPassword] = React.useState(false);

  const onConfirmPressed = () => {
    console.warn('Ingresar');
  };

  const onResendePress =  () => {
      console.warn('onResendPress');
  };

    return (
        <ScrollView>
            <View style={styles.container}> 
            
            <Text style={styles.title}> Recupera tu contraseña </Text>

            <MyTextInput
            place="Contraseña"
  //      "Debe contener: 6 a 20 carácteres, 1 mayúscula, 1 caracter y 1 número. "
            security={!ShowPassword}
            value={Password}
            setValue={setPassword}
            icon={ShowPassword ? "eye-slash" : "eye"}
            onIconclick={() => setShowPassword(!ShowPassword)}
            />
            
            <MyButton 
            text="Ingresar" 
            onPress={onConfirmPressed}
            type="PRIMARY"
            />
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#FFFFFF',
        justifyContent: "space-between",
        padding: 40,
        paddingVertical: 50,
   //     alignItems: 'center',
   //     padding: 12,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2E86C1',
        margin: 10,
    },
});

export default ForgotPassword;