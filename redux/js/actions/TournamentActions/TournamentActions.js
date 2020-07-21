import { DataAccess, Domain } from "../../../../DAL";
import ApiEndPoint from "../../../../ApiEndpoints";
import axios from 'axios';
import { AsyncStorage } from "react-native";


export const loading = bool => ({
  type: "LOADING",
  isLoading: bool
});

export const success = success => ({
  type: "TOURNAMENT_SUCCESS",
  data: success
});

export const error = error => ({
  type: "TOURNAMENT_ERROR",
  error
});


export const setTOURNAMENTInfo = Info => ({
  type: "SET_TOURNAMENT_INFO",
  Info
});

export const setAllTournamentsInfo = Info => ({
  type: "SET_ALL_TOURNAMENTES_INFO",
  Info
});

export const LoadTournament = () => async dispatch => {
  try {
    let Endpoint = `/api/tournament/my`;
      let response = await DataAccess.Get(Endpoint);
      console.log(response);
      dispatch(setMatchInfo(response))
      return dispatch(success(response));
  } catch (error) {
    console.log('load tournament error')
    return dispatch(error(error || "ERROR"));
  }
};


export const GetAllTournaments = () => async dispatch => {
    try {
      let Endpoint = `/api/tournament`;
      let response = await DataAccess.Get(Endpoint);
      console.log(response);
      dispatch(setAllMatchesInfo(response))
      return dispatch(success(response));
    } catch (error) {
      console.log('get all tournaments error')
      dispatch(error(error || "ERROR"));
    }
  };

  export const CreateTournament = obj => async dispatch => {
    try {
      let Endpoint = `/api/tournament/create`;
      let response = await DataAccess.PostSecured(Endpoint, obj);
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
      return dispatch(success(response));
    } catch (error) {
      console.log('join match error');
      return error;
    }
  };

