import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import {Container} from 'native-base'
import AppHeader from './Header';
import {logoutUser, loadUser, error} from '../../redux/js/actions/AuthActions/AuthActions';
import { color } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../components/Card';
import { LoadProfile } from '../../redux/js/actions/ProfileActions/ProfileActions';

function Home(props) {
  let dispatch = useDispatch();

  const user = useSelector(state => state.token.userData)

  useEffect(() => {
    const fetchData = async () => {
      try {
          let response = await dispatch(loadUser());
          if (response.type === 'AUTH_SUCCESS') {
            console.log('User Loaded')
            if(response.data.user.profile_info === true)
            {
              response = await dispatch(LoadProfile());
              if(response.type === 'PROFILE_SUCCESS')
              {
                console.log('Profile Loaded')
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
        <Container>
            <AppHeader
            isMenu={true}
            OpenMenu={() => {
                props.navigation.toggleDrawer();
            }}
            //   Screen={"Home"}
            isLogout={true}
            Logout={() => { dispatch(logoutUser())
                props.navigation.navigate('Login');
            }}
            />
            {console.log({StartUser: user})}
            {user && user.profile_info === false
            ? <View style={{flex: 1}}>
                <ProfileForm user= {user}/>
            </View> 
            :<View style={{justifyContent:'center', alignItems: 'center'}}>
                <Text style={{fontWeight: '800', fontSize: 25, color: '#507E14', marginTop: 20}}>CRICAREER HOME</Text>
            </View>
            }
            {/* <View style={{justifyContent:'center', alignItems: 'center'}}>
            </View> */}
        </Container>
    );
}

export default Home;