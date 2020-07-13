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
    let  batting1_score = 0,
    batting2_score = 0,
    batting1_wickets = 0,
    batting2_wickets = 0;

    const toss_team = (team1, team2) => {
        let result = '';
        let team = Math.floor((Math.random() * 2) + 1);
        if(team === 1)
        {
           result = team1;
        }
        else 
        {
            result = team2;
        }
        return result;
    }

    const toss = (team, choice) => {
        let result = '';
        let coin = Math.floor((Math.random() * 2) + 1);
        console.log({team_to_chose : team})
        console.log({choice : choice, coin: coin});
        if(team === team1)
        {
            if(coin === choice)
            {
               result = team1;
            }
            else
            {
                result = team2;
            }
        }
        else 
        {
            if(coin === choice)
            {
               result = team2;
            }
            else
            {
                result = team1;
            }
        }
        console.log({toss_winner: result})
        return result;
    }

    const toss_descision = () => {

    }

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
            props.navigation.navigate('Login');
          }}
        /> */}
        <View style={{justifyContent:'center', alignItems: 'center'}}>
          <Text style={{fontWeight: '800', fontSize: 25, color: '#507E14', marginTop: 20}}>SCORING CENTER</Text>
        </View>
        <View style={{justifyContent:'center', alignItems: 'center'}}>
            <Text style={{fontWeight: '800', fontSize: 25, color: '#507E14', marginTop: 20}}>{ toss_win = toss(toss_team(match.team2, match.team1), 1)}</Text>
            <Text style={{fontWeight: '800', fontSize: 25, color: '#507E14', marginTop: 20}}></Text>
        </View>
        </Container>
    );
}

export default Scoring;