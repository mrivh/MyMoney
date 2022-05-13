import React from "react";
import { View, Image, Text, StyleSheet, SafeAreaView } from "react-native";
import MyTextInput from "../../components/mytextinput";
import MyButton from "../../components/mybutton";
import axios from "axios";
import { passwordValidation } from "../../../utils/validations";
import { ActivityIndicator, Linking } from "react-native-web";



const Logo = require ('../../../assets/images/logomymoney.png');

export default function Register() {
  const [User, setUser] = React.useState("");  
  const [Correo, setCorreo] = React.useState("");
  const [Contraseña, setContraseña] = React.useState("");
  const [ConfContra, setConfiContra] = React.useState("");
  const [Loading, setLoading] = React.useState(false);
  const [ShowPassword, setShowPassword] = React.useState(false);

const enviarFormulario = () => {
  if (User === ""){
    return alert("Es necesario ingresar un nombre de usuario");
  }  
  if (Correo === ""){
    return alert("Es necesario ingresar un correo electrónico");
  }
  if (!passwordValidation.test(Contraseña)){
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
          security={!ShowPassword}
          value={Contraseña}
          setValue={setContraseña}
          icon={ShowPassword ? "eye-slash" : "eye"}
          onIconclick={() => setShowPassword(!ShowPassword)}
        />
        <MyTextInput
          label="Confirmar Contraseña"
          place="Digite de nuevo su contraseña"
          security={!ShowPassword}
          value={ConfContra}
          setValue={setConfiContra}
          icon={ShowPassword ? "eye-slash" : "eye"}
          onIconclick={() => setShowPassword(!ShowPassword)}
        />
         

        <View style={styles.myButtonContainer}>
          {Loading ? (
            <ActivityIndicator/>
            ) : (
            <MyButton 
            text="Registrarse" 
            onPress={enviarFormulario}
            type="PRIMARY"
            />
            )
          }
            
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
      height: '10%',
      backgroundColor: '#696969',
      justifyContent: "center",
      alignItems: "center",
    }

  });
