import React, { Component } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { View,Text, AsyncStorage } from 'react-native';
import { loadUser } from '../../redux/js/actions/AuthActions/AuthActions';

class Loader extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount(){
        const checkUser = async (e) => {
            console.log('App startup at loader')
           
            let token = await AsyncStorage.getItem('@token');
            console.log({token: token})
            if(!token){
                this.props.navigation.navigate('landing')
            }
            else{
                this.props.navigation.navigate('AppLanding')
            }
        }
        checkUser();
    }
    render() {
        return (
            <View style={{alignContent:'center',justifyContent:'center',alignItems:'center',flex:1}}>
                <Text>Loading...</Text>
            </View>
        );
    }
}



export default Loader;