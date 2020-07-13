import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert} from 'react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import Input from '../utilities/index';
import { styles } from '../../styles/login';
import {checkInputs} from '../utilities';
import {
  UserLogin,
  loading,
} from '../../redux/js/actions/AuthActions/AuthActions';
import Logo from '../../components/Logo';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let dispatch = useDispatch();

  const handleSubmit = async e => {
    dispatch(loading(true));
    let check = checkInputs([email, password]);
    if (check) {
      let response = await dispatch(UserLogin(email, password));
      if (response.type === 'AUTH_SUCCESS') {
        props.navigation.navigate('AppLanding');
      }
      else
      {
        Alert.alert('Invalid Credentials');
      }
      dispatch(loading(false));
    } else {
      Alert.alert('Incomplete Fields', '', [{text: 'Ok'}]);
      dispatch(loading(false));
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="position" style={styles.container}>
          <Logo width='350' height='350'/>
          <View style={styles.container}>
              <View style={styles.container}>
                  <TextInput 
                      style={styles.inputBox} 
                      placeholder="email" 
                      placeholderTextColor="white"
                      value={email}
                      type='username'
                      autoCapitalize = 'none'
                      onChangeText={text => {setEmail(text)}}
                      // onChangeText={(text) => setEmail(text)}
                      />
                  <TextInput
                      style={styles.inputBox}
                      placeholder="Password"
                      placeholderTextColor="white"
                      secureTextEntry={true}
                      value={password}
                      type='password'
                      autoCapitalize = 'none'
                      onChangeText={text => {setPassword(text)}}
                      // onChangeText={(text) => setPassword(text)}
                      />
                  <TouchableOpacity>
                      <Text
                          style={styles.forgotButton}
                          onPress={() => Alert.alert("Password Reset Coming Soon!")}>
                          Forgot Password
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <Text
                          style={styles.loginButton}
                          onPress={e => {
                            handleSubmit();
                          }}>
                          Login
                      </Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.signupContent}>
                  <Text style={styles.signupContent}>Don't have an account ? </Text>
                  <TouchableOpacity>
                      <Text
                          style={styles.signupButton}
                          onPress={() => props.navigation.navigate('Signup')}>
                      Register
                      </Text>
                  </TouchableOpacity>
              </View>
          </View>
      </KeyboardAvoidingView>
  </View>

  );
}

export default Login;



 // <View
    //   style={{
    //     flex: 1,
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //   }}>
    //    <Text>CRICAREER</Text> 
    //   <Input
    //     onTextAdd={text => {
    //       setEmail(text);
    //     }}
    //     placeholderTitle="Email"
    //     type="username"
    //     value={email}
    //   />
    //   <Input
    //     onTextAdd={text => {
    //       setPassword(text);
    //     }}
    //     placeholderTitle="Password"
    //     type="password"
    //     value={password}
    //   />
    //   <Button
    //     title="Login"
    //     onPress={e => {
    //       handleSubmit();
    //     }}
    //   />
    //   <Button
    //     title="Signup"
    //     onPress={() => {
    //       props.navigation.navigate('Signup');
    //     }}
    //   />
    // </View>