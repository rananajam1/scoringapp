import {DataAccess, Domain} from '../../../../DAL';
import ApiEndPoint from '../../../../ApiEndpoints';
import axios from 'axios';
import {AsyncStorage, Alert} from 'react-native';

export const loading = bool => ({
  type: 'LOADING',
  isLoading: bool,
});

export const success = success => ({
  type: 'TEAM_SUCCESS',
  data: success,
});

export const error = error => ({
  type: 'TEAM_ERROR',
  error,
});

export const setTeamInfo = Info => ({
  type: 'SET_TEAM_INFO',
  Info,
});

export const setAllTeamsInfo = Info => ({
  type: 'SET_ALL_TEAMS_INFO',
  Info,
});

export const LoadTeam = () => async dispatch => {
  try {
    let Endpoint = `/api/team/my-team`;
    let response = await DataAccess.Get(Endpoint);
    console.log(response);
    dispatch(setTeamInfo(response));
    return dispatch(success(response));
  } catch (error) {
    console.log('load team error');
    return dispatch(error(error || 'ERROR'));
  }
};

export const CreateTeam = Obj => async dispatch => {
  try {
      let Endpoint = `/api/team`;
      let response = await DataAccess.PostSecured(Endpoint, Obj);
      console.log(response);
      dispatch(LoadTeam());
      return dispatch(success(response));
  } catch (error) {
    console.log('create team error');
    dispatch(error(error || 'ERROR'));
  }
};

export const GetAllTeams = () => async dispatch => {
  try {
    let Endpoint = `/api/team`;
    let response = await DataAccess.Get(Endpoint);
    console.log(response);
    dispatch(setAllTeamsInfo(response));
    return dispatch(success(response));
  } catch (error) {
    console.log('get all teams error');
    dispatch(error(error || 'ERROR'));
  }
};

export const GetTeamPlayers = () => async dispatch => {
  try {
    let Endpoint = `/api/team/my-team/me/players`;
    let response = await DataAccess.Get(Endpoint);
    console.log(response);
    dispatch(setTeamPlayersInfo(response));
    return dispatch(success(response));
  } catch (error) {
    console.log('get my team players error');
    dispatch(error(error || 'ERROR'));
  }
};

export const AddNewPlayer = Obj => async dispatch => {
  try {
    let Endpoint = `/api/team/invite_player`;
      let response = await DataAccess.PostSecured(Endpoint, Obj);
      console.log(response);
      return dispatch(success(response));
  } catch (error) {
    console.log('invite player in team error');
    return dispatch(error(error || 'ERROR'));
  }
};

