import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, Picker, Alert, Image} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/signup';
import { useSelector, useDispatch } from 'react-redux';
import {checkInputs} from '../src/utilities';
import ImagePicker from 'react-native-image-picker';
import { AddNewPlayer } from '../redux/js/actions/TeamActions/TeamActions';
import { FindPlayer } from '../redux/js/actions/PlayerActions/PlayerActions';
import Header from '../src/screens/Header'

function Toss(props) {
let team1 = 'Islamabad United', team2="Karachi Kings";

let [todecide, setTodecide] = useState('')
let [winner, setWinner] = useState('')
let [decision, setDecision] = useState('')
let final;

useEffect(() => {
    toSelect(team1, team2);
    final = winner
})

const toss = (team, choice) => {
    let result = '';
    let coin = Math.floor((Math.random() * 2) + 1);
    if(team === team1)
    {
        if(coin === choice)
        {
           result = team1;
        }
        else
        {
            result = team2;
        }
    }
    else 
    {
        if(coin === choice)
        {
           result = team2;
        }
        else
        {
            result = team1;
        }
    }
    console.log({toss_winner: result})
    setWinner(result);
    return result;
}

const toSelect = (team1, team2) => {
    let result = '';
    let coin = Math.floor((Math.random() * 2) + 1);
    if(coin === 1)
    {
        result = team1;
    }
    else
    {
        result = team2;
    }
    setTodecide(result);
    return result;
}

    const handleSubmit = async () => {
        if(decision === '')
        {
            Alert.alert('Match Start error','Desion has not been taken yet')
        }
        else {
            props.navigation.navigate('Scoring')
        }
}  

const decide = (value) => {
    setDecision(value);
    Alert.alert('Toss', `${winner} have won the toss & decided to ${value}`)
}

    return (
        <View style={styles.container}>
            <ScrollView style={{flex: 1}}>
                <Text style={{fontWeight: '800', fontSize: 25, color: '#01438D', textAlign: 'center', marginTop: 40}}>Toss</Text>
                
                <Text style={{fontSize: 20, marginTop: 50, marginBottom: 50,textAlign:'center'}}>Islamabad United VS Karchi Kings</Text>
                <Text style={{fontSize: 20, marginTop: 50, marginBottom: 50,textAlign:'center'}}>{todecide} to Chose the Coin</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity style={{justifyContent:'center', alignItems: 'center', padding: 10}} onPress = {() =>{toss(todecide, 1)}}>
                    <Text style={styles.signupButton}>  
                        Heads
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent:'center', alignItems: 'center'}} onPress = {() =>{toss(todecide, 2)}}>
                    <Text style={styles.signupButton}>  
                        Tails
                    </Text>
                    </TouchableOpacity>
                </View>
                {(winner === team1 ||  winner === team2) && 
                <View>
                    <Text style={{fontWeight: '800', fontSize: 25, color: '#01438D', textAlign: 'center', marginTop: 40}}>Result</Text>  
                <View>
                    <Text style={{fontSize: 20, marginTop: 10, marginBottom: 10,textAlign:'center'}}>Congratulations !!!</Text>
                    <Text style={{fontSize: 20, marginTop: 10, marginBottom: 10,textAlign:'center'}}>{winner} have won the Toss</Text>
                </View> 
                   
                <View>
                <Text style={{fontWeight: '800', fontSize: 25, color: '#01438D', textAlign: 'center', marginTop: 40}}>Decision</Text>
                <Text style={{fontSize: 20, marginTop: 50, marginBottom: 10,textAlign:'center'}}>{winner}'s Decision</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        {console.log({Winner: winner})}
                        <TouchableOpacity style={{justifyContent:'center', alignItems: 'center', padding: 10}} 
                        onPress = {() => decide('bat')}>
                        <Text style={styles.signupButton}>  
                            Bat
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{justifyContent:'center', alignItems: 'center'}} 
                        onPress = {() => decide('bowl')}>
                        <Text style={styles.signupButton}>  
                            Bowl
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{justifyContent:'center', alignItems: 'center'}} 
                        onPress = {() => handleSubmit()}>
                        <Text style={styles.signupButton}>  
                            Start Match
                        </Text>
                        </TouchableOpacity>
                </View> 
                </View>
                }        
                {/* <TextInput 
                    style={styles.inputBox} 
                    placeholder="Search by Player ID" 
                    placeholderTextColor="white"
                    value={id}
                    autoCapitalize = 'none'
                    onChangeText={(text) => setId(text)}/>
                <TouchableOpacity style={{justifyContent:'center', alignItems: 'center'}} onPress = {() =>{getPlayer()}}>
                <Text>  
                    Get Player
                </Text>
                </TouchableOpacity>
                 
                <TouchableOpacity style={{justifyContent:'center', alignItems: 'center'}} onPress = {() =>{handleSubmit()}}>
                    <Text style={styles.signupButton}>  
                        Invite
                    </Text>
                </TouchableOpacity> */}
            </ScrollView>
        </View>
    );
}

export default Toss;