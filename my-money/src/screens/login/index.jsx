import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import MyTextInput from "../../components/mytextinput";
import axios from "axios";
import { passwordValidation } from "../../../utils/validations";
import CustomInput from "../../components/customInput";


const Logo = require('../../../assets/images/logomymoney.png');

export default function LogIn() {
//  const [user, setUser] = React.useState(initialState);
//  const initialState = { email: "", password: "",};
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [Loading, setLoading] = React.useState(false);
  const [ShowPassword, setShowPassword] = React.useState(false);
  const [Error, setError] = React.useState("");

const sendForm = () => {
  if (Email === ""){
    return alert("Es necesario ingresar un correo electrónico");
  }
  if (!passwordValidation.text(Password)){
    return alert("Es necesario ingresar una contraseña válida");
  }
  sendUser();
};

const sendUser = async () => {
  try {
    setLoading(true);
    const response = await axios.post(
      "https://floating-reef-988769.herokuapp.com/login",
      {email: Correo, password: Contraseña}
    );
    console.log(response);
    setLoading(false);
//CAMBIAR POR
 //     props.navigation.navigate("Avance");
 //     setLoading(false);
  }
  catch (error){
    const data=error.responde.data
    setLoading(false);
    setError(data.msg ? data.msg : data.error)
    console.error(error);
//    console.log("No es posible Iniciar Sesión, favor de verificar tus datos");
  }
};

    return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} resizeMode='contain'/>
        </View>
        <Text style={styles.title}>Iniciar sesión</Text>
       
  
        <MyTextInput
          label="Correo electrónico"
          place="Correo electrónico"
          value={Email}
          setValue={setEmail}  
 //         onChangeText={(text) => ChangeUserInputs("email", text)}
        />

        <MyTextInput
          label="Contraseña"
          place="Contraseña"
  //      "Debe contener: 6 a 20 carácteres, 1 mayúscula, 1 caracter y 1 número. "
          security={!ShowPassword}
          value={Password}
          setValue={setPassword}
          icon={ShowPassword ? "eye-slash" : "eye"}
          onIconclick={() => setShowPassword(!ShowPassword)}
  //        onChangeText={(text) => ChangeUserInputs("password", text)}
        />
         
         <Text style={styles.errorText}>
           {Error}
         </Text>

        <TouchableOpacity>
          <Text style={styles.forgotBtn}> ¿Olvidaste tu contraseña? </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={{color:'#FFFFFF', fontSize: 16}}> Ingresar </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.registerBtn}>
          <Text style={{color:'#003F5C', fontSize: 16}}> Registrarse </Text>
        </TouchableOpacity>

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
        paddingVertical: 60,
    //    marginVertical: 5,
     //   marginTop: 80,
    },
    logoContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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

    forgotBtn:{
      color: '#003F5C',
      fontSize: 14,
      justifyContent: 'center',
      padding: 20,
      marginHorizontal: 30,
    },

    loginBtn:{
      height: 50,
      borderRadius: 25,
      backgroundColor: '#39a851',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '40',
    },

    registerBtn: {
      height: 50,
      borderRadius: 25,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '40',
    },

    errorText: {
      color: '#FA0303',
      fontSize: 14,
    }

  });
