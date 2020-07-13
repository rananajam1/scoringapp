import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import NumberContainer from './NumberContainer';
import Card from './Card';

const RandomNumberGenerator = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min

    if (randomNumber === exclude) {
        RandomNumberGenerator(min, max, exclude)
    }
    else {
        return randomNumber;
    }
}


function GameScreen(props) {
    const [currentGuess, setCurrentGuess] = useState(RandomNumberGenerator(1, 100, props.userChoice));
    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    const nextGuessHandler = direction =>{
        if((direction === 'lower' && currentGuess < props.userChoice)||
        (direction === 'greater' && currentGuess > props.userChoice)){
            Alert.alert("Don't Lie...","You remember your choice!")
        }
        if(direction === 'lower'){
            currentHigh.current = currentGuess
        }
        else{
            currentLow.current = currentGuess
        }
        let nextNumber = RandomNumberGenerator(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
    }

    return (
        <View style={styles.screen}>
            <Text>
                Opponent's Guess
                </Text>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button style={styles.button} onPress={nextGuessHandler.bind(this, "lower")} color="green" title="LOWER" />
                <Button style={styles.button} onPress={nextGuessHandler.bind(this, "greater")} title="GREATER" />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        flex: 1,
        alignItems: 'center'
    },
    buttonContainer: {
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 300,
        maxWidth: '80%'
    },
    button: {
        width: 40,
        flexWrap: 'wrap'
    }
})

export default GameScreen;