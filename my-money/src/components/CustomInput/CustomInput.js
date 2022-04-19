import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomImput = ({value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5, 

        paddingHorizontal: 10,
        marginVertical: 8,
    },
    input: {},
});

export default CustomImput;