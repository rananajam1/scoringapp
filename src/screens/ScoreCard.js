import React from 'react';
import { View, Text } from 'react-native';
import {Container} from 'native-base'
import AppHeader from './Header';
import {logout} from '../../redux/js/actions/AuthActions/AuthActions';
import { color } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../../components/Card';

function Scoring(props) {

    let match = {
        'team1' : 'COMSATS',
        'team2' : 'Islamabad Mevericks',
        'toss' : '',
        'batting_1': '',
        'venue' : 'Comsats Cricket ground Islamabad',
        'team1_players' : [
            'Nausherwan Tahir','Sheheryar Arshad','Zahoor Alam','Naeem Khan','Osama Ilyas','Noman Ajaz','Saad Malik',
            'ShahJehan Khan','Burhan Khan','Haseeb Ansari','Ahmed Butt'  
        ],
        'tema2_players' : [
            'Muhammad Sarmad','Rana sarmad','Umer Gujjar','Umer Shikari','Abdul Rafey','Ali Khan','Muhammad Ali',
            'Waqas Shakoor','Zubair Mughal','Zubair Afzal','Kamran Ali' 
        ],
    }

    let team1 = match.team1 , team2= match.team2, toss_win, batting1, batting2;
    let  team1_score = 0,
    team2_score = 0,
    team1_wickets = 0,
    team2_wickets = 0;

    let dispatch = useDispatch();
    return (
        <Container>
        {/* <AppHeader
          isMenu={true}
          OpenMenu={() => {
            props.navigation.toggleDrawer();
          }}
        //   Screen={"Scoring"}
          isLogout={true}
          Logout={() => { dispatch(logout())
            props.navigation.navigate('loanding');
          }}
        /> */}
        <View style={{justifyContent:'center', alignItems: 'center'}}>
          <Text style={{fontWeight: '800', fontSize: 25, color: '#507E14', marginTop: 20}}>SCORECARD</Text>
        </View>
        <View style={{justifyContent:'center', alignItems: 'center'}}>
            <Text></Text>
        </View>
        </Container>
    );
}

export default Scoring;