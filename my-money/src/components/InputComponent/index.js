import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icons from '../icons';
import styles from './styles';
import VisibleSVG from '../../../assets/icons/visibility.svg';
import TriangleSVG from '../../../assets/icons/triangulo.svg';
import WarningSVG from '../../../assets/icons/warning.svg';
import Visible2SVG from '../../../assets/icons/visibility2.svg';



const getText = title => {
  switch (title) {
    case 'Nombre de usuario':
      return 'Ingrese nombre de usuario';
    case 'E-mail':
      return 'Ingrese un correo válido';
    case 'Contraseña':
      return 'Contraseña incorrecta';
    case 'Repetir contraseña':
      return 'Contraseña incorrecta';
  }
};

const Alert = ({title}) => {
  return (
    <View style={styles.alertContainer}>
      <View style={styles.rectangulo}>
        <View style={styles.row}>
          <Icons IconProp={WarningSVG} style={styles.warning} />
          <Text style={styles.textAlert}>{getText(title)}</Text>
        </View>
      </View>
      <Icons IconProp={TriangleSVG} style={styles.triangulo} />
    </View>
  );
};

export default function InputComponent({
  title,
  Icon,
  visibleIcon = false,
  visibleAlert = false,
  value="",
  setValue=null
}) {
  const [passVisible, setPassVisible] = useState(true);
  const changePassVisible = () => setPassVisible(!passVisible);
  const changeText = text => setValue(text);
  return (
    <View style={styles.containerInput}>
      {visibleAlert ? <Alert title={title} /> : null}
      <View style={styles.iconInput}>
        <Icons IconProp={Icon} style={styles.icon} />
        <TextInput
          placeholderTextColor='#C4C4C4'
          placeholder={title}
          style={styles.input}
          secureTextEntry={title === ('Contraseña') || title === ('Repetir contraseña') ?passVisible : false}
          value={value}
          onChangeText={changeText}
        />
      </View>
      {visibleIcon ? (
        <TouchableOpacity style={styles.visible} onPress={changePassVisible}>
          <Icons
            IconProp={!passVisible ? Visible2SVG : VisibleSVG}
            style={null}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
