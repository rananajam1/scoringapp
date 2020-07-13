import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AlbumsHeader(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.headerText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height:60,
        paddingTop: 10,
        justifyContent: 'center',
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.9,
        elevation:2
    },
    myState: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    },
    text: {
        color: '#4f603c'
    }
})

export default AlbumsHeader;