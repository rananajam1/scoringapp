import React, { useEffect, useState, useReducer } from 'react';
import {Text, DeviceEventEmitter, Alert} from 'react-native'
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Loader from './src/screens/Loader';
import Landing from './src/screens/Landing';
import Home from './src/screens/Home';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import MyProfile from './src/screens/MyProfile';
import MyPlayer from './src/screens/MyPlayer';
import PlayerSection from './src/screens/PlayerSection';
import TeamSection from './src/screens/TeamSection';
import TournamentSection from './src/screens/TournamentSection';
import MatchSection from './src/screens/MatchSection';
import VenueSection from './src/screens/VenueSection';
import CricPocket from './src/screens/CricPocket';
import CricpocketCard from './components/CricpocketCard';
import ProfileForm from './components/ProfileForm';
import Scoring from './src/screens/Scoring';
import MyTeam from './src/screens/MyTeam';
import ScoreCard from './src/screens/ScoreCard';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, error } from './redux/js/actions/AuthActions/AuthActions';
import { overlay } from 'react-native-paper';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();



function Tabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        const icons = {
          Home: 'home',
          Profile: 'account',
        };
  
        return (
          <MaterialCommunityIcons
            name={icons[route.name]}
            color={color}
            size={size}
          />
        );
      },
    })}>
      <Tab.Screen name="Score" component={Scoring} />
      <Tab.Screen name="Scorecard" component={ScoreCard} />
    </Tab.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Settings"
        onPress={() => Alert.alert('Settings displayed')}
      />
    </DrawerContentScrollView>
  );
}

function AppStack() {

  const dispatch = useDispatch();
  const [role, setRole] = useState('')

  let state = useSelector(state => state.token.userData)

  useEffect(() => {
    // try{
    //   let res = dispatch(loadUser())
    //   .then(setRole(res))
    //   .catch(error)   
    // }catch(err)
    // {
    //   console.log(err)
    // }
  })

  return(
    <Drawer.Navigator backBehavior= 'history' drawerType='front' hideStatusBar = 'true' statusBarAnimation='fade'
      drawerStyle={{ backgroundColor: 'white', width: 240}} drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{activeBackgroundColor:'#507E14', activeTintColor:'white'}}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="My Profile" component={MyProfile} />
      <Drawer.Screen name="My Player" component={MyPlayer} />
      {state && state.role === 'Team Manager' ?
      <Drawer.Screen name="My Team" component={MyTeam} />
      : state && state.role === 'Ground Manager' ?
      <Drawer.Screen name="My Venues" component={Tabs} />
      : state && state.role === 'Organzier' ?
      <Drawer.Screen name="My Tournaments" component={Tabs} />
      : 
      <Drawer.Screen name="Testing" component={Home}/>
      }
      <Drawer.Screen name="My CricPocket" component={CricPocket} />
      <Drawer.Screen name="Players" component={PlayerSection} />
      <Drawer.Screen name="Teams" component={TeamSection} />
      <Drawer.Screen name="Tournaments" component={TournamentSection} />
      <Drawer.Screen name="Matches" component={MatchSection} />
      <Drawer.Screen name="Venues" component={VenueSection} />
      <Drawer.Screen name="Umpires" component={CricPocket} />
    </Drawer.Navigator>
  )
}

export default function Routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="AuthLoading">
        <Stack.Screen name="AuthLoading" component={Loader} />
        <Stack.Screen options={{title : "CriCareer"}} name="landing" component={Landing} />
        <Stack.Screen
          options={{headerShown: true}}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen options={{headerShown: true}} name="Login" component={Login} />
        <Stack.Screen name="AppLanding" component={AppStack} />
        <Stack.Screen name="dashboard" component={AppStack} />
        <Stack.Screen options={{headerShown: true}} name="form" component={ProfileForm} />
        <Stack.Screen options={{headerShown: true}} name="CricpocketCard" component={CricpocketCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
