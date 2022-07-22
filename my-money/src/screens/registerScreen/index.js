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

const initialState = {
  username: "",
  email: "",
  password: "",
};

export default function RegisterScreen({navigation}) {
  const [user, setUser] = useState(initialState);  
  const [ConfPassword, setConfPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ username: false, email: false, password: false });

const sendForm = () => {
  let next = true;
  let newErrors = errors;
  for(let property in user){
    if(user[property]==="" && (ConfPassword != Password)){
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
    setLoading(true);
    const response = await axios.post(
      "http://secret-garden-33326.herokuapp.com/register/", user
    );
    alert("Registro exitoso")
    console.log(response);
    setLoading(false);
  }catch (error){
    setLoading(false);
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
            visibleAlert={errors.username}
            visibleText={true}
            value={user.username}
            setValue={(text) => changeUserFields("username", text)}  
            />
          <InputComponent 
            title={'E-mail'} 
            Icon={EmailSVG} 
            visibleAlert={errors.email}
            visibleText={true}
            value={user.email}
            setValue={(text) => changeUserFields("email", text)}  
            />
          <InputComponent
            title={'Contraseña'}
            Icon={PasswordSVG}
            visibleAlert={errors.password}
            visibleIcon={true}
            value={user.password}
            setValue={(text) => changeUserFields("password", text)}  
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