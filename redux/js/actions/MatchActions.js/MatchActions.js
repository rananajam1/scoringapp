import { DataAccess } from "../../../../DAL";
import ApiEndPoint from "../../../../ApiEndpoints";
import axios from 'axios';
import { AsyncStorage } from "react-native";


export const loading = bool => ({
  type: "LOADING",
  isLoading: bool
});

export const success = success => ({
  type: "MATCH_SUCCESS",
  data: success
});

export const error = error => ({
  type: "MATCH_ERROR",
  error
});


export const setMatchInfo = Info => ({
  type: "SET_MATCH_INFO",
  Info
});

export const setAllMatchesInfo = Info => ({
  type: "SET_ALL_MATCHES_INFO",
  Info
});

export const LoadMyMatches = () => async dispatch => {
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
        console.log('Load Venue Working')
        const res = await axios.get('http://localhost:4000/api/match/my', config);
         dispatch(setMatchInfo(res.data))
         return dispatch(success(res));
    }
  } catch (error) {
    console.log('load venue error')
    return dispatch(error(error || "ERROR"));
  }
};


export const GetAllMatches = () => async dispatch => {
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
            const res = await axios.get('http://localhost:4000/api/match', config)
            console.log(res.data)
            dispatch(setAllMatchesInfo(res.data))
            return dispatch(success(res));
        }
    } catch (error) {
      console.log('get all matches error')
      dispatch(error(error || "ERROR"));
    }
  };


