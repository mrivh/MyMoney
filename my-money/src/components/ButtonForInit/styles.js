import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('screen').width - 84,
    height: 45,
    backgroundColor: '#07D9D9',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 42,
    marginTop: 50,
  },
  text: {
    color: '#00296A',
    fontSize: 16,
  },
});

export default styles;
