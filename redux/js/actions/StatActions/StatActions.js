import { DataAccess, Domain } from "../../../../DAL";
import ApiEndPoint from "../../../../ApiEndpoints";
import axios from 'axios';
import { AsyncStorage } from "react-native";


export const loading = bool => ({
  type: "LOADING",
  isLoading: bool
});

export const success = success => ({
  type: "VENUE_SUCCESS",
  data: success
});

export const error = error => ({
  type: "VENUE_ERROR",
  error
});


export const setVenueInfo = Info => ({
  type: "SET_VENUE_INFO",
  Info
});

export const setAllVenueInfo = Info => ({
  type: "SET_ALL_VENUE_INFO",
  Info
});



export const LoadTeamStats = () => async dispatch => {
  try {
    let Endpoint = `/api/venue/my`;
    let response = await DataAccess.Get(Endpoint);
    console.log(response);
    dispatch(setVenueInfo(response));
    return dispatch(success(response));
  } catch (error) {
    console.log('load venue error')
    return dispatch(error(error || "ERROR"));
  }
};

export const LoadPlayerStats = (Obj) => async dispatch => {
    try {
      let Endpoint = `/api/venue`;
      let response = await DataAccess.PostSecured(Endpoint, Obj);
      return dispatch(success(response));
    } catch (error) {
      console.log('add venue error')
      dispatch(error(error || "ERROR"));
    }
  };


export const GetAllVenues = () => async dispatch => {
    try {
      let Endpoint = `/api/venue`;
      let response = await DataAccess.Get(Endpoint);
      console.log(response);
      dispatch(setAllVenueInfo(response));
      return dispatch(success(response));
    } catch (error) {
      console.log('get all venues error')
      dispatch(error(error || "ERROR"));
    }
  };


