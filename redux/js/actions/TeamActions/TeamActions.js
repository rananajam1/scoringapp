import { DataAccess } from "../../../../DAL";
import ApiEndPoint from "../../../../ApiEndpoints";
import axios from 'axios';
import { AsyncStorage, Alert } from "react-native";


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
        console.log('Load Team Working')
        const res = await axios.get('https://dazzling-yosemite-22846.herokuapp.com/api/team/my-team', config);
        console.log({LoadTeam: res.data})
         dispatch(setTeamInfo(res.data))
         return dispatch(success(res));
    }
  } catch (error) {
    console.log('load team error')
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
      console.log('create team error')
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
      console.log('get all teams error')
      dispatch(error(error || "ERROR"));
    }
  };


export const GetTeamPlayers = () => async dispatch => {
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
            const res = await axios.get('http://localhost:4000/api/team/my-team/me/players', config)
            console.log({AllTeamPlayers: res.data})
             return dispatch(success(res));
        }
    } catch (error) {
      console.log('get my team players error')
      dispatch(error(error || "ERROR"));
    }
  };
  
export const AddNewPlayer = (id) => async dispatch => {
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
            console.log(id)
            const res = await axios.get('http://localhost:4000/api/team/invite_player', id, config)
            console.log({AddTeamPlayer: res.data})
             return dispatch(success(res));
        }
    } catch (error) {
      console.log('invite player in team error')
      return dispatch(error(error || "ERROR"));
    }
  };

export const CreateMatch = (obj) => async dispatch => {
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
            console.log(obj)
            const res = await axios.post('http://localhost:4000/api/match/create', obj, config)
            console.log({CreateMatch: res.data})
             return dispatch(success(res));
        }
    } catch (error) {
      console.log('create match error')
      return dispatch(error(error || "ERROR"));
    }
  };
  