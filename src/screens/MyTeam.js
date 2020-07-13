import React, { useEffect, useState } from 'react';
import { View, Text, Image, AsyncStorage, Alert } from 'react-native';
import {Container} from 'native-base'
import AppHeader from './Header';
import {logoutUser, loadUser} from '../../redux/js/actions/AuthActions/AuthActions';
import { useDispatch, useSelector } from 'react-redux';
import PlayerStats from '../../components/PlayerStats';
import { ScrollView } from 'react-native-gesture-handler';
import TeamForm from '../../components/TeamForm'
import { LoadPlayer } from '../../redux/js/actions/PlayerActions/PlayerActions';

function MyTeam(props) {

    let user = useSelector(state => state.token.userData);
    let profile = useSelector(state => state.token.profile);
    let playerState = useSelector(state => state.token.player);
    let teamState = useSelector(state => state.token.player);
    let [player, setPlayer] = useState('');
    let [team, setTeam] = useState('');
  let dummy = 
  {
    "t20": {
      'matches' : 20,
      'out' : 15,
      'runs' : 350,
      'balls' : 289,
      'fours' : 21,
      'sixes' : 15,
      'thirties' : 4,
      'fifties' : 2,
      'centuries' : 0,
      'highest' : 78
    } ,
    "oneday": {
      'matches' : 15,
      'out' : 13,
      'runs' : 589,
      'balls' : 450,
      'fours' : 42,
      'sixes' : 36,
      'thirties' : 6,
      'fifties' : 3,
      'centuries' : 1,
      'highest' : 121
    } ,
    "test": {
      'matches' : 0,
      'out' : 0,
      'runs' : 0,
      'balls' : 0,
      'fours' : 0,
      'sixes' : 0,
      'thirties' : 0,
      'fifties' : 0,
      'centuries' : 0,
      'highest' : 0
    }
  }
  
  let dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
          let response = await dispatch(LoadPlayer());
          if (response.type === 'PLAYER_SUCCESS') {
            console.log('Player Loaded')
            console.log({PlayerLoaded: response.data.data})
            await setPlayer(response.data.data)
          }
          else{
              console.log('Player loading failed')
          }
      } catch (error) {
        console.log({catch: error})
      }
  };
    
    fetchData();
  }, []);
    return (
        <Container style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
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
                {console.log({team: team})}
                {team && team.name
                ? 
                <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                <View style={{flex: 0.2, justifyContent:'flex-start', alignItems: 'center'}}>
                    <Text style={{fontWeight: '800', fontSize: 25, color: '#507E14', marginTop: 20}}>MY PLAYER</Text>
                </View>
                <View style={{flex: 0.5, flexDirection: 'row', justifyContent: 'flex-start', justifyContent: 'flex-start'}}>
                    <Image source={{uri:profile.avatar}} style={{height: 150, width:150, borderRadius:200, borderWidth:2, borderColor: '#507E14'}}/>
                    {(player.player_type == 'Batsman' || player.player_type =='WicketKeeper_Batsman') && player.batting_style == 'RHB-T'
                        ?<Text style={{marginLeft:30, fontSize: 20, fontWeight: '400', color: '#507E14'}}>
                        {'\n'}Name: {player && player.name} {"\n"}Age: {profile && profile.age} {'\n'}City: {profile && profile.city}
                        {'\n'}{player.player_type} {'\n'}Style: {player.batting_technique && player.batting_technique} 
                        {'\n'}Position: Top Order{'\n\n'} ___________
                        </Text>
                        :(player.player_type == 'Batsman' || player.player_type =='WicketKeeper_Batsman') && player.batting_style === 'RHB-M'
                        ?<Text style={{marginLeft:30, fontSize: 20, fontWeight: '400', color: '#507E14'}}>
                        {'\n'}NameIs: {player && player.name} {"\n"}Age: {profile && profile.age} {'\n'}City: {profile && profile.city}
                        {'\n'}{player.player_type} {'\n'}Style: {player.batting_technique && player.batting_technique}
                        {'\n'}Position: Middle Order{'\n\n'} ___________
                        </Text>
                        :(player.player_type == 'Batsman' || player.player_type =='WicketKeeper_Batsman') && player.batting_style == 'LHB-T'
                        ?<Text style={{marginLeft:30, fontSize: 20, fontWeight: '400', color: '#507E14'}}>
                        {'\n'}Name: {player && player.name} {"\n"}Age: {profile && profile.age} {'\n'}City: {profile && profile.city}
                        {'\n'}{player.player_type} {'\n'}Style: {player.batting_technique && player.batting_technique}
                        {'\n'}Position: Top Order{'\n\n'} ___________
                        </Text>
                        :(player.player_type == 'Batsman' || player.player_type =='WicketKeeper_Batsman') && player.batting_style == 'LHB-M'
                        ?<Text style={{marginLeft:30, fontSize: 20, fontWeight: '400', color: '#507E14'}}>
                        {'\n'}Name: {player && player.name} {"\n"}Age: {profile && profile.age} {'\n'}City: {profile && profile.city}
                        {'\n'}{player.player_type} {'\n'}Style: {player.batting_technique && player.batting_technique}
                        {'\n'}Position: Middle Order{'\n\n'} ___________
                        </Text>
                        : player.player_type == 'Bowler' && player.bowling_style == 'ROS'
                        ?<Text style={{marginLeft:30, fontSize: 20, fontWeight: '400', color: '#507E14'}}>
                        {'\n'}Name: {player && player.name} {"\n"}Age: {profile && profile.age} {'\n'}City: {profile && profile.city}
                        {'\n'}Bowler: Right Arm Off Spin{'\n\n'} ___________
                        </Text>
                        : player.player_type == 'Bowler' && player.batting_style == 'RLS'
                        ?<Text style={{marginLeft:30, fontSize: 20, fontWeight: '400', color: '#507E14'}}>
                        {'\n'}Name: {player && player.name} {"\n"}Age: {profile && profile.age} {'\n'}City: {profile && profile.city}
                        {'\n'}Bowler: Right Arm Leg Spin{'\n\n'} ___________
                        </Text>
                        : player.player_type == 'Bowler' && player.batting_style == 'RMF'
                        ?<Text style={{marginLeft:30, fontSize: 20, fontWeight: '400', color: '#507E14'}}>
                        {'\n'}Name: {player && player.name} {"\n"}Age: {profile && profile.age} {'\n'}City: {profile && profile.city}
                        {'\n'}Bowler: Right Arm Medium Fast{'\n\n'} ___________
                        </Text>
                        : player.player_type == 'Bowler' && player.batting_style == 'LMF'
                        ?<Text style={{marginLeft:30, fontSize: 20, fontWeight: '400', color: '#507E14'}}>
                        {'\n'}Name: {player && player.name} {"\n"}Age: {profile && profile.age} {'\n'}City: {profile && profile.city}
                        {'\n'}Bowler: Left Arm Medium Fast{'\n\n'} ___________
                        </Text>
                        : player.player_type == 'Bowler' && player.batting_style == 'LC'
                        ?<Text style={{marginLeft:30, fontSize: 20, fontWeight: '400', color: '#507E14'}}>
                        {'\n'}Name: {player && player.name} {"\n"}Age: {profile && profile.age} {'\n'}City: {profile && profile.city}
                        {'\n'}Bowler: Left Arm Chinaman{'\n\n'} ___________
                        </Text>
                        :<Text style={{marginLeft:30, fontSize: 20, fontWeight: '400', color: '#507E14'}}>
                        {'\n'}Name: {player && player.name} {"\n"}Age: {profile && profile.age} {'\n'}City: {profile && profile.city}
                        {'\n'}{player.player_type} {'\n'}{player.batting_style} {'\n\n'} ___________
                        </Text>
                    }
                </View>
                <View style={{flex: 0.2, justifyContent: 'flex-start', alignItems: 'center', marginTop:50}}>
                  <Text style={{fontWeight: '800', fontSize: 25, color: '#507E14', marginTop: 20}}>STATS</Text>
                </View>
                <ScrollView style={{flex: 5}}>
                  <PlayerStats children = {dummy}/>
                </ScrollView>
                </View>
                :
                <View style={{flex:1}}>
                    <TeamForm />
                </View> }

        </Container>
    );
}

export default MyTeam;