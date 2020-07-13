import React from 'react';
import { View, StyleSheet } from 'react-native';

function Card(props) {
    return (
        <View style={{...styles.card,...props.style}} >
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{width:1, height:2},
        shadowRadius:6,
        backgroundColor:'white',
        elevation:15,
        borderRadius:10
    },
})
export default Card;