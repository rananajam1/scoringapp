import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native';

export default function Input(props){
  return (
    <TextInput
      blurOnSubmit
      autoCapitalize={props.autoCapitalize}
      autoCorrect={props.autoCorrect}
      keyboardType={props.keyboardType}
      maxLength={props.maxLength}
      style={{...styles.input}}
      placeholder={props.placeholderTitle}
      onChangeText={props.onTextAdd}
      value={props.value}
      textContentType={props.type}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export const checkInputs = array => {
  let check = array.filter(inputs => inputs !== '');
  if (check.length === array.length) return true;
  else return false;
};
