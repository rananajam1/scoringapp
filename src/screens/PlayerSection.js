import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import {Container} from 'native-base'
import AppHeader from './Header';
import {logoutUser} from '../../redux/js/actions/AuthActions/AuthActions';

import { color } from 'react-native-reanimated';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../components/Card';
import { GetAllPlayers } from '../../redux/js/actions/PlayerActions/PlayerActions';

function PlayerSection(props) {
  
  let players = useSelector(state => state.token.allPlayers)
  
  let dispatch = useDispatch();

    return (
        <Container>
        <AppHeader
          isMenu={true}
          OpenMenu={() => {
            props.navigation.toggleDrawer();
          }}
        //   Screen={"PlayerSection"}
          isLogout={true}
          Logout={() => { dispatch(logoutUser())
            props.navigation.navigate('landing')
          }}
        />
        <View style={{justifyContent:'center', alignItems: 'center', marginTop: 20}}>
          <Text style={{fontWeight: '800', fontSize: 25, color: '#507E14', marginTop: 20}}>PLAYERS</Text>
          <View style={{justifyContent:'center', alignItems: 'center', marginBottom: 20}}>
            <FlatList
              data={players}
              renderItem={({ item }) => 
               <Card children={item} button={'Invite'}/>}
              keyExtractor={item => item._id}
            />
          </View>
         
        </View>
        </Container>
    );
}

export default PlayerSection;