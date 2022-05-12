import React from 'react';
import {Text, StyleSheet, TouchableOpacity } from 'react-native';

const MyButton = ({text, type="PRIMARY", onPress=null }) => {
    return (
        <TouchableOpacity style={[styles.container, styles[`container_${type}`]]}
        onPress={onPress}>
            <Text style={[styles.text, styles[`text_${type}`]]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    //    width: '90%',
        height: 40,
        borderRadius: 25,

        padding: 5,
        marginVertical: 3,
     //   marginTop: '20',
    },

container_PRIMARY: {
    backgroundColor: '#0489c2',
},

container_SECONDARY: {
    borderColor: '#138D75',
    borderWidth: 2,
},  

container_TERTIARY: {},

    text: {
        fontWeight: 'normal',
        color: '#ffffff',
        fontSize: '16',
    },  

    text_SECONDARY: {
        color: '#138D75',
    },

    text_TERTIARY: {
        color: '#6D8299',
        fontFamily: 'Arial'
    },
});

export default MyButton;