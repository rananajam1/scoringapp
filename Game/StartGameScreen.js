import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Card from './Card'
import Input from './Input';
import NumberContainer from './NumberContainer';

function StartGameScreen(props) {
    const [enteredNumber, setEnteredNumber] = useState('');
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const confirmInputHandler = () => {
        setConfirmed(true)
        setSelectedNumber(parseInt(enteredNumber))
        setEnteredNumber('')
        Keyboard.dismiss()
    }

    const resetInputHandler = () => {
        setEnteredNumber('')
        setConfirmed(false)
    }

    const numberInputHandler = inputText => {
        setEnteredNumber(inputText.replace(/[^0-9]/g, ''))
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput =
            <Card  >
                <Text>You have Selected</Text>
                <NumberContainer>
                    <Text>
                        {selectedNumber}
                    </Text>
                </NumberContainer>
                <Button title='START GAME' onPress={() => { props.onStartGame(selectedNumber) }} color="blue" />
            </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen} >
                <Text style={styles.title} >
                    The Game Screen
            </Text>
                <Card style={styles.inputContainer}>
                    <Text >Select A Number</Text>
                    <Input
                        placeholderTitle="Enter Number"
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="phone-pad"
                        maxLength={2}
                        onTextAdd={numberInputHandler}
                        value={enteredNumber}
                    />
                    <View style={styles.buttonContainer} >
                        <Button title='Reset' onPress={resetInputHandler} style={{ width: 50 }} color="#c717fc" />
                        <Button title='Confirm' onPress={confirmInputHandler} color="green" style={{ width: 50 }} />
                    </View>
                </Card>
                <Card>
                    {confirmedOutput}
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        alignItems: "center",
        justifyContent: 'center'
    },
    title: {
        justifyContent: 'center',
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    input: {
        borderColor: "black",
        borderWidth: 0.5,
        width: "70%",
        borderRadius: 16
    }
});

export default StartGameScreen;