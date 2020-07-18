import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

function Card(props) {
    let user = useSelector(state => state.token.userData)
    return (
        <View style={styles.containerStyle}>
            {props.text && props.text === 'match'
            ?<View style={{width: 300, alignItems: 'center', height: 150}}>
                <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>Match : {props.children.type}</Text>
                <Text style={{color: "#507E14", fontSize: 20, fontWeight:'300', alignItems: 'center'}}>Format : {props.children.format}</Text>
                <Text style={{color: "#507E14", fontSize: 20, fontWeight:'300', alignItems: 'center'}}>Venue : {props.children.venue}</Text>
                <Text style={{color: "#507E14", fontSize: 20, fontWeight:'300', alignItems: 'center'}}>Date : {props.children.date}</Text>
            </View>
            :<View>
            <Image source={{uri: props.children.avatar}} style={{height: 200, width:200, borderRadius: 350, marginBottom:10}}/> 
            <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>Name : {props.children.name}</Text>
            <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>Rank : {props.children.ranking}</Text>
            <Text style={{color: "#507E14", fontSize: 20, fontWeight:'bold', alignItems: 'center'}}>Player : {props.children.player_type}</Text>
            </View>}
            {props.button && props.button === 'Invite' && user.role === 'Team Manager' ?
                <View>
                <TouchableOpacity style={{padding: 20}} onPress = {() => Alert.alert("Request sent to " + props.children.name)}>
                    {props.button && props.button ?
                    <Text style={{color: 'white', fontSize: 16, backgroundColor:'#01438D', padding: 10, width: 60}}>{props.button && props.button}</Text> 
                    :
                    <Text></Text>   
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