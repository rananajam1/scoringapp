import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function NumberContainer(props) {
    return (
        <View style={styles.container} >
            <Text>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:'magenta',
        padding:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10
    },
    number:{
        color:"blue"
    }
})
export default NumberContainer;