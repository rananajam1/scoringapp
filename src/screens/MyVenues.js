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
import { LoadMyVenues, CreateVenue } from '../../redux/js/actions/VenueActions/VenueActions';
import VenueCard from '../../components/VenueCard';

function MyVenues(props) {

    let user = useSelector(state => state.token.userData);
    let profile = useSelector(state => state.token.profile);
    let playerState = useSelector(state => state.token.player);
    let [player, setPlayer] = useState('');
    let [venue, setVenue] = useState('')
  
  let dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
          let response = await dispatch(LoadMyVenues());
          if (response.type === 'VENUE_SUCCESS') {
            console.log('Venue Loaded')
            console.log({VenueLoaded: response.data.data})
            await setVenue(response.data.data)
          }
          else{
              console.log('Venue loading failed')
          }
      } catch (error) {
        console.log({catch: error})
      }
  };
    
    fetchData();
  }, []);

 

    return (
        <Container style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
            {console.log({VENUESTATE: venue})}
               <AppHeader
                  isMenu={true}
                  OpenMenu={() => {
                    props.navigation.toggleDrawer();
                  }}
                  Screen={"Home"}
                  isLogout={true}
                  Logout={() => { dispatch(logoutUser())
                  props.navigation.navigate('landing');
                  }}
                />
                {venue && venue
                ? 
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                <View style={{flex: 0.05, justifyContent:'flex-start', alignItems: 'center', margin: 20}}>
                    <Text style={{fontWeight: '800', fontSize: 25, color: '#507E14'}}>MY VENUES</Text>
                </View>
                <View style={{flex: 0.95, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                <FlatList
                    data={venue}
                    renderItem={({ item }) => <VenueCard children={venue}/>}
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