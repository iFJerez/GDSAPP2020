import { act } from 'react-test-renderer';
import * as types from '../redux_constants'; 
// Initial State
const initialState = {
  loggedIn: false,
  usuario: '',
  token: '',
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case types.LOGIN_ON: {
      return {
        // State
        ...state,
        // Redux Store
        usuario: action.usuario,
        token: action.token,
        loggedIn: action.loggedIn,
      }
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default authReducer;