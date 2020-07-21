import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

function Card(props) {
    let user = useSelector(state => state.token.userData.user)

    const handleStart = () => {
        if(props.children.start_status)
        {
            props.flow.navigate('toss', {match: props.children})
        }
        props.flow.navigate('toss', {match: props.children});
    }

    return (
        <View style={styles.containerStyle}>
            {props.text && props.text === 'match'
            ?<View style={{width: 300, alignItems: 'center', height: 350, padding: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={{uri: props.children.teamA.avatar && props.children.teamA.avatar}} style={{height: 100, width: 100}}/>
                    <Text style={{padding: 5, margin: 10, fontSize: 20}}>VS</Text>
                    <Image source={{uri: props.children.teamB && props.children.teamB.avatar}} style={{height: 100, width: 100}}/>
                </View>
                <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center', marginTop: 30}}>Title : {`${props.children.teamA.name} VS ${props.children.teamB && props.children.teamB.name}`}</Text>
                <Text style={{color: "#507E14", fontSize: 20, fontWeight:'500', alignItems: 'center', marginTop: 20}}>Format : {props.children.format}</Text>
                <Text style={{color: "#507E14", fontSize: 20, fontWeight:'500', alignItems: 'center', marginTop: 20}}>Venue : {props.children.venue.name}</Text>
                <View>
                <TouchableOpacity style={{padding: 20}} onPress = {() => handleStart()}>
                    {(props.button && props.button) && (props.children.start_status) ?
                    <Text style={{color: 'white', fontSize: 16, backgroundColor:'#01438D', padding: 10, width: 60}}>{props.button2 && props.button2}</Text>   
                    :<Text style={{color: 'white', fontSize: 16, backgroundColor:'#01438D', padding: 10, width: 60}}>{props.button && props.button}</Text>   
                    } 
                </TouchableOpacity>
                </View>
            </View>
            : props.text && props.text === 'team'
            ?<View style={{width: 300, alignItems: 'center', height: 400}}>
            <Image source={{ isStatic: true, uri: props.children.avatar}} style={{height: 200, width:200, borderRadius: 350, marginBottom:30}}/> 
            <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', textAlign: 'left'}}>Name : {props.children.name}</Text>
            <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', textAlign: 'left'}}>Level : {props.children.level}</Text>
            <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', textAlign: 'left'}}>City : {props.children.city}</Text>
            <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', textAlign: 'left'}}>Slogan : {props.children.description}</Text>
            </View>
            : props.text && props.text === 'venue'
            ?<View style={{width: 340, alignItems: 'center', justifyContent: 'center' ,height: 400}}>
            <Image source={{ isStatic: true, uri: props.children.avatar}} style={{height: 200, width:200, borderRadius: 350, marginBottom:10}}/> 
            <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center', textAlign: 'left'}}>Name : {props.children.name}</Text>
            <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center', textAlign: 'left'}}>Match Fee :   {props.children.fee} Rs</Text>
            <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center', textAlign: 'left'}}>City :   {props.children.city}</Text>
            </View>
            :
            <View style={{width: 300, alignItems: 'center', justifyContent: 'center', height: 400}}>
            <Image source={{ isStatic: true, uri: props.children.avatar}} style={{height: 200, width:200, borderRadius: 350, marginBottom:10}}/> 
            <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>{props.children.name}</Text>
            <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>Rank : {props.children.ranking}</Text>
            <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>{props.children.player_type}</Text>
            {props.children.player_type === 'Bowler'
            ?<View>
            <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>Batting : {props.children.batting_style}</Text>
            <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>Style : {props.children.batting_technique}</Text>
            </View>
            :props.children.player_type === 'Bowler'
            ?<Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>Bowling : {props.children.batting_style}</Text>
            :<View>
                <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>Batting :       {props.children.batting_style}</Text>
                <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>Style:            {props.children.batting_technique}</Text>
                <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>Bowling :      {props.children.bowling_style}</Text>
            </View>
            }
          </View>}
            {}
            {props.button && props.button === 'Invite' && user.role === 'Team Manager' ?
                <View>
                <TouchableOpacity style={{padding: 20}} onPress = {() => Alert.alert("Request sent to " + props.children.name)}>
                    {(props.button && props.button) &&
                    <Text style={{color: 'white', fontSize: 16, backgroundColor:'#01438D', padding: 10, width: 60}}>{props.button && props.button}</Text> 
                    } 
                </TouchableOpacity>
                </View>
            : props.button && props.button === 'Join' && (user.role === 'Team Manager' || user.role === 'Player')
            ?<View>
                <TouchableOpacity style={{padding: 20}} onPress = {() => Alert.alert("Request sent to " + props.children.name)}>
                    {props.button && props.button ?
                    <Text style={{color: 'white', fontSize: 16, backgroundColor:'#01438D', padding: 10, width: 60}}>{props.button && props.button}</Text> 
                    :
                    <Text></Text>   
                    } 
                </TouchableOpacity>
            </View>
            :<View style={{marginBottom: 10}}></View>
            }
               
            
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle:{
        alignItems: 'center',
        borderWidth:2,
        borderRadius:2,
        // backgroundColor: "#507E14",
        // shadowColor:'#000',
        borderColor:"#507E14",
        // shadowOffset:{width:0,height:2},
        // elevation:2,
        marginLeft:5,
        marginRight:5,
        margin: 10,
        padding: 10,
        // height: 500
    }
})
export default Card;