import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icons from '../icons';

export default function ButtonsForInit({text}) {
  return (
    <View>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.text1}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
