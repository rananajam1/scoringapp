import { DataAccess } from "../../../../DAL";
import setAuthToken from '../../../../src/utilities/setAuthToken';
import ApiEndPoint from "../../../../ApiEndpoints";
import axios from 'axios';
import { AsyncStorage } from "react-native";
import { useSelector } from "react-redux";


export const loading = bool => ({
  type: "LOADING",
  isLoading: bool
});

export const logout = bool => ({
  type: "LOGOUT",
  isLogedOut: bool
});

export const success = success => ({
  type: "AUTH_SUCCESS",
  data: success
});

export const error = error => ({
  type: "AUTH_ERROR",
  error
});

export const getToken = token => ({
  type: "GET_TOKEN",
  token, 
});


export const setUserInfo = Info => ({
  type: "SET_USER_INFO",
  Info
});

// Set Auth
export const AuthToken = (token) => async dispatch => {
  try {
   await AsyncStorage.setItem('@token' , token,  () => {console.log('Auth Token Saved')});
  } catch (err) {
      console.log({load_err: err})
       dispatch(error(err|| 'ERROR'))
  }
}

// LOGOUT user
export const logoutUser = () => async dispatch => {
  try {
    await AsyncStorage.removeItem('@token' ,  () => {console.log('Auth Token Removed')});
    return dispatch(logout(true))
   } catch (err) {
       console.log({load_err: err})
        dispatch(error(err|| 'ERROR'))
   }
}

// Load user
export const loadUser = () => async dispatch => {
  let token = await AsyncStorage.getItem('@token');
  console.log('User Load Started')
  console.log(token)
  if(token) {
    const config = {
      headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
      }
    }
    try {
      const res = await axios.get('https://dazzling-yosemite-22846.herokuapp.com/api/login', config);
       dispatch(setUserInfo(res.data.user));
       return dispatch(success(res.data));
    } catch (err) {
        console.log({load_err: err})
        dispatch(error(err || 'ERROR'))
    }
  }
}

export const UserLogin = (Email, Password) => async dispatch => {
  try {
    var EndPoint = ApiEndPoint.Login;
    debugger
    let response = await DataAccess.Post(EndPoint, {
      email: Email,
      password: Password
    });
    if (response.error) {
      return dispatch(error(response || "ERROR"));
    } else {
      debugger
      dispatch(getToken(response.token));
      dispatch(AuthToken(response.token));
      dispatch(loadUser());
      return dispatch(success(response));
    }
  } catch (error) {
    dispatch(loading(false));
    dispatch(error("Something Went Wrong" || "ERROR"));
  }
};

export const UserSignup = (Obj) => async dispatch => {
    try {
      var EndPoint = ApiEndPoint.Signup;
      //console.log(EndPoint);
      let response = await DataAccess.Post(EndPoint, {
        email: Obj.Email,
        password: Obj.Password,
        role:Obj.Role
      });
      if (response.error) {
        return dispatch(error(response || "ERROR"));
      } else {
        dispatch(AuthToken(response.token));
        dispatch(loadUser());
        return dispatch(success(response));
      }
    } catch (error) {
        console.log(error)
      dispatch(loading(false));
      dispatch(error("Something Went Wrong" || "ERROR"));
    }
  };
  