import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.input}
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            
            secureTextEntry={secureTextEntry} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        width: '85%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5, 

        paddingHorizontal: 6,
        marginVertical: 8,
    },
    input: {
        height: 20,
        width: '100%',
    },
});

export default CustomInput;