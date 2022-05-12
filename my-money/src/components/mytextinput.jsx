import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const MyTextInput = ({label="", place="", security=false, value="", setValue=null, icon, onIconclick }) => {

const changeText = text => setValue(text);

return (
<View style={styles.row}>    
    <View style={styles.textContainer}>
        <Text style={styles.textLabel}>
        {label}
        </Text>
        
        <TextInput
        type="Text"
        placeholder={place}
        style={styles.textInput}
        secureTextEntry={security}
        value={value}
        onChangeText={changeText}
        placeholderTextColor={'#808B96'}
        />
    </View>
    {icon && <Icon 
        style={styles.iconEye}
        size={26} 
        color={'#2f8f94'}
        name={icon}
        onPress={onIconclick}    
    />
    }
</View>
)
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    textInput: {
        flex: 1,
        fontSize: 16,
        height: 30,
        borderColor: '#39a851',
        borderWidth: 1,
        borderRadius: 25, 
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
  //      justifyContent: 'center',
        padding: 10,
 //       marginHorizontal: 10,
    },

    textContainer: {
        flex: 1,
//        backgroundColor: 'yellow',
    },

    textLabel: {
        fontSize: 16,
        fontStyle: 'bold',
        fontFamily: 'Arial',
        color: '#566573',
    },

    iconEye: {
        position: 'relative',
        marginVertical: 25,
        fontSize: 20,
    },
})

export default MyTextInput;