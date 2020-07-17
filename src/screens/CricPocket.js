import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Alert ,RefreshControl,} from 'react-native';
import {Container} from 'native-base'
import AppHeader from './Header';
import {logoutUser} from '../../redux/js/actions/AuthActions/AuthActions';
import { color } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import PlayerStats from '../../components/PlayerStats';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {styles} from '../../styles/login'
import { LoadProfile, loading } from '../../redux/js/actions/ProfileActions/ProfileActions';
import { LoadCricpocket, CreateCricpocket } from '../../redux/js/actions/CricpocketActions/CricpocketActions';

function CricPocket(props) {

  const [cricpocket, setCricpocket] = useState('');
  const [profile, setProfile] = useState('');
  
  let dispatch = useDispatch();

  const handleCreate = async () => {
    let res = dispatch(CreateCricpocket())
    .then( setCricpocket(res) ,Alert.alert('Cricpocket created'))
    .catch(Alert.alert('Failed'))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('cricpocket working')
        if(profile === '')
        {
          console.log('set profile state')
          dispatch(loading(true))
          let response = await dispatch(LoadProfile());
          if(response.type === 'PROFILE_SUCCESS')
          {  
            console.log('Profile Loaded')
            await setProfile(response.data.data);
            if(cricpocket === '')
            {
              response = await dispatch(LoadCricpocket())
              if(response.type === 'CRICPOCKET_SUCCESS')
              {
                console.log('CricPocket Loaded')
                await setCricpocket(response.data.data);
                console.log("Success")
              }
              else{
                console.log('Error')
              }
            }
          } 
        }
      } catch (error) {
        console.log({catch: error})
      }
  };
    
    fetchData();
  }, []);


    return (
        <Container style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
          {console.log({finally: cricpocket})}
        <AppHeader
          isMenu={true}
          OpenMenu={() => {
            props.navigation.toggleDrawer();
          }}
          Screen={"Cricpocket"}
          isLogout={true}
          Logout={() => { dispatch(logoutUser())
          props.navigation.navigate('Login');
          }}
        />
        <View style={{flex: 0.1, justifyContent:'flex-start', alignItems: 'center'}}>
            <Text style={{fontWeight: '800', fontSize: 25, color: '#01438D', marginTop: 20}}>CRICPOCKET</Text>
        </View>
        {cricpocket && cricpocket.account
        ?<View style={{flex:0.9}}>
          <View style={{flex: 0.6, flexDirection: 'row', justifyContent: 'flex-start', justifyContent: 'flex-start'}}>
            <Image source={{uri: profile.avatar}} style={{height: 150, width:150, borderRadius:200, borderWidth:2, borderColor: '#507E14'}}/>
            <Text style={{marginLeft:30, fontSize: 20, fontWeight: '400', color: '#507E14'}}>
            {'\n'}Name: {profile.name} {"\n"}Age: {profile.age} {'\n'}City: {profile.city} {'\n'}Role: {profile.user && profile.user.role}
            {'\n\n'} ___________
            </Text>
            </View>
            <View style={{flex: 0.2 , justifyContent: 'flex-start', alignItems: 'center', marginTop:50}}>
              <Text style={{fontWeight: '800', fontSize: 25, color: '#01438D', marginTop: 20}}>ACCOUNT</Text>
            </View>
            <View style={{flex: 1.4, alignItems:'center'}}>
              <Text style={{marginLeft:30, fontSize: 20, fontWeight: '400', color: '#507E14', fontWeight: '800'}}>
                {'\n'}TITLE: {cricpocket.title && cricpocket.title} {'\n'}ACCOUNT: {cricpocket.account && cricpocket.account}
              </Text>
              <View style={{ width: 200, height: 200, borderRadius: 200/2, backgroundColor: '#507E14', alignItems: 'center', justifyContent: 'center', margin:20}}>
                <Text style={{color: 'white', fontSize:14}}>Balance</Text>
                <Text style={{color: 'white', fontSize:40,}}>{cricpocket.balance}</Text><Text style={{fontSize: 14, marginLeft:90}}>Rs.</Text>
              </View>
            </View>
            <View style={{flex: 0.3, flexDirection:'row', padding: 10}}>
              <TouchableOpacity style={{backgroundColor: "#01438D", borderRadius: 15, fontSize: 16, 
                marginHorizontal: 3, color: "#ffff", padding: 10, textAlign: "center", width: 100, fontWeight: "500"}}
                onPress={() => props.navigation.navigate('CricpocketCard', withdraw = 'Withdraw')}>
                <Text style={{fontSize: 18, color: 'white'}} >Withdraw</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor: "#01438D",borderRadius: 15,fontSize: 16,
                marginHorizontal: 3,color: "#ffff",padding: 10,textAlign: "center",width: 90,fontWeight: "500"}}
                onPress={() => props.navigation.navigate('CricpocketCard', deposit = 'Deposit')}>
                <Text style={{fontSize: 18, color: 'white'}} >Deposit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor: "#01438D",borderRadius: 15,fontSize: 16,
                marginHorizontal: 3,color: "#ffff",padding: 10,textAlign: "center",width: 90,fontWeight: "500"}}
                onPress={() => props.navigation.navigate('CricpocketCard', deposit = 'Transfer')}>
                <Text style={{fontSize: 18, color: 'white'}} >Transfer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor: "#01438D",borderRadius: 15,fontSize: 16,
                marginHorizontal: 3,color: "#ffff",padding: 10,textAlign: "center",width: 80,fontWeight: "500"}}
                onPress={() => Alert.alert('History not coming Slow')}>
                <Text style={{fontSize: 18, color: 'white'}} >History</Text>
              </TouchableOpacity>
            </View>
        </View>
        :<View style={{flex:0.9, alignItems: 'center', margin: 30, marginTop: 250}}>
          <Text style={{marginLeft:30, fontSize: 20, fontWeight: '400', color: '#507E14'}}>You don't have a cricpocket</Text>
          <TouchableOpacity style={{backgroundColor: "#01438D", borderRadius: 15, fontSize: 16, 
                marginHorizontal: 3, color: "#ffff", padding: 10, textAlign: "center", width: 100, fontWeight: "500",
                alignItems:'center', margin:30}}
                onPress={() => handleCreate()}>
            <Text style={{fontSize: 18, color: 'white'}}>Create</Text>
          </TouchableOpacity>
        </View>
        }
        
        </Container>
    );
}

export default CricPocket;