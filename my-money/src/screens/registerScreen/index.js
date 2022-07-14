import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import LogoSVG from '../../../assets/icons/logo.svg';
import Icons from '../../components/icons';
import InputComponent from '../../components/InputComponent';
import UserSVG from '../../../assets/icons/userIcon.svg'
import EmailSVG from '../../../assets/icons/email.svg';
import PasswordSVG from '../../../assets/icons/password.svg';
import ButtonForInit from '../../components/ButtonForInit';
import BottomText from '../../components/BottomText';
import { passwordValidation, userValidation } from "../../../utils/validations";
import styles from './styles';
import axios from "axios";


export default function RegisterScreen({navigation}) {
  const [User, setUser] = useState("");  
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfPassword, setConfPassword] = useState("");
  const [Loading, setLoading] = useState(false);

const sendForm = () => {
  if (User === ""){
    return alert("Ingresar un nombre de usuario");
  }  
  if (Email === ""){
    return alert("Ingresa un correo electrónico");
  }
  if (!passwordValidation.test(Password)){
    return alert("Ingrese una contraseña válida");
  }
  if (ConfPassword != Password) {
    return alert("Verificar contraseña");
  }
  sendUser();
};

const sendUser = async () => {
  try {
    setLoading(true);
    const response = await axios.post(
      "http://secret-garden-33326.herokuapp.com/register/",
      { email: Email, password: Password, username: User }
    );
    alert("Registro exitoso")
    console.log(response);
    setLoading(false);
  }catch (error){
    setLoading(false);
    console.error(error);
  }
};
  return (
    
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logoscontainer}>
          <View style={styles.logosdireccion}>
            <Icons IconProp={LogoSVG} style={styles.logocontainer} />
          </View>
        </View>
        <View style={styles.formcontainer}>
          <Text style={styles.text}>REGISTRO</Text>
          <InputComponent 
            title={'Nombre de usuario'} 
            Icon={UserSVG} 
            visibleText={true}
            value={User}
            setValue={setUser}  
            />
          <InputComponent 
            title={'E-mail'} 
            Icon={EmailSVG} 
            visibleText={true}
            value={Email}
            setValue={setEmail}  
            />
          <InputComponent
            title={'Contraseña'}
            Icon={PasswordSVG}
            visibleIcon={true}
            value={Password}
            setValue={setPassword}  
          />
          <InputComponent
            title={'Repetir contraseña'}
            Icon={PasswordSVG}
            visibleIcon={true}
            value={ConfPassword}
            setValue={setConfPassword}  
          />
          <BottomText 
            text={'¿Contraseña Olvidada?'} 
            onPress={sendForm}
            />
          <ButtonForInit 
            text={Loading ? "Cargando...":"REGISTRAR"}
            onPress={sendForm}
          />
          <BottomText 
            navigation={navigation}
            text={'¿Ya tienes una cuenta?'} 
            nameScreen={'loginScreen'}/>
        </View>
      </ScrollView>
    </View>
    
  );
}
