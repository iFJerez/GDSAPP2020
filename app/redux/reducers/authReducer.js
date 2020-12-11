import { act } from 'react-test-renderer';
import * as types from '../redux_constants'; 
// Initial State
const initialState = {
  loggedIn: false,
  usuario: '',
  token: '',
  id_cliente: '',
  id_usuario: '',
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case types.LOGIN_OK: { 
      return {
        ...state,
        loggedIn: action.loggedIn,
        usuario: action.usuario,
        token: action.token,
        id_cliente: action.id_cliente,
        id_usuario: action.id_usuario
      }
    }
    case types.LOGIN_ERROR: { 
      return {
        ...state,
        loggedIn: false,
      }
    }
    case types.LOGIN_REQUEST: { 
      return {
        ...state,
        loggedIn: false,
      }
    }
    case types.LOGIN_OFF: { 
      return {
        ...state,
        loggedIn: action.loggedIn,
        usuario: null,
        token: null,
        id_cliente: null
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