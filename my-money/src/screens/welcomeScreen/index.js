import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, ActivityIndicator} from 'react-native';

const Logo = require("../../../assets/icons/LogoMyMoney.png");

export default function WelcomeScreen({navigation}) {
  const [change, setChange] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChange(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (change) {
      navigation.replace('sliderScreen');
    }
  }, [change, navigation]);

  return (
    <View style={styles.containerName}>
      <Image source={Logo} />
      <ActivityIndicator size="large" color="#AD6485" marginVertical={10} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerName: {
    alignItems: 'center',
    marginVertical: 300,
  },
});
