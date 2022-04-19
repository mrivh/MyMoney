import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from  'react-native';
import Logo from '../../../assets/images/logomm.png';
import CustomImput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const SignInScreen = () => {
  const {email, setEmail } = useState('');
  const {password, setPassword } = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('INGRESAR');
  };

  const onSignUpPressed = () => {
    console.warn('REGISTRO');
  };

  const onForgotPasswordPressed = () => {
    console.warn('onForgotPasswordPressed');
  };    

    return (
        <ScrollView>
        <View style={styles.container}>
            <Image
            source={Logo}
            style={[styles.logo, {height: height * 0.5}]}
            resizeMode="contain"
            />

            <Text style={styles.title}> Iniciar sesión </Text>

        <CustomImput 
        placeholder="Correo electrónico" 
        value={email} 
        setValue={setEmail}
        />

        <CustomImput 
        placeholder="Contraseña" 
        value={password} 
        setValue={setPassword}
        secureTextEntry={true}
        />

        <CustomButton 
        text="INGRESAR" 
        onPress={onSignInPressed}
        />

        <CustomButton 
        text="CREAR CUENTA" 
        onPress={onSignUpPressed}
        type="SECONDARY"
        />  
        
        <CustomButton 
        text="¿Olvidaste tu contraseña?" 
        onPress={onForgotPasswordPressed} 
        type="TERTIARY"
        />

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

    icon: {
        color: '#b9b9b9',
    },
});


export default SignInScreen;