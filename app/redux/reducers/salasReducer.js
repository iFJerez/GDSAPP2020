import * as types from '../redux_constants'; 
// Initial State
const initialState = {
  status: 'Iniciando salas',
  data_detalle: []
  
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
   
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
    case types.SALA_DETALLES_GUARDA_DATA: {
      console.log('GUARDANDO DATA');
      return {
        ...state,
        data_detalle: action.data_detalle,
      }
    }
    default: {
      return state;
    }
  }
};

// Exports
export default authReducer;