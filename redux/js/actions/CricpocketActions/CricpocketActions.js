import { DataAccess } from "../../../../DAL";
import ApiEndPoint from "../../../../ApiEndpoints";
import axios from 'axios';
import { AsyncStorage, Alert } from "react-native";


export const loading = bool => ({
  type: "LOADING",
  isLoading: bool
});

export const success = success => ({
  type: "CRICPOCKET_SUCCESS",
  data: success
});

export const error = error => ({
  type: "CRICPOCKET_ERROR",
  error
});


export const setCricpocketInfo = Info => ({
  type: "SET_CRICPOCKET_INFO",
  Info
});


//Current user cricpocket
export const LoadCricpocket = () => async dispatch => {
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
        console.log('Load cricpocket Working')
        const res = await axios.get('https://dazzling-yosemite-22846.herokuapp.com/api/cricpocket/me', config);
         dispatch(setCricpocketInfo(res.data))
         return dispatch(success(res));
    }
  } catch (error) {
    console.log('load cricpocket error')
    dispatch(error("Something Went Wrong" || "ERROR"));
  }
};


//Find a cricpocket Account
export const LoadReceiver = (receiver) => async dispatch => {
  try {
    console.log("Cricpocket find statrted")
    let token = await AsyncStorage.getItem('@token');
    if(token)
    {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            }
        }
        const res = await axios.post('https://dazzling-yosemite-22846.herokuapp.com/api/cricpocket/find', receiver, config)
        return dispatch(success(res));
    }
  } catch (error) {
    console.log('load transaction receiver error')
    return dispatch(error(error || "ERROR"));
  }
};

//Transfer Amount
export const TransferAmount = (Obj) => async dispatch => {
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
        const res = await axios.post('https://dazzling-yosemite-22846.herokuapp.com/api/cricpocket_transactions/transfer', Obj, config);
        dispatch(loading(false));
        return dispatch(success(res));
    }
  } catch (error) {
    console.log('cricpocket transfer error')
    dispatch(error(error || "ERROR"));
  }
};

//Withdraw Amount
export const WithdrawAmount = (Obj) => async dispatch => {
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
        const res = await axios.post('https://dazzling-yosemite-22846.herokuapp.com/api/cricpocket_transactions/withdraw', Obj, config);
        dispatch(loading(false));
        return dispatch(success(res));
    }
  } catch (error) {
    console.log('cricpocket withdraw error')
    dispatch(error(error || "ERROR"));
  }
};

//Deposit Amount
export const DepositAmount = (Obj) => async dispatch => {
  let token = await AsyncStorage.getItem('@token');
  try {
    if(token)
    {
      console.log(token)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            }
        }
        console.log('deposit started')
        const res = await axios.post('https://dazzling-yosemite-22846.herokuapp.com/api/cricpocket_transactions/deposit', Obj, config);
        return dispatch(success(res));
    }
  } catch (error) {
    console.log('cricpocket deposit error')
    dispatch(error(error || "ERROR"));
  }
};

//Create Cricpocket
export const CreateCricpocket = () => async dispatch => {
  let token = await AsyncStorage.getItem('@token');
  try {
    if(token)
    {
      console.log(token)
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token
            }
        }
        console.log('cricpocket creation started')
        const res = await axios.put('http://localhost:4000/api/cricpocket', config);
        return dispatch(success(res));
    }
  } catch (error) {
    console.log('create cricpocket error')
    dispatch(error(error || "ERROR"));
  }
};


  