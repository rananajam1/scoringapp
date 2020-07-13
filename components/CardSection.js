import React from 'react';
import { View,StyleSheet } from 'react-native';

function CardSection(props) {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle:{
        borderWidth:2,
        borderRadius:2,
        backgroundColor:"white",
        shadowColor:'#000',
        borderColor:'black'
    }
})
export default CardSection;