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
  dataSala: [],
  dataTarea: [],
  isRefresh: false,
  orden_asc: true,
  orden_key: 'fechaHora',
  
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
   
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
        dataTarea: null,
        status: 'Data Request',
      }
    }
    case types.USER_GET_SALA_ERROR: { 
      return {
        ...state,
        isRefresh: action.isRefresh,
        dataSala: null,
        dataTarea: null,
        status: 'Data Error',
      }
    }
    case types.USER_GET_SALA_OK: { 
      return {
        ...state,
        isRefresh: action.isRefresh,
        dataSala: action.dataSala,
        dataTarea: action.dataTarea,
        status: 'Data OK',
      }
    }
       
    case types.USER_ORDEN_KEYS: {
      console.log(state.status, 'USER_ORDEN_KEYS');
      return {
        ...state,
        orden_key: action.orden_key,
        status: 'Ordenando Keys',
      }
    }
    case types.USER_ORDEN_ASC: {
      console.log(state.status, 'USER_ORDEN_ASC');
      return {
        ...state,
        orden_asc: action.orden_asc,
        status: 'Ordenando Asc',
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