import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function ButtonsForInit({text, onPress=null}) {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress} 
        style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
