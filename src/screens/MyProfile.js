import React, { useEffect, useState } from 'react';
import { View, Text, Image, AsyncStorage, Alert } from 'react-native';
import {Container} from 'native-base'
import AppHeader from './Header';
import {logoutUser, loadUser} from '../../redux/js/actions/AuthActions/AuthActions';
import { useDispatch, useSelector } from 'react-redux';
import PlayerStats from '../../components/PlayerStats';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileForm from '../../components/ProfileForm';
import { LoadProfile } from '../../redux/js/actions/ProfileActions/ProfileActions';

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
                <View style={{flex: 0.2, justifyContent:'flex-start', alignItems: 'center'}}>
                    <Text style={{fontWeight: '800', fontSize: 25, color: '#507E14', marginTop: 20}}>PROFILE</Text>
                </View>
                <View style={{flex: 0.4, flexDirection: 'row', justifyContent: 'flex-start', justifyContent: 'flex-start'}}>
                    <Image source={{uri:profile.avatar}} style={{height: 150, width:150, borderRadius:200, borderWidth:2, borderColor: '#507E14'}}/>
                    <Text style={{marginLeft:30, fontSize: 20, fontWeight: '400', color: '#507E14'}}>
                    {'\n'}Name: {profile && profile.name} {"\n"}Age: {profile && profile.age} {'\n'}City: {profile && profile.city} {'\n'}Role: {user && user.role}
                    {'\n\n'} ___________
                    </Text>
                </View>
                <View style={{flex: 0.2, justifyContent: 'flex-start', alignItems: 'center', marginTop:50}}>
                  <Text style={{fontWeight: '800', fontSize: 25, color: '#507E14', marginTop: 20}}></Text>
                </View>
                <ScrollView style={{flex: 5}}>
                  
                </ScrollView>
            </View>}

        </Container>
    );
}

export default MyProfile;