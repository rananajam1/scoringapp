import { DataAccess } from "../../../../DAL";
import ApiEndPoint from "../../../../ApiEndpoints";
import axios from 'axios';
import { AsyncStorage } from "react-native";


export const loading = bool => ({
  type: "LOADING",
  isLoading: bool
});

export const success = success => ({
  type: "TEAM_SUCCESS",
  data: success
});

export const error = error => ({
  type: "TEAM_ERROR",
  error
});


export const setTeamInfo = Info => ({
  type: "SET_TEAM_INFO",
  Info
});



export const LoadTeam = () => async dispatch => {
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
        const res = await axios.get('https://dazzling-yosemite-22846.herokuapp.com/api/team/my-team', config);
        console.log({LoadTeam: res.data})
         dispatch(setTeamInfo(res.data))
         return dispatch(success(res));
    }
  } catch (error) {
    return dispatch(error(error || "ERROR"));
  }
};

export const CreateTeam = (Obj) => async dispatch => {
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
            const res = await axios.post('https://dazzling-yosemite-22846.herokuapp.com/api/team', Obj, config)
            console.log({CreateTeam: res.data})
             dispatch(setTeamInfo(res.data))
             return dispatch(success(res));
        }
    } catch (error) {
      dispatch(loading(false));
      dispatch(error(error || "ERROR"));
    }
  };


export const GetAllTeams = () => async dispatch => {
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
            const res = await axios.get('https://dazzling-yosemite-22846.herokuapp.com/api/team', config)
            console.log({AllTeams: res.data})
             return dispatch(success(res));
        }
    } catch (error) {
      dispatch(loading(false));
      dispatch(error(error || "ERROR"));
    }
  };
  