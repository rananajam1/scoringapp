import {combineReducers} from 'redux';

export const rootReducer = (
  state = {
    isAuthenticated: false,
    token: {},
    userData: {},
    loading: false,
    logout: false,
    profile: {},
    cricpocket: {},
    player: {},
    team: {}
  },
  action,
) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return{...state, isAuthenticated: true, logout: false, loading: false}
    case 'GET_TOKEN':
      return {...state, token: action.token};
    case 'SET_USER_INFO':
      return {...state, userData: action.Info};
    case 'SET_PROFILE_INFO':
      return {...state, profile: action.Info};
    case 'SET_PLAYER_INFO':
      return {...state, player: action.Info};
    case 'SET_CRICPOCKET_INFO':
      return {...state, cricpocket: action.Info};
    case 'SET_TEAM_INFO':
      return {...state, team: action.Info};
    case 'LOADING':
      return {...state, loading: action.isLoading};
    case 'AUTH_ERROR':
      return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          userData: {},
          profile: {},
          player: {},
          cricpocket: {},
          team: {}
      }
    case 'PROFILE_ERROR':
      return {
          ...state,
          loading: false,
          profile: {}
      }
    case 'CRICPOCKET_ERROR':
      return {
          ...state,
          loading: false,
          cricpocket: {}
      }
    case 'PLAYER_ERROR':
      return {
          ...state,
          loading: false,
          player: {}
      }
    case 'TEAM_ERROR':
      return {
          ...state,
          loading: false,
          team: {}
      }
    case 'LOGOUT':
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        userData: {},
        profile: {},
        cricpocket: {},
        player: {},
        team: {},
        logout: action.isLogedOut
      }
    default:
      return state;  
  }
};

export default combineReducers({
  token: rootReducer,
});
