import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, Alert, Image, Picker} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../styles/signup';
import { useSelector, useDispatch } from 'react-redux';
import {checkInputs} from '../src/utilities';
import { CreatePlayer } from '../redux/js/actions/PlayerActions/PlayerActions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

function PlayerForm(props) {

    const [cric_name, setCric_name] = useState('');
    const [player_type, setPlayer_type] = useState('');
    const [batting_style, setBatting_style] = useState('');
    const [bowling_style, setBowling_style] = useState('');
    const [batting_technique, setBatting_technique] = useState('');
    const avatar = useSelector(state => state.token.profile.avatar)

    let dispatch = useDispatch();

    const handleSubmit = async () => {
            let check = checkInputs([cric_name, player_type]);
            let PlayerObject = {
              cric_name: cric_name,
              player_type: player_type,
              batting_style: batting_style,
              bowling_style: bowling_style, 
              batting_technique: batting_technique, 
            };
            if(check) {
              let response = await dispatch(CreatePlayer(PlayerObject));
              console.log({PlayerResponse : response.data.data})
              if(response.type === 'PLAYER_SUCCESS')
              {
                Alert.alert('Player Created');
              }
              else{
                Alert.alert('Player Failed')
              }
            }
            else{
                Alert.alert('Incomplete Fields', '', [{text: 'Ok'}]);
                dispatch(loading(false));
            }
        }
        

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView behavior="position" style={{flex:1}} >
                <Text style={{fontWeight: '800', fontSize: 25, color: '#01438D', marginLeft: 90, margin: 30}}>PLAYER CREATION</Text>
                <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Image source={{uri: avatar}} style={{height: 100, width: 100, borderRadius: 100/2}}/>
                </View>    
                <Text style={{fontSize: 20, marginLeft: 0, marginTop: 20, marginBottom: 10}}>Create your player</Text>
                <TextInput 
                    style={styles.inputBox} 
                    placeholder="Commentary Name" 
                    placeholderTextColor="white"
                    value={cric_name}
                    autoCapitalize = 'none'
                    type="name"
                    onChangeText={(text) => setCric_name(text)}/><Text style={{textAlign: 'center', color: '#507E14'}}>(It should be a Single name e.g "Akram")</Text>
                <Picker
                    style={{borderWidth: 1, borderRadius: 20, margin: 10, borderColor: '#507E14'}}
                    selectedValue={player_type}
                    onValueChange={(itemValue, itemIndex) => setPlayer_type(itemValue)}>
                    <Picker.Item label="Select" value="" />
                    <Picker.Item label="Batsman" value="Batsman" />
                    <Picker.Item label="Bowler" value="Bowler" />
                    <Picker.Item label="All-Rounder" value="All-Rounder" />
                    <Picker.Item label="Wicket-Keeper Batsman" value="WicketKeeper_Batsman" /> 
                </Picker><Text style={{textAlign: 'center', color: '#507E14'}}>(Select Your Player Type)</Text>
                {player_type === 'Batsman' || player_type === 'WicketKeeper_Batsman'
                ? 
                <View>
                    <Picker
                        style={{borderWidth: 1, borderRadius: 20, margin: 10, borderColor: '#507E14'}}
                        selectedValue={batting_style}
                        onValueChange={(itemValue, itemIndex) => setBatting_style(itemValue)}>
                        <Picker.Item label="Select" value="" />
                        <Picker.Item label="RH Top Order" value="RHB-T" />
                        <Picker.Item label="RH Middle Order" value="RHB-M" />
                        <Picker.Item label="LH Top Order" value="LHB-T" />
                        <Picker.Item label="LH Middle Order" value="LHB-M" />
                    </Picker><Text style={{textAlign: 'center', color: '#507E14'}}>(Select Your Batting Style)</Text>
                    <Picker
                        style={{borderWidth: 1, borderRadius: 20, margin: 10, borderColor: '#507E14'}}
                        selectedValue={batting_technique}
                        onValueChange={(itemValue, itemIndex) => setBatting_technique(itemValue)}>
                        <Picker.Item label="Select" value="" />
                        <Picker.Item label="Aggresive" value="Aggressive" />
                        <Picker.Item label="Defensive" value="Defensive" />
                        <Picker.Item label="Balanced" value="Balanced" />
                    </Picker><Text style={{textAlign: 'center', color: '#507E14'}}>(Select Your Player Preference)</Text>
                </View>
                
                : player_type === 'Bowler'
                ? <View>
                    <Picker
                        style={{borderWidth: 1, borderRadius: 20, margin: 10, borderColor: '#507E14'}}
                        selectedValue={bowling_style}
                        onValueChange={(itemValue, itemIndex) => setBowling_style(itemValue)}>
                        <Picker.Item label="Select" value="" />
                        <Picker.Item label="Right Arm Medium Fast" value="RMF" />
                        <Picker.Item label="Right Arm Leg Spin" value="RLS" />
                        <Picker.Item label="Right Arm Off Spin" value="ROS" />
                        <Picker.Item label="Left Arm Medium Fast" value="LMF" /> 
                        <Picker.Item label="Left Arm Orthodox" value="LO" /> 
                        <Picker.Item label="Left Arm Chinaman" value="LC" /> 
                    </Picker><Text style={{textAlign: 'center', color: '#507E14'}}>(Select Your Bowling Style)</Text>
                </View>
                : player_type === 'All-Rounder'
                ?<View>
                    <Picker
                        style={{borderWidth: 1, borderRadius: 20, margin: 10, borderColor: '#507E14'}}
                        selectedValue={batting_style}
                        onValueChange={(itemValue, itemIndex) => setBatting_style(itemValue)}>
                        <Picker.Item label="Select" value="" />
                        <Picker.Item label="RH Top Order" value="RHB-T" />
                        <Picker.Item label="RH Middle Order" value="RHB-M" />
                        <Picker.Item label="LH Top Order" value="LHB-T" />
                        <Picker.Item label="LH Middle Order" value="LHB-M" />
                    </Picker><Text style={{textAlign: 'center', color: '#507E14'}}>(Select Your Batting Style)</Text>
                    <Picker
                        style={{borderWidth: 1, borderRadius: 20, margin: 10, borderColor: '#507E14'}}
                        selectedValue={batting_technique}
                        onValueChange={(itemValue, itemIndex) => setBatting_technique(itemValue)}>
                        <Picker.Item label="Select" value="" />
                        <Picker.Item label="Aggresive" value="Aggressive" />
                        <Picker.Item label="Defensive" value="Defensive" />
                        <Picker.Item label="Balanced" value="Balanced" />
                    </Picker><Text style={{textAlign: 'center', color: '#507E14'}}>(Select Your Player Preference)</Text>
                    <Picker
                        style={{borderWidth: 1, borderRadius: 20, margin: 10, borderColor: '#507E14'}}
                        selectedValue={bowling_style}
                        onValueChange={(itemValue, itemIndex) => setBowling_style(itemValue)}>
                        <Picker.Item label="Select" value="" />
                        <Picker.Item label="Right Arm Medium Fast" value="RMF" />
                        <Picker.Item label="Right Arm Leg Spin" value="RLS" />
                        <Picker.Item label="Right Arm Off Spin" value="ROS" />
                        <Picker.Item label="Left Arm Medium Fast" value="LMF" /> 
                        <Picker.Item label="Left Arm Orthodox" value="LO" /> 
                        <Picker.Item label="Left Arm Chinaman" value="LC" /> 
                    </Picker><Text style={{textAlign: 'center', color: '#507E14'}}>(Select Your Bowling Style)</Text>
                </View>

                :<View>

                </View>
                }
                 
                <TouchableOpacity style={{justifyContent:'center', alignItems: 'center', marginBottom: 20}} onPress = {() =>{handleSubmit()}}>
                    <Text style={styles.signupButton}>  
                        Create
                    </Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </View>
    );
}

export default PlayerForm;