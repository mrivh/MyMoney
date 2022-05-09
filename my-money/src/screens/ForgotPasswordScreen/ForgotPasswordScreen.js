import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomImput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const ForgotPasswordScreen = () => {
  const {password, setPassword} = useState('');

  const onConfirmPressed = () => {
    console.warn('INGRESAR');
  };

  const onResendePress =  () => {
      console.warn('onResendPress');
  };

    return (
        <ScrollView>
            <View style={styles.container}> 
            <Text style={styles.title}> Recupera tu contraseña </Text>

            <CustomImput
            placeholder="Contraseña"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
            />

            <CustomButton 
            text="INGRESAR" 
            onPress={onConfirmPressed}/>

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 12,
    },

    logo: {
        width: '100%',
        maxWidth: 300,
        maxHeight: 200,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2E86C1',
        margin: 10,
    },
});

export default ForgotPasswordScreen;