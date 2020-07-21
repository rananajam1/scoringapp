import { DataAccess, Domain } from "../../../../DAL";
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
    let Endpoint = `/api/match/my`;
      let response = await DataAccess.Get(Endpoint);
      console.log({mymatch: response});
      dispatch(setMatchInfo(response))
      return dispatch(success(response));
  } catch (error) {
    console.log('load venue error')
    return dispatch(error(error || "ERROR"));
  }
};


export const GetAllMatches = () => async dispatch => {
    try {
      let Endpoint = `/api/match`;
      let response = await DataAccess.Get(Endpoint);
      console.log(response);
      dispatch(setAllMatchesInfo(response))
      return dispatch(success(response));
    } catch (error) {
      console.log('get all matches error')
      dispatch(error(error || "ERROR"));
    }
  };

  export const CreateMatch = obj => async dispatch => {
    try {
      let Endpoint = `/api/match/create`;
      let response = await DataAccess.PostSecured(Endpoint, obj);
      dispatch(setMatchInfo(response))
      return dispatch(success(response));
    } catch (error) {
      console.log('create match error');
      return error;
    }
  };
  
  export const JoinMatch = Id => async dispatch => {
    console.log(Id)
    try {
      let Endpoint = `/api/match/join`;
      let response = await DataAccess.PostSecured(Endpoint, Id);
      console.log(response)
      dispatch(setMatchInfo(response))
      return dispatch(success(response));
    } catch (error) {
      console.log('join match error');
      return error;
    }
  };

  export const StartMatch = (Obj) => async dispatch => {
    try {
      console.log(Id)
      let Endpoint = `/api/match/${Obj.match_id}/start`;
      let response = await DataAccess.Post(Endpoint, Obj.winner);
      console.log({StartData: response})
      dispatch(setMatchInfo(response))
      return dispatch(success(response));
    } catch (error) {
      console.log('start match error');
      return error;
    }
  };

