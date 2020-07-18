import { DataAccess, Domain } from "../../../../DAL";
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
    let Endpoint = `/api/profile/me`;
    let response = await DataAccess.Get(Endpoint);
    console.log(response);
    dispatch(setProfileInfo(response));
    return dispatch(success(response));
  } catch (error) {
    console.log('load profile error')
    return dispatch(error(error || "ERROR"));
  }
};

export const CreateProfile = (Obj) => async dispatch => {
    try {
        let Endpoint = `/api/profile/new`;
        let response = await DataAccess.PostSecured(Endpoint, Obj);
        dispatch(LoadProfile())
        return dispatch(success(response));
    } catch (error) {
      cconsole.log('create profile error')
      dispatch(error(error || "ERROR"));
    }
  };
  