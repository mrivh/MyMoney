import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function BottomText({navigation, text, nameScreen}) {
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate(nameScreen)}
      style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
