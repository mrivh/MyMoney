import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import MyTextInput from "../../components/mytextinput";
import MyButton from "../../components/mybutton";
import axios from "axios";
import { passwordValidation } from "../../../utils/validations";
import { ActivityIndicator } from "react-native-web";



const Logo = require ('../../../assets/images/logomymoney.png');

export default function LogIn({navigation}) {
//    console.log(props);
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");
  const [Loading, setLoading] = React.useState(false);
  const [ShowPassword, setShowPassword] = React.useState(false);
  const [Error, setError] = React.useState("");

const sendForm = () => {
  if (Email === ""){
    return alert("Es necesario ingresar un correo electrónico");
  }
  if (!passwordValidation.test(Password)){
    return alert("Es necesario ingresar una contraseña válida");
  }
  sendUser();
};

const sendUser = async () => {
  try {
    setLoading(true);
    const response = await axios.post(
      "https://floating-reef-98769.herokuapp.com/logIn/",
      { email: Email, password: Password }
    );
//    console.log(response);
//    setLoading(false);
//CAMBIAR POR
      navigation.navigate("Home");
      setLoading(false);
  }
  catch (error){
    const data=error.response.data
    setLoading(false);
    setError(data.detail ? data.detail : data.error);
    console.error(error);
//    console.log("No es posible Iniciar Sesión, favor de verificar tus datos");
  }
};

    return (
      
      <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Image source={ Logo } style={styles.logo} resizeMode='contain'/>
        </View>
        <Text style={styles.title}>Iniciar sesión</Text>
  
        <MyTextInput
          label="Correo electrónico"
          place="Correo electrónico"
          value={Email}
          setValue={setEmail}  
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
        />
         
         <Text style={styles.errorText}>
           {Error}
         </Text>


        <View style={styles.myButtonContainer}>
            <MyButton 
            text="¿Olvidaste tu contraseña?" 
            onPress={() => navigation.navigate('ForgotPassword')}
            type="TERTIARY"
            />
          
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
            text="Registrarse" 
            onPress={() => navigation.navigate('Register')}
            type="SECONDARY"
            />
        </View>
      </View>
      
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#FFFFFF',
        justifyContent: "center",
        padding: 30,
        alignItems: "center",
        

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
    },

    myButtonContainer: {
      flex: 1,
      width: '100%',
      flexDirection: "column",
      backgroundColor: '#FFFFFF',
      justifyContent: "center",
      alignItems: "center",
    }
    
    
  });
