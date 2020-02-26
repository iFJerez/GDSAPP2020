import * as types from '../redux_constants'; 
// Initial State
const initialState = {
  status: 'Iniciando',
  ms_help: false,
  home_modal: false,
  home_new: 1,
  duo_new: 1,
  salas_new: 1,
  isSuccess: false,
  vista_salas: true,
  dataSala: [],
  isRefresh: false,
  
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VISTA_SALAS: {
      console.log(state.status, 'VISTA_SALAS');
      return {
        ...state,
        vista_salas: action.vista_salas,
        status: 'vista_salas on-off',
      }
    }
    case types.USER_HELP: {
      console.log(state.status, 'USER_HELP');
      return {
        ...state,
        ms_help: action.ms_help,
        status: 'Help on-off',
      }
    }
    case types.USER_MODAL: {
      console.log(state.status, 'USER_MODAL');
      return {
        ...state,
        home_modal: action.home_modal,
        status: 'modal on-off',
      }
    }
    // Login
    case types.USER_HOME_NEW: {
      console.log(state.status, 'USER_HOME_NEW');
      return {
        ...state,
        home_new: action.home_new,
        status: 'Home New',
      }
    }
    case types.USER_DUO_NEW: {
      console.log(state.status, 'USER_DUO_NEW');
      return {
        ...state,
        duo_new: action.duo_new,
        status: 'Duo New',
      }
    }
    case types.USER_SALAS_NEW: {
      console.log(state.status, 'USER_SALAS_NEW');   
      return {
        ...state,
        salas_new: action.salas_new,
        status: 'Salas New',
      }
    }
    case types.USER_GET_SALA_REQUEST: { 
      return {
        ...state,
        isRefresh: action.isRefresh,
        dataSala: null,
        status: 'Data Request',
      }
    }
    case types.USER_GET_SALA_ERROR: { 
      return {
        ...state,
        isRefresh: action.isRefresh,
        dataSala: null,
        status: 'Data Error',
      }
    }
    case types.USER_GET_SALA_OK: { 
      return {
        ...state,
        isRefresh: action.isRefresh,
        dataSala: action.dataSala,
        status: 'Data OK',
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