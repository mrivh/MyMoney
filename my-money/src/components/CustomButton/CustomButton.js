import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
    return (
        <Pressable 
        onPress={onPress} 
        style={[styles.container, styles[`container_${type}`]]}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        
        padding: 10,
        marginVertical: 5,
        
        alignItems: 'center',
        borderRadius: 5,
    },

container_PRIMARY: {
    backgroundColor: '#138D75',
},

container_SECONDARY: {
    borderColor: '#138D75',
    borderWidth: 2,
},  

container_TERTIARY: {},

    text: {
        fontWeight: 'normal',
        color: '#ffffff',
    },

    text_SECONDARY: {
        color: '#138D75',
    },

    text_TERTIARY: {
        color: '#b9b9b9',
    },
});

export default CustomButton;