import React from 'react';
import { View, Text } from 'react-native';
import {Container} from 'native-base'
import AppHeader from './Header';
import {logoutUser} from '../../redux/js/actions/AuthActions/AuthActions';
import { color } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Card from '../../components/Card';

function Requests(props) {

  let dispatch = useDispatch();

  const requests = useSelector(state => state.token.requests)

  const handleSubmit = (value) => {
    if(value === 'accept')
    {

    }
    else
    {

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
          <Text style={{fontWeight: '800', fontSize: 25, color: '#507E14', marginTop: 20}}>REQUESTS</Text>
        </View>
        <View style={{justifyContent:'center', alignItems: 'center'}}>
            <FlatList
              data={requests}
              renderItem={({ item }) => 
              <View style={{justifyContent: 'center', alignItems: 'center', width: 400, height: 200, borderWidth: 2}}>
                <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>{item.title}</Text>
                <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>{item.description}</Text>
                <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>{item.sender.email}</Text>
                <View style={{flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity style={{justifyContent:'center', alignItems: 'center'}} onPress = {() =>{handleSubmit('reject')}}>
                      <Text style={styles.signupButton}>  
                          Accept
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{justifyContent:'center', alignItems: 'center'}} onPress = {() =>{handleSubmit('accept')}}>
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