import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Header(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.input} style={styles.text}>{props.headerText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:80,
        paddingTop: 36,
        paddingBottom: 36,
        justifyContent: 'center',
        backgroundColor: '#f7287b',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontSize:18,
        fontFamily:'Sans-Serif',
        fontStyle:'italic'
    }
})

export default Header;