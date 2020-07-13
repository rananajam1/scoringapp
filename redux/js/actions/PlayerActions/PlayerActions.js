import { DataAccess } from "../../../../DAL";
import ApiEndPoint from "../../../../ApiEndpoints";
import axios from 'axios';
import { AsyncStorage } from "react-native";


export const loading = bool => ({
  type: "LOADING",
  isLoading: bool
});

export const success = success => ({
  type: "PLAYER_SUCCESS",
  data: success
});

export const error = error => ({
  type: "PLAYER_ERROR",
  error
});


export const setPlayerInfo = Info => ({
  type: "SET_PLAYER_INFO",
  Info
});



export const LoadPlayer = () => async dispatch => {
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
        const res = await axios.get('https://dazzling-yosemite-22846.herokuapp.com/api/player/me', config);
        console.log({LoadPlayer: res.data})
         dispatch(setPlayerInfo(res.data))
         return dispatch(success(res));
    }
  } catch (error) {
    dispatch(loading(false));
    return dispatch(error(error || "ERROR"));
  }
};

export const CreatePlayer = (Obj) => async dispatch => {
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
            const res = await axios.post('https://dazzling-yosemite-22846.herokuapp.com/api/player', Obj, config);
             dispatch(setPlayerInfo(res.data))
             return dispatch(success(res));
        }
    } catch (error) {
      dispatch(loading(false));
      dispatch(error(error || "ERROR"));
    }
  };

// Get all players
  export const GetAllPlayers = () => async dispatch => {
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
            const res = await axios.get('https://dazzling-yosemite-22846.herokuapp.com/api/players', config)
            console.log({AllTeams: res.data})
             return dispatch(success(res));
        }
    } catch (error) {
      dispatch(loading(false));
      dispatch(error(error || "ERROR"));
    }
  };
  