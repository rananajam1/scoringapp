import React from 'react';
import { View, Text } from 'react-native';
import {Container} from 'native-base'
import AppHeader from './Header';
import {logoutUser} from '../../redux/js/actions/AuthActions/AuthActions';
import { color } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../components/Card';

function TeamSection(props) {

  let teams = useSelector(state => state.token.allTeams)

  let dispatch = useDispatch();
    return (
        <Container>
        <AppHeader
          isMenu={true}
          OpenMenu={() => {
            props.navigation.toggleDrawer();
          }}
        //   Screen={"TeamSection"}
          isLogout={true}
          Logout={() => { dispatch(logoutUser())
            props.navigation.navigate('landing');
          }}
        />
        <View style={{justifyContent:'center', alignItems: 'center'}}>
          <Text style={{fontWeight: '800', fontSize: 25, color: '#507E14', marginTop: 20}}>TEAMS</Text>
        </View>
        <View style={{justifyContent:'center', alignItems: 'center'}}>
            <FlatList
              data={teams}
              renderItem={({ item }) => <Card children={item} button={'Join'} text={'team'}/>}
              keyExtractor={item => item._id}
            />
          </View>
        </Container>
    );
}

export default TeamSection;