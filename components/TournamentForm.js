import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Picker, Alert, Image} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { styles } from '../styles/signup';
import { useSelector, useDispatch } from 'react-redux';
import {checkInputs} from '../src/utilities';
import ImagePicker from 'react-native-image-picker';
import { CreateTeam } from '../redux/js/actions/TeamActions/TeamActions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { CreateVenue } from '../redux/js/actions/VenueActions/VenueActions';

function TournamentForm(props) {

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [fee, setFee] = useState('');
    const [avatar, setAvatar] = useState('https://static.vecteezy.com/system/resources/thumbnails/000/427/012/small/Cricket_Stadium_Vector.jpg');

    let dispatch = useDispatch();

    const handleSubmit = async () => {
            let check = checkInputs([city, fee , name, avatar]);
            let VenueObject = {
              name: name,
              city: city, 
              avatar: avatar,
              fee: fee,
            };
            if(check) {
              console.log('venue Form')
              let response = await dispatch(CreateVenue(VenueObject));
              if(response.type === 'VENUE_SUCCESS')
              {
                console.log({Response: response})
                Alert.alert('venue Created');
              }
              else{
                Alert.alert('venue Failed')
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
              setAvatar('https://static.vecteezy.com/system/resources/thumbnails/000/427/012/small/Cricket_Stadium_Vector.jpg')
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
              style={{height: 200, width: 350}}
            />
          } else {
            return <Image
              source={require('../images/avatar_team.png')}
              style={{height:150, width:150, borderRadius: 150/2}}
            />
          }
        }


    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <KeyboardAwareScrollView style={{flex: 1}}>
                <Text style={{fontWeight: '800', fontSize: 25, color: '#01438D', textAlign: 'center', marginTop: 20}}>ADD TOURNMENT</Text>
                <TouchableOpacity onPress = {() =>{chooseImage()}} style={{margin: 20,alignItems:'center', justifyContent:'center'}}>
                    {renderFileUri()}
                    <Text style={{backgroundColor: '#01438D', color:'white' ,padding: 5}}>Edit</Text>
                </TouchableOpacity>    
                <Text style={{fontSize: 20, margin: 20, textAlign: 'center'}}>Complete Your Tournament Fileds</Text>
                <View style={{justifyContent: "center", alignItems: 'center', marginHorizontal: 30}}>
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
                 <TextInput 
                    style={styles.inputBox} 
                    placeholder="Entry Fee" 
                    placeholderTextColor="white"
                    autoCapitalize = 'none'
                    value={fee}
                    onChangeText={(text) => setFee(text)}/>
                 
                <TouchableOpacity style={{justifyContent:'center', alignItems: 'center', margin: 40}} onPress = {() =>{handleSubmit()}}>
                    <Text style={styles.signupButton}>  
                       + Create
                    </Text>
                </TouchableOpacity>

                </View>
                
            </KeyboardAwareScrollView>
        </View>
    );
}

export default TournamentForm;