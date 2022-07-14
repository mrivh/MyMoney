import React, { useState } from "react";
import { View, Text } from "react-native";
import LogoSVG from "../../../assets/icons/logo.svg";
import Icons from "../../components/icons";
import InputComponent from "../../components/InputComponent";
import EmailSVG from "../../../assets/icons/email.svg";
import PasswordSVG from "../../../assets/icons/password.svg";
import ButtonForInit from "../../components/ButtonForInit";
import BottomText from "../../components/BottomText";

import styles from "./styles";
import axios from "axios";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState({ email: false, password: false });
  const sendForm = () => {
    let next = true;
    let newErrors = errors;
    
    for(let property in user){
      if(user[property]===""){
        newErrors[property] = true
        next = false
      }
    }
    setErrors(newErrors)
    if(next){
      sendUser();
    }
   
  };

  const sendUser = async () => {
    try {
      const response = await axios.post(
        "http://secret-garden-33326.herokuapp.com/logIn/",
        user
      );

      navigation.navigate("homeScreen");
      setLoading(false);
    } catch (error) {
      console.error(error?.response?.data);
    }
  };
  const changeUserFields = (name, text) => {
    setUser({
      ...user,
      [name]: text,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoscontainer}>
        <View style={styles.logosdireccion}>
          <Icons IconProp={LogoSVG} style={styles.logocontainer} />
        </View>
      </View>
      <View style={styles.formcontainer}>
        <Text style={styles.text}>INICIAR SESIÓN</Text>
        <InputComponent
          title={"E-mail"}
          Icon={EmailSVG}
          visibleAlert={errors.email}
          value={user.email}
          setValue={(text) => changeUserFields("email", text)}
        />
        <InputComponent
          title={"Contraseña"}
          Icon={PasswordSVG}
          visibleAlert={errors.password}
          visibleIcon={true}
          value={user.password}
          setValue={(text) => changeUserFields("password", text)}
        />
        <BottomText text={"¿Contraseña Olvidada?"} />
        <ButtonForInit text="INGRESAR" onPress={sendForm} />
        <BottomText
          navigation={navigation}
          text={"¿Aún no tienes una cuenta?"}
          nameScreen={"registerScreen"}
        />
      </View>
    </View>
  );
}
