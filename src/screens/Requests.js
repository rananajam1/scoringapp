import React from 'react';
import { View, Text, Alert } from 'react-native';
import {Container} from 'native-base'
import AppHeader from './Header';
import {logoutUser} from '../../redux/js/actions/AuthActions/AuthActions';
import { color } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../../components/Card';
import { AcceptRequest } from '../../redux/js/actions/PlayerActions/PlayerActions';
import { styles } from '../../styles/signup';

function Requests(props) {

  let dispatch = useDispatch();

  const requests = useSelector(state => state.token.requests)

  const handleAccept = async(value) => {
    let obj = {
      _id : value
    }
    
    let response = await dispatch(AcceptRequest(obj));
        if(response.type === 'PLAYER_SUCCESS')
        {
          Alert.alert('Request Accepted')
        }
        else{
          Alert.alert('Error')
        }
  }
  
 
    return (
        <Container>
        <AppHeader
          isMenu={true}
          OpenMenu={() => {
            props.navigation.toggleDrawer();
          }}
        //   Screen={"Requests"}
          isLogout={true}
          Logout={() => { dispatch(logoutUser())
            props.navigation.navigate('landing');
          }}
        />
        {console.log(requests)}
        <View style={{justifyContent:'center', alignItems: 'center'}}>
          <Text style={{fontWeight: '800', fontSize: 25, color: '#507E14', margin: 20}}>REQUESTS</Text>
        </View>
        <View style={{justifyContent:'center', alignItems: 'center'}}>
            <FlatList
              data={requests}
              renderItem={({ item }) => 
              <View style={{justifyContent: 'center', alignItems: 'center', width: 400, height: 200, borderWidth: 2, padding: 20}}>
                <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>{item.title}</Text>
                <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>{item.description}</Text>
                <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>{item.sender.email}</Text>
                <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity style={{justifyContent:'center', alignItems: 'center', marginHorizontal: 20}} onPress = {() =>{handleAccept(item._id)}}>
                      <Text style={styles.signupButton}>  
                          Accept
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{justifyContent:'center', alignItems: 'center'}} onPress = {() => Alert.alert('Request Rejected')}>
                      <Text style={styles.signupButton}>  
                          Reject
                      </Text>
                  </TouchableOpacity>
                </View>
                
              </View>
            }
              keyExtractor={item => item._id}
            />
          </View>
        </Container>
    );
}

export default Requests;