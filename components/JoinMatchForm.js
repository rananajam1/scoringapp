import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, Picker, Alert, Image} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/signup';
import { useSelector, useDispatch } from 'react-redux';
import {checkInputs} from '../src/utilities';
import ImagePicker from 'react-native-image-picker';
import { AddNewPlayer } from '../redux/js/actions/TeamActions/TeamActions';

function JoinMatchForm(props) {

    const [id, setId] = useState('');

    let dispatch = useDispatch();

    const handleSubmit = async () => {
            let check = checkInputs([id]);
            
            if(check) {
            //   console.log('Join Match Form')
            //   let response = await dispatch(JoinMatch(id));
            //   if(response.type === 'MATCH_SUCCESS')
            //   {
            //     console.log({Response: response.data.data})
            //     {() => Alert.alert('Match Scheduled')};
            //   }
            //   else{
            //     {() => Alert.alert('Match Failed')}
            //   }
            }
            else{
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