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
  dataCadena: [],
  dataTarea: [],
  dataHome: [],
  isRefresh: false,
  
};

// Reducers (Modifies The State And Returns A New State)
const userReducer = (state = initialState, action) => {
  switch (action.type) {


    case types.SALAS_CAMBIA_ESTADO: {
      console.log(state.status, 'SALAS_CAMBIA_ESTADO');

      let dsOrdernar= state.dataSala;
      const newData =  dsOrdernar.salas.map(v => {
        if (v.id_sala === action.id_sala) {
            v.estado = action.estado;
        }
        return v
      })
      obj = Object.assign({...dsOrdernar})
      obj.salas = newData

            return   {...state,   status: 'Cambio estado', dataSala: obj}
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
    case types.USER_GET_CADENA_REQUEST: { 
      return {
        ...state,
        isRefresh: action.isRefresh,
        dataCadena: null,
        status: 'CADENA Request',
      }
    }
    case types.USER_GET_CADENA_ERROR: { 
      return {
        ...state,
        isRefresh: action.isRefresh,
        dataCadena: null,
        status: 'CADENA Error',
      }
    }
    case types.USER_GET_CADENA_OK: { 
      return {
        ...state,
        isRefresh: action.isRefresh,
        dataCadena: action.dataCadena,
        status: 'CADENA OK',
      }
    }
    case types.USER_GET_HOME_REQUEST: { 
      return {
        ...state,
        isRefresh: action.isRefresh,
        dataHome: null,
        status: 'HOME Request',
      }
    }
    case types.USER_GET_HOME_ERROR: { 
      return {
        ...state,
        isRefresh: action.isRefresh,
        dataHome: null,
        status: 'HOME Error',
      }
    }
    case types.USER_GET_HOME_OK: { 
      return {
        ...state,
        isRefresh: action.isRefresh,
        dataHome: action.dataHome,
        status: 'HOME OK',
      }
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default userReducer;