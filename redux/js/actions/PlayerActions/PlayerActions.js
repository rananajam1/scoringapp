import { DataAccess, Domain } from "../../../../DAL";
import ApiEndPoint from "../../../../ApiEndpoints";
import axios from 'axios';


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

export const setRequestInfo = Info => ({
  type: "SET_REQUEST_INFO",
  Info
});

export const setAllPlayersInfo = Info => ({
  type: "SET_ALL_PLAYERS_INFO",
  Info
});


export const LoadPlayer = () => async dispatch => {
  try {
    let Endpoint = `/api/player/me`;
    let response = await DataAccess.Get(Endpoint);
    console.log(response);
    dispatch(setPlayerInfo(response));
    return dispatch(success(response));
  } catch (error) {
    console.log('load player error')
    return dispatch(error(error || "ERROR"));
  }
};

export const CreatePlayer = (Obj) => async dispatch => {
    try {
      let Endpoint = `/api/player`;
      let response = await DataAccess.PostSecured(Endpoint, Obj);
      dispatch(LoadPlayer());
      return dispatch(success(response));
    } catch (error) {
      console.log('create player error')
      dispatch(error(error || "ERROR"));
    }
  };

// Get all players
  export const GetAllPlayers = () => async dispatch => {
    try {
        let Endpoint = `/api/player`;
        let response = await DataAccess.Get(Endpoint);
        dispatch(setAllPlayersInfo(response));
        return dispatch(success(response));
      
    } catch (error) {
      console.log('get all player error')
      dispatch(error(error || "ERROR"));
    }
  };

  export const AcceptRequest = (obj) => async dispatch => {
    try {
        let Endpoint = `/api/player/requests/${obj}/accept`;
        let response = await DataAccess.Get(Endpoint);
        console.log(response)
        return dispatch(success(response));
    } catch (error) {
      console.log('get all player error')
      dispatch(error(error || "ERROR"));
    }
  };


  export const FindPlayer = (Obj) => async dispatch => {
    try {
      let Endpoint = `/api/player/find`;
      console.log(Obj)
      let response = await DataAccess.PostSecured(Endpoint, Obj);
      console.log(response)
      return dispatch(success(response));
    } catch (error) {
      console.log('find player error')
      dispatch(error(error || "ERROR"));
    }
  };
  