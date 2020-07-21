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
    team: {},
    myVenues: {},
    myMatches: {},
    innings: {},
    allVenues: {}, 
    allPlayers: {}, 
    allTeams: {}, 
    allMatches: {}, 
    requests : {},
    tournament : {},
    allTournaments : {},
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
    case 'SET_ALL_PLAYERS_INFO':
      return {...state, allPlayers: action.Info};
    case 'SET_TOURNAMENT_INFO':
      return {...state, tournament: action.Info};
    case 'SET_ALL_TOURNAMENTS_INFO':
      return {...state, allTournaments: action.Info};
    case 'SET_CRICPOCKET_INFO':
      return {...state, cricpocket: action.Info};
    case 'SET_TEAM_INFO':
      return {...state, team: action.Info};
    case 'SET_REQUEST_INFO':
      return {...state, requests: action.Info};
    case 'SET_ALL_TEAMS_INFO':
      return {...state, allTeams: action.Info};
    case 'SET_MATCH_INFO':
      return {...state, myMatches: action.Info};
    case 'SET_ALL_MATCHES_INFO':
      return {...state, allMatches: action.Info};
    case 'SET_INNINGS_INFO':
      return {...state, innings: action.Info};
    case 'SET_VENUE_INFO':
      return {...state, myVenues: action.Info};
    case 'SET_ALL_VENUE_INFO':
      return {...state, allVenues: action.Info};
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
          team: {},
          myVenues: {},
          myMatches: {},
          innings: {},
          allVenues: {}, 
          allPlayers: {}, 
          allTeams: {}, 
          allMatches: {}, 
          requests: {},
          tournament: {},
          allTournaments: {},
      }
    case 'PROFILE_ERROR':
      return {
          ...state,
          loading: false,
          profile: {}
      }
    // case 'VENUE_ERROR':
    //   return {
    //       ...state,
    //       loading: false,
    //       myVenues: {},
    //       allVenues: {}
    //   }
    // case 'TOURNAMENT_ERROR':
    //   return {
    //       ...state,
    //       loading: false,
    //       myVenues: {},
    //       allVenues: {}
    //   }
    case 'REQUEST_ERROR':
      return {
          ...state,
          loading: false,
          requests: {}
      }
    case 'CRICPOCKET_ERROR':
      return {
          ...state,
          loading: false,
          cricpocket: {}
      }
    // case 'PLAYER_ERROR':
    //   return {
    //       ...state,
    //       loading: false,
    //       player: {},
    //       allPlayers: {}
    //   }
    // case 'TEAM_ERROR':
    //   return {
    //       ...state,
    //       loading: false,
    //       team: {},
    //       allTeams: {}
    //   }
    // case 'MATCH_ERROR':
    //   return {
    //       ...state,
    //       loading: false,
    //       myMatches: {},
    //       allMatches: {}
    //   }
    case 'INNINGS_ERROR':
      return {
          ...state,
          loading: false,
          innings: {}
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
        myVenues: {},
        myMatches: {},
        innings: {},
        allMatches: {},
        allPlayers: {},
        allTeams: {},
        allVenues: {},
        tournament: {},
        allTournaments: {}, 
        logout: action.isLogedOut
      }
    default:
      return state;  
  }
};

export default combineReducers({
  token: rootReducer,
});
