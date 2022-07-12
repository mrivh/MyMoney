import React from 'react';
import {View, Text} from 'react-native';
import LogoSVG from '../../../assets/icons/logo.svg';
import Icons from '../../components/icons';
import InputComponent from '../../components/InputComponent';
import EmailSVG from '../../../assets/icons/email.svg';
import PasswordSVG from '../../../assets/icons/password.svg';
import ButtonForInit from '../../components/ButtonForInit';
import BottomText from '../../components/BottomText';
import styles from './styles';

export default function LoginScreen(navigation) {
  return (
    <View style={styles.container}>
      <View style={styles.logoscontainer}>
        <View style={styles.logosdireccion}>
          <Icons IconProp={LogoSVG} style={styles.logocontainer} />
        </View>
      </View>
      <View style={styles.formcontainer}>
        <Text style={styles.text}>REGISTRO</Text>
        <InputComponent 
          title={'Nombre de usuario'} 
          Icon={EmailSVG} 
          visibleText={true}
          />
        <InputComponent 
          title={'E-mail'} 
          Icon={EmailSVG} 
          visibleText={true}
          />
        <InputComponent
          title={'Contraseña'}
          Icon={PasswordSVG}
          visibleIcon={true}
        />
        <InputComponent
          title={'Repetir contraseña'}
          Icon={PasswordSVG}
          visibleIcon={true}
        />
        <BottomText text={'¿Contraseña Olvidada?'} />
        <ButtonForInit text="INGRESAR"/>
        <BottomText 
          navigation={navigation}
          text={'¿Ya tienes una cuenta?'} 
          nameScreen={'loginScreen'}/>
      </View>
    </View>
  );
}
