import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, Picker, Alert, Image} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/signup';
import { useSelector, useDispatch } from 'react-redux';
import {checkInputs} from '../src/utilities';
import ImagePicker from 'react-native-image-picker';
import { CreateTeam } from '../redux/js/actions/TeamActions/TeamActions';

function TeamForm(props) {

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [avatar, setAvatar] = useState('https://www.kindpng.com/picc/m/474-4746097_logo-of-cricket-team-hd-png-download.png');

    let dispatch = useDispatch();

    const handleSubmit = async () => {
            let check = checkInputs([city, category, name, avatar]);
            let TeamObject = {
              name: name,
              category: category,
              city: city, 
              avatar: avatar,
              description: description
            };
            if(check) {
              console.log('Team Form')
              let response = await dispatch(CreateTeam(TeamObject));
              if(response.type === 'TEAM_SUCCESS')
              {
                console.log({Response: response})
                Alert.alert('Team Created');
              }
              else{
                Alert.alert('Team Failed')
              }
            }
            else{
                Alert.alert('Incomplete Fields', '', [{text: 'Ok'}]);
            }
}   
        
        chooseImage = () => {
          let options = {
            title: 'Select Image',
            customButtons: [
              { name: 'customOptionKey', title: 'Remove Image' },
            ],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              setAvatar('https://www.kindpng.com/picc/m/474-4746097_logo-of-cricket-team-hd-png-download.png')
            } else {
              setAvatar(response.uri);
            }
          });
        }
      
        launchCamera = () => {
          let options = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          ImagePicker.launchCamera(options, (response) => {
            console.log('Response = ', response);
      
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
              alert(response.customButton);
            } else {
              setAvatar(response.uri);
            }
          });
      
        }
      
        renderFileUri = () => {
          if (avatar) {
            return <Image
              source={{ uri: avatar }}
              style={{height: 150, width: 150, borderRadius: 150/2}}
            />
          } else {
            return <Image
              source={require('../images/avatar_team.png')}
              style={{height:150, width:150, borderRadius: 150/2}}
            />
          }
        }


    return (
        <View style={styles.container}>
            <ScrollView style={{flex: 1}}>
                <Text style={{fontWeight: '800', fontSize: 25, color: '#01438D', textAlign: 'center', marginTop: 20}}>MY TEAM</Text>
                <TouchableOpacity onPress = {() =>{chooseImage()}} style={{margin: 20,alignItems:'center', justifyContent:'center'}}>
                    {renderFileUri()}
                    <Text style={{backgroundColor: '#01438D', color:'white' ,padding: 5}}>Edit</Text>
                </TouchableOpacity>    
                <Text style={{fontSize: 20, margin: 20, marginLeft: 0}}>Complete Your Team Profile</Text>
                <TextInput 
                    style={styles.inputBox} 
                    placeholder="Name" 
                    placeholderTextColor="white"
                    value={name}
                    autoCapitalize = 'none'
                    type="name"
                    onChangeText={(text) => setName(text)}/>
                <TextInput 
                    style={styles.inputBox} 
                    placeholder="City" 
                    placeholderTextColor="white"
                    value={city}
                    autoCapitalize = 'none'
                    onChangeText={(text) => setCity(text)}/>
                <Picker
                    style={{margin: 5, marginTop: -10 ,borderColor: '#507E14'}}
                    selectedValue={category}
                    onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
                    <Picker.Item label="Select" value="" />
                    <Picker.Item label="Club" value="Club" />
                    <Picker.Item label="University" value="University" />
                    <Picker.Item label="College" value="College" />
                    <Picker.Item label="Private" value="Private" /> 
                </Picker><Text style={{textAlign: 'center', color: '#507E14'}}>(Select Team Category)</Text>
                <TextInput 
                    style={styles.inputBox} 
                    placeholder="Description" 
                    placeholderTextColor="white"
                    autoCapitalize = 'none'
                    value={description}
                    onChangeText={(text) => setDescription(text)}/>
                 
                <TouchableOpacity style={{justifyContent:'center', alignItems: 'center'}} onPress = {() =>{handleSubmit()}}>
                    <Text style={styles.signupButton}>  
                        Create
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default TeamForm;