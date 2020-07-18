import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, Picker, Alert, Image} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/signup';
import { useSelector, useDispatch } from 'react-redux';
import {checkInputs} from '../src/utilities';
import ImagePicker from 'react-native-image-picker';
import { AddNewPlayer } from '../redux/js/actions/TeamActions/TeamActions';
import { FindPlayer } from '../redux/js/actions/PlayerActions/PlayerActions';


function AddPlayer(props) {

    const [id, setId] = useState('');
    const [player, setPlayer] = useState('');
    
    let dispatch = useDispatch();

    getPlayer = async () => {
        console.log("Get player called")
        const obj = {
            player_id : id
        }
        let res = await dispatch(FindPlayer(obj));
        if(res.type === 'PLAYER_SUCCESS')
        {
            console.log(res.data)
            Alert.alert('Player' , `'Name : ${res.data.name} \n Type: : ${res.data.player_type}`);
        }
    }

    const handleSubmit = async () => {
            let check = checkInputs([id]);
            
            if(check) {
                const obj = {
                    player_id : id
                }
              console.log('Add Player Form')
              let response = await dispatch(AddNewPlayer(obj));
              if(response.type === 'TEAM_SUCCESS')
              {
                Alert.alert('Invitation Sent');
              }
              else{
                Alert.alert('Error',   `You have already sent an invitation to this player`)
              }
            }
            else{
                Alert.alert('Incomplete Fields', '', [{text: 'Ok'}]);
            }
}  

    return (
        <View style={styles.container}>
            <ScrollView style={{flex: 1}}>
                <Text style={{fontWeight: '800', fontSize: 25, color: '#01438D', textAlign: 'center', marginTop: 20}}>ADD PLAYER</Text>
                
                <Text style={{fontSize: 20, marginTop: 200, marginBottom: 50,textAlign:'center'}}>Add top ranked players to your side. </Text>
                <TextInput 
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
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default AddPlayer;