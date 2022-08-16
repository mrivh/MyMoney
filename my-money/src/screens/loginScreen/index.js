import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import LogoSVG from "../../../assets/icons/logo.svg";
import Icons from "../../components/icons";
import InputComponent from "../../components/InputComponent";
import EmailSVG from "../../../assets/icons/email-register.svg";
import PasswordSVG from "../../../assets/icons/password-register.svg";
import ButtonForInit from "../../components/ButtonForInit";
import BottomText from "../../components/BottomText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiRequest } from "../../API";
import styles from "./styles";


const Logo = require("../../../assets/icons/LogoMyMoney.png");

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState(initialState);
  const [Loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ email: false, password: false });

  const sendForm = () => {
    let next = true;
    let newErrors = errors;
    navigation.navigate("homeScreen");
    for (let property in user) {
      if (user[property] === "") {
        newErrors[property] = true;
        next = false;
      }
    }
    setErrors(newErrors);
    if (next) {
      sendUser();
    }
  };

  const sendUser = async () => {
    try {
      setLoading(true);
      const response = await apiRequest({
        method: "post",
        url: "logIn/",
        data: user,
        sendToken: false,
      });

      const tokens = response.data.tokens;
      let re = /'/g;
      const newToken = tokens.replace(re, '"');
      const finalToken = JSON.parse(newToken);

      AsyncStorage.setItem("userInfo", finalToken.access);

      navigation.navigate("homeScreen");
      setLoading(false);
    } catch (error) {
      console.error(error);
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
          <Image source={Logo} style={styles.logocontainer} />
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
        <BottomText text={"¿Contraseña Olvidada?"} style={styles.text} />
        <ButtonForInit
          text={Loading ? "Cargando..." : "INGRESAR"}
          onPress={sendForm}
        />
        <BottomText
          navigation={navigation}
          text={"¿Aún no tienes una cuenta?"}
          nameScreen={"registerScreen"}
        />
      </View>
    </View>
  );
}
