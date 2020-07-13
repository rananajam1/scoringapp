import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

function Input(props) {
    return (
            <TextInput 
            blurOnSubmit 
            autoCapitalize={props.autoCapitalize} 
            autoCorrect={props.autoCorrect}
            keyboardType={props.keyboardType} 
            maxLength={props.maxLength} 
            style={{...styles.input}} 
            placeholder={props.placeholderTitle} 
            onChangeText = {props.onTextAdd}
            value={props.value}
            />
    );
}
const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor:"black"
    }
});
export default Input;