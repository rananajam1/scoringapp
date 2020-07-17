import { DataAccess } from "../../../../DAL";
import ApiEndPoint from "../../../../ApiEndpoints";
import axios from 'axios';
import { AsyncStorage } from "react-native";


export const loading = bool => ({
  type: "LOADING",
  isLoading: bool
});

export const success = success => ({
  type: "PROFILE_SUCCESS",
  data: success
});

export const error = error => ({
  type: "PROFILE_ERROR",
  error
});


export const setProfileInfo = Info => ({
  type: "SET_PROFILE_INFO",
  Info
});



export const LoadProfile = () => async dispatch => {
  try {
    let token = await AsyncStorage.getItem('@token');
    if(token)
    {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            }
        }
        const res = await axios.get('https://dazzling-yosemite-22846.herokuapp.com/api/profile/me', config);
         dispatch(setProfileInfo(res.data))
         return dispatch(success(res));
    }
  } catch (error) {
    console.log('load profile error')
    return dispatch(error(error || "ERROR"));
  }
};

export const CreateProfile = (Obj) => async dispatch => {
    try {
        let token = await AsyncStorage.getItem('@token');
        if(token)
        {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token':  token
                }
            }
            console.log('test')
            const res = await axios.post('https://dazzling-yosemite-22846.herokuapp.com/api/profile/new', Obj, config);
            console.log('test 1');
            console.log(res.data)
             dispatch(setProfileInfo(res.data))
             return dispatch(success(res));
        }
    } catch (error) {
      cconsole.log('create profile error')
      dispatch(error(error || "ERROR"));
    }
  };
  