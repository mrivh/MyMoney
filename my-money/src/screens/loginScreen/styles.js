import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  logocontainer: {marginTop: 100},
  container: {width: '100%', height: '100%',},
  formcontainer: {
    width: '100%',
    backgroundColor: '#00296A',
    height: Dimensions.get('screen').height,
    marginTop: 100,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 30,
    color: '#07D9D9',
    marginBottom: 30,
  },
  logoscontainer: {width: '100%', height: 150},
  logosdireccion: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default styles;
