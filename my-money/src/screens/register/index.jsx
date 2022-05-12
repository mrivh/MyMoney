import React from "react";
import { View, Image, Text, StyleSheet, SafeAreaView } from "react-native";
import MyTextInput from "../../components/mytextinput";
import MyButton from "../../components/mybutton";
import axios from "axios";
import { passwordValidation } from "../../../utils/validations";
import { ActivityIndicator, Linking } from "react-native-web";


const Logo = require ('../../../assets/images/logomymoney.png');

export default function LogIn() {
  const [User, setUser] = React.useState("");  
  const [Correo, setCorreo] = React.useState("");
  const [Contraseña, setContraseña] = React.useState("");
  const [ConfContra, setConfiContra] = React.useState("");
  const [Loading, setLoading] = React.useState(false);
  const [ShowPassword, setShowPassword] = React.useState(false);
  const [Error, setError] = React.useState("");

const enviarFormulario = () => {
  if (Correo === ""){
    return alert("Es necesario ingresar un correo electrónico");
  }
  if (!passwordValidation.text(Password)){
    return alert("Por favor, ingrese una contraseña válida");
  }
  if (ConfContra != Contraseña) {
    return alert("Verificar contraseña");
  }
  enviarUsuario();
};

const enviarUsuario = async () => {
  try {
    setLoading(true);
    const response = await axios.post(
      "https://floating-reef-98769.herokuapp.com/register/",
      { email: Correo, password: Contraseña, username: User }
    );
    console.log(response);
    setLoading(false);
  }catch (error){
    setLoading(false);
    console.error(error);
    }
};

    return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Image source={ Logo } style={styles.logo} resizeMode='contain'/>
        </View>
        <Text style={styles.title}>Registro</Text>
  
        <MyTextInput
          label="Usuario"
          place="Mínimo 3 caracteres"
          value={User}
          setValue={setUser}  
        />

        <MyTextInput
          label="Correo electrónico"
          place="johndoe@gmail.com"
          value={Correo}
          setValue={setCorreo}  
        />

        <MyTextInput
          label="Contraseña"
          place="6-20 caracteres, 1 Mayúscula, 1 Caracter, 1 Número"
  //      "Debe contener: 6 a 20 carácteres, 1 mayúscula, 1 caracter y 1 número. "
          security={!ShowPassword}
          value={Password}
          setValue={setPassword}
          icon={ShowPassword ? "eye-slash" : "eye"}
          onIconclick={() => setShowPassword(!ShowPassword)}
        />
        <MyTextInput
          label="Confirmar Contraseña"
          place="Digite de nuevo su contraseña"
          security
          value={ConfContra}
          setValue={setConfiContra}
        />
         

        <View style={styles.myBottonContainer}>
          {Loading ? (
            <ActivityIndicator/>
            ) : (
            <MyButton 
            text="Ingresar" 
            onPress={sendForm}
            type="PRIMARY"
            />
            )
          }
            <MyButton 
            text="¿Olvidaste tu contraseña?" 
            onPress={() => Linking.openURL(ForgotPassword)}
            type="TERTIARY"
            />
            
            <MyButton 
            text="Registrarse" 
            onPress={() => Linking.openURL(Register)}
            type="SECONDARY"
            />
        </View>
      </View>
    </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#FFFFFF',
        justifyContent: "space-evenly",
        padding: 40,
        paddingVertical: 50,
    //    marginVertical: 5,
     //   marginTop: 80,
    },
    logoContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
    },

    logo: {
      width: 150,
      height: 150,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2E86C1',
        textAlign: 'center',
        marginBottom: 40,
    },

    errorText: {
      color: '#FA0303',
      fontSize: 14,
    }

  });
