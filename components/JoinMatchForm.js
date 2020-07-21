import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, Picker, Alert, Image} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/signup';
import { useSelector, useDispatch } from 'react-redux';
import {checkInputs} from '../src/utilities';
import ImagePicker from 'react-native-image-picker';
import { AddNewPlayer} from '../redux/js/actions/TeamActions/TeamActions';
import { JoinMatch } from '../redux/js/actions/MatchActions/MatchActions';

function JoinMatchForm(props) {

    const [id, setId] = useState('');
    let match = useSelector(state => state.token.myMatches)

    let dispatch = useDispatch();

    const handleSubmit = async () => {
        let Obj = {match_id: id};
        let check = checkInputs([id]);
    
        if (check) {
          console.log('Join Match Form');
          let response = await dispatch(JoinMatch(Obj));

          if (response.type === 'MATCH_SUCCESS') {
            if(response.data.msg)
            {
              Alert.alert('ALERT', response.data.msg)
            }
            else{
              console.log({Response: response.data})
              console.log({StateMatch: match})
              Alert.alert('Match', `Title: ${response.data.teamA.name} VS ${response.data.teamB.name}
              \nVenue: ${response.data.venue.name} \nBid: ${response.data.bid} \nPrize: ${response.data.prize}`, [{text: 'Toss'}]);
            }
          } else {
            {
              Alert.alert('Match', 'Error', [{text: 'Start'}]);
            }
          }
        } else {
          Alert.alert('Incomplete Fields', '', [{text: 'Ok'}]);
        }
}  

    return (
        <View style={styles.container}>
            <ScrollView style={{flex: 1}}>
                <Text style={{fontWeight: '800', fontSize: 25, color: '#01438D', textAlign: 'center', marginTop: 20}}>JOIN MATCH</Text>
                
                <Text style={{fontSize: 20, marginTop: 200, marginBottom: 50,textAlign:'center'}}>Play Top ranked sites to Rank Up </Text>
                <TextInput 
                    style={styles.inputBox} 
                    placeholder="Search by Match ID" 
                    placeholderTextColor="white"
                    value={id}
                    autoCapitalize = 'none'
                    onChangeText={(text) => setId(text)}/>
                 
                <TouchableOpacity style={{justifyContent:'center', alignItems: 'center'}} onPress = {() =>{handleSubmit()}}>
                    <Text style={styles.signupButton}>  
                        Join
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default JoinMatchForm;