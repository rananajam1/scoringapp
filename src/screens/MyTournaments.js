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

function MyTournaments(props) {

    let user = useSelector(state => state.token.userData);
    let profile = useSelector(state => state.token.profile);
    let [tournament, setTournament] = useState('')
  
  let dispatch = useDispatch();

    return (
        <Container style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
            {console.log({TournamentSTATE: tournament})}
               <AppHeader
                  isMenu={true}
                  OpenMenu={() => {
                    props.navigation.toggleDrawer();
                  }}
                  Screen={"My Tournament"}
                  isLogout={true}
                  Logout={() => { dispatch(logoutUser())
                  props.navigation.navigate('landing');
                  }}
                />
                {tournament && tournament
                ? 
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                <View style={{flex: 0.05, justifyContent:'flex-start', alignItems: 'center', margin: 20}}>
                    <Text style={{fontWeight: '800', fontSize: 25, color: '#507E14'}}>MY TOURNAMENT</Text>
                </View>
                <View style={{flex: 0.95, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                <FlatList
                    data={tournament}
                    renderItem={({ item }) => <VenueCard children={tournament}/>}
                    keyExtractor={item => item._id}
                />
                </View>
                <TouchableOpacity style={{alignItems: 'center', margin: 30, padding:10}} onPress = {() => props.navigation.navigate('VenueForm')}>
                    <Text style={{color: 'white', fontSize: 16, backgroundColor:'#01438D', padding: 10, width: 80, textAlign:'center'}}> + Add</Text>
                </TouchableOpacity>
                
                </View>
                :
                <View style={{flex:1, alignItems: 'center', margin: 30, marginTop: 250}}>
                    <Text style={{marginLeft:30, fontSize: 20, fontWeight: '400', color: '#507E14'}}>You don't have a Tournament. Create to start organizing your own event</Text>
                    <TouchableOpacity style={{backgroundColor: "#01438D", borderRadius: 15, fontSize: 16, 
                            marginHorizontal: 3, color: "#ffff", padding: 10, textAlign: "center", width: 100, fontWeight: "500",
                            alignItems:'center', margin:30}}
                            onPress={() => props.navigation.navigate('VenueForm')}>
                        <Text style={{fontSize: 18, color: 'white'}}>Create</Text>
                    </TouchableOpacity>
                </View>
                }

        </Container>
    );
}

export default MyTournaments;