import React, { useState } from 'react';
import { 
    Text, 
    View,
    TouchableOpacity,
    } from 'react-native';
import {styles} from '../../styles/landing';
import Logo from '../../components/Logo';


const Landing = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Logo />
            <View style={styles.container}>
                <View style={styles.sloganView}>
                    <Text style={styles.titleText}>CriCareer</Text>
                    <Text style={styles.sloganText}>Follow Your Dreams !</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity>
                        <Text
                        style={styles.button}
                        onPress={() => navigation.navigate('Login')}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text
                        style={styles.button}
                        onPress={() => navigation.navigate('Signup')}
                        >
                            Register
                        </Text>
                    </TouchableOpacity>
                </View> 
            </View>
        </View>
    );
};


export default Landing;