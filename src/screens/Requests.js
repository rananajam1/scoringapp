import React from 'react';
import { View, Text } from 'react-native';
import {Container} from 'native-base'
import AppHeader from './Header';
import {logoutUser} from '../../redux/js/actions/AuthActions/AuthActions';
import { color } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../components/Card';

function Requests(props) {
  
  let dispatch = useDispatch();
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
            props.navigation.navigate('AuthLoading');
          }}
        />
        <View style={{justifyContent:'center', alignItems: 'center'}}>
          <Text style={{fontWeight: '800', fontSize: 25, color: '#507E14', marginTop: 20}}>REQUESTS</Text>
        </View>
        <View style={{justifyContent:'center', alignItems: 'center'}}>
            
          </View>
        </Container>
    );
}

export default Requests;