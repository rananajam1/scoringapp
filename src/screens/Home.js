import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import {Container} from 'native-base'
import AppHeader from './Header';
import {logoutUser, loadUser, error} from '../../redux/js/actions/AuthActions/AuthActions';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Card from '../../components/Card';
import { LoadProfile } from '../../redux/js/actions/ProfileActions/ProfileActions';
import ProfileForm from '../../components/ProfileForm';
import { SliderBox } from 'react-native-image-slider-box';
import { LoadPlayer, GetAllPlayers } from '../../redux/js/actions/PlayerActions/PlayerActions';
import { GetAllTeams, LoadTeam } from '../../redux/js/actions/TeamActions/TeamActions';
import { GetAllVenues, LoadMyVenues } from '../../redux/js/actions/VenueActions/VenueActions';
import { GetAllMatches } from '../../redux/js/actions/MatchActions/MatchActions';
import { LoadCricpocket } from '../../redux/js/actions/CricpocketActions/CricpocketActions';
import { LoadRequests } from '../../redux/js/actions/RequestActions/RequestActions';


function Home(props) {
  let dispatch = useDispatch();

  let state = {
  images: [         
      "https://wallpapercave.com/wp/wp1862738.jpg",                 
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb15af11131271.560f340eb3393.jpg",         
      "https://media.gettyimages.com/photos/cricket-batsman-hitting-ball-during-cricket-match-in-stadium-picture-id519665528?s=612x612",
    ] ,
  images2: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLi8Hfhu8UBRkTahLQJXrYFsue340cgk7dZA&usqp=CAU", 
    "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",  
  ]
  }  

  const user = useSelector(state => state.token.userData.user)
  const venues = useSelector(state => state.token.allVenues)
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        if(!user || !user.name)
          {let response = await dispatch(loadUser());
          if (response.type === 'AUTH_SUCCESS') 
          {
              if(response.data.user.profile_info === true)
              {
              let res = await dispatch(LoadProfile());
              {
                if(res.type === 'PROFILE_SUCCESS')
                {
                  console.log('User Profile Loaded')
                }
                else{
                  console.log('User Profile Error')
                }
              }
              }
              if(response.data.user.player === true)
              {
                res = await dispatch(LoadPlayer())
                if(res.type === 'PLAYER_SUCCESS')
                {
                  console.log('Player Loaded')
                }
                else{
                  console.log('Player Error')
                }
              }
              if(response.data.user.cricpocket === true)
              {
                res = await dispatch(LoadCricpocket())
                if(res.type === 'CRICPOCKET_SUCCESS')
                {
                  console.log('CricPocket Loaded')
                }
                else{
                  console.log('CricPocket Error')
                }
              }
              if(response.data.user.role_creation === true)
              {
                if(response.data.user.role === 'Team Manager')
                {
                  res = await dispatch(LoadTeam());
                  if(res.type === 'TEAM_SUCCESS')
                  {
                    console.log('Team Loaded')
                  }
                  else{
                    console.log('Team Error')
                  }
                }
                if(response.data.user.role === 'Ground Manager')
                {
                  res = await dispatch(LoadMyVenues());
                  if(res.type === 'VENUE_SUCCESS')
                  {
                    console.log('Venue Loaded')
                  }
                  else{
                    console.log('Venue Error')
                  }
                }
              }
              response = await dispatch(GetAllPlayers());
              if(response.type === 'PLAYER_SUCCESS')
              {
                console.log('All Players Loaded')
              }
              else
              {
                console.log('All Players Error')
              }
      
              response = await dispatch(GetAllTeams());
              if(response.type === 'TEAM_SUCCESS')
              {
                console.log('All Teams Loaded')
              }
              else
              {
                console.log('All Teams Error')
              }

              response = await dispatch(GetAllVenues());
              if(response.type === 'VENUE_SUCCESS')
              {
                console.log('All Venues Loaded')
              }
              else
              {
                console.log('All Venues Error')
              }

              response = await dispatch(GetAllMatches());
              if(response.type === 'MATCH_SUCCESS')
              {
                console.log('All Matches Loaded')
              }
              else
              {
                console.log('All Matches Error')
              }

              response = await dispatch(LoadRequests());
              if(response.type === 'REQUEST_SUCCESS')
              {
                console.log('All Requests Loaded')
              }
              else
              {
                console.log('All Matches Error')
              }
          }
          else{
            console.log('Auth error')
          }
        }
      } catch (error) {
        console.log({catch: error})
      }
  };
    
    fetchData();
  }, []);

    return (
        <Container>
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
            {user && user.profile_info === false
            ? <View style={{flex: 1}}>
                <ProfileForm user= {user}/>
            </View> 
            :<View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
              <ScrollView>
              <View style={{flex:0.3}}>
                <SliderBox
                  images={state.images}
                  sliderBoxHeight={220}
                  dotColor="#FFEE58"
                  inactiveDotColor="#90A4AE"
                />
                </View>
                <View style={{flex: 0.1, justifyContent:'center', alignItems: 'center',}}>
                    <Text style={{fontWeight: '800', fontSize: 25, color: '#01438D', margin: 20}}>OUR VENUES</Text>
                </View>
                <View style={{flex:0.3, justifyContent:'center', alignItems: 'center'}}>
                    <SliderBox
                      images={state.images2}
                      sliderBoxHeight={220}
                      dotColor="#FFEE58"
                      inactiveDotColor="#90A4AE"
                    />
                </View>
              </ScrollView>        
            </View>
            
            }
 
        </Container>
    );
}

export default Home;