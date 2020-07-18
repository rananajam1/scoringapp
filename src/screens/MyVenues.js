import React, { useEffect, useState } from 'react';
import { View, Text, Image, AsyncStorage, Alert } from 'react-native';
import {Container} from 'native-base'
import AppHeader from './Header';
import {logoutUser, loadUser} from '../../redux/js/actions/AuthActions/AuthActions';
import { useDispatch, useSelector } from 'react-redux';
import PlayerStats from '../../components/PlayerStats';
import { ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import PlayerForm from '../../components/PlayerForm';
import { LoadProfile } from '../../redux/js/actions/ProfileActions/ProfileActions';
import { CreateCricpocket } from '../../redux/js/actions/CricpocketActions/CricpocketActions';
import { LoadPlayer } from '../../redux/js/actions/PlayerActions/PlayerActions';
import VenueForm from '../../components/VenueForm';
import { LoadMyVenues, CreateVenue, DeleteVenue } from '../../redux/js/actions/VenueActions/VenueActions';
import VenueCard from '../../components/VenueCard';

function MyVenues(props) {

    let user = useSelector(state => state.token.userData);
    let profile = useSelector(state => state.token.profile);
    let venues = useSelector(state => state.token.myVenues);

  let dispatch = useDispatch();

  const handleSubmit = async(value) => {
    let response = await dispatch(DeleteVenue(value));
    if(response.type === 'VENUE_SUCCESS')
    {
      Alert.alert('Venue Deleted Succesfully')
    }
    else
    {
      Alert.alert('Venue Error')
    }
  }


    return (
        <Container style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
            {console.log({VENUESTATE: venues})}
               <AppHeader
                  isMenu={true}
                  OpenMenu={() => {
                    props.navigation.toggleDrawer();
                  }}
                  // Screen={"Home"}
                  isLogout={true}
                  Logout={() => { dispatch(logoutUser())
                  props.navigation.navigate('landing');
                  }}
                />
                {venues && venues
                ? 
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                <View style={{flex: 0.05, justifyContent:'flex-start', alignItems: 'center', margin: 20}}>
                    <Text style={{fontWeight: '800', fontSize: 25, color: '#507E14'}}>MY VENUES</Text>
                </View>
                <View style={{flex: 0.95, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                <FlatList
                    data={venues}
                    renderItem={({ item }) => 
                    <View style= {{justifyContent: 'center', alignItems: 'center'}}>
                       <Image source={{uri: item.avatar}} style={{height: 200, width:200, borderRadius: 200/2, marginBottom:10}}/>
                      <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>Name : {item.name}</Text>
                      <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>City : {item.city}</Text>
                      <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>Fee : {item.fee}</Text>
                      <TouchableOpacity style={{padding: 20}} onPress = {() => handleSubmit(item._id)}>
                        {console.log('Api - '+item._id)}
                          <Text style={{color: 'white', fontSize: 16, backgroundColor:'#01438D', padding: 10, width: 80, textAlign:'center'}}>Delete</Text> 
                      </TouchableOpacity>
                    </View>
                    }
                    keyExtractor={item => item._id}
                />
                </View>
                <TouchableOpacity style={{alignItems: 'center', margin: 30, padding:10}} onPress = {() => props.navigation.navigate('VenueForm')}>
                    <Text style={{color: 'white', fontSize: 16, backgroundColor:'#01438D', padding: 10, width: 80, textAlign:'center'}}> + Add</Text>
                </TouchableOpacity>
                
                </View>
                :
                <View style={{flex: 1}}>
                    <VenueForm user= {user} profile={profile}/>
                </View> }

        </Container>
    );
}

export default MyVenues;