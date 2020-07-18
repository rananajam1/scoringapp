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



export const LoadMyVenues = () => async dispatch => {
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
        const res = await axios.get(Domain+'/api/venue/my', config);
        console.log({LoadVenue: res.data})
         dispatch(setVenueInfo(res.data))
         return dispatch(success(res));
    }
  } catch (error) {
    console.log('load venue error')
    return dispatch(error(error || "ERROR"));
  }
};

export const CreateVenue = (Obj) => async dispatch => {
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
            const res = await axios.post(Domain+'/api/venue', Obj, config)
            console.log({CreateVenue: res.data})
            dispatch(LoadMyVenues());
            return dispatch(success(res));
        }
    } catch (error) {
      console.log('add venue error')
      dispatch(error(error || "ERROR"));
    }
  };


export const GetAllVenues = () => async dispatch => {
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
            const res = await axios.get(Domain+'/api/venue', config)
            dispatch
            console.log({AllVenues: res.data})
            dispatch(setAllVenueInfo(res.data))
            return dispatch(success(res));
        }
    } catch (error) {
      console.log('get all venues error')
      dispatch(error(error || "ERROR"));
    }
  };


