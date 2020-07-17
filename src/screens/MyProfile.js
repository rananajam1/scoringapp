import React, { useEffect, useState } from 'react';
import { View, Text, Image, AsyncStorage, Alert } from 'react-native';
import {Container} from 'native-base'
import AppHeader from './Header';
import {logoutUser, loadUser} from '../../redux/js/actions/AuthActions/AuthActions';
import { useDispatch, useSelector } from 'react-redux';
import PlayerStats from '../../components/PlayerStats';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileForm from '../../components/ProfileForm';

function MyProfile(props) {

  let user = useSelector(state=> state.token.userData)
  let profile = useSelector(state => state.token.profile)
  
  let dispatch = useDispatch();

    return (
        <Container style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
               <AppHeader
                  isMenu={true}
                  OpenMenu={() => {
                    props.navigation.toggleDrawer();
                  }}
                  Screen={"Profile"}
                  isLogout={true}
                  Logout={() => { dispatch(logoutUser())
                  props.navigation.navigate('landing');
                  }}
                />
                 {user && user.profile_info === false
                  ? <View style={{flex: 1}}>
                  <ProfileForm user= {user}/>
                </View> 
                : <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                <View style={{flex: 0.1, justifyContent:'flex-start', alignItems: 'center'}}>
                    <Text style={{fontWeight: '800', fontSize: 25, color: '#01438D', marginTop: 20}}>PROFILE</Text>
                </View>
                <View style={{flex: 0.2, justifyContent: 'center', alignItems: 'center', padding: 10,}}>
                    <Image source={{uri: profile.avatar}} style={{height: 150, width:150, borderRadius:200, borderWidth:2, borderColor: '#507E14'}}/>
                </View>
                <View style={{flex: 0.7, justifyContent: 'flex-start', alignItems: 'center', marginTop:20}}>
                <Text style={{margin:30, fontSize: 20, fontWeight: '600', color: '#507E14', textAlign:'justify'}}>
                    {'\n'}Name: {profile && profile.name} {"\n"}Age: {profile && profile.age} {'\n'}City: {profile && profile.city}
                    {'\n'} _______________________________________
                </Text>
                <Text style={{margin:10, fontSize: 25, fontWeight: '900', color: '#01438D', textAlign:'justify'}}>
                      {user && user.role}
                </Text>
                <Text style={{margin:10, fontSize: 20, fontWeight: '300', color: '#507E14', textAlign:'justify'}}>
                      Email: {user && user.email}
                </Text>
                <Text style={{margin:10, fontSize: 20, fontWeight: '300', color: '#507E14', textAlign:'justify'}}>
                      CNIC: {profile && profile.cnic}
                </Text>
                <Text style={{margin:10, fontSize: 20, fontWeight: '300', color: '#507E14', textAlign:'justify'}}>
                      PHONE: {profile && profile.phone}
                </Text>
                <Text style={{margin:10, fontSize: 20, fontWeight: '300', color: '#507E14', textAlign:'justify'}}>
                      DOB: {profile && profile.dob}
                </Text>
                </View>
                
            </View>}

        </Container>
    );
}

export default MyProfile;