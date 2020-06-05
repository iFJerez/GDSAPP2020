import * as types from '../redux_constants'; 
// Initial State
const initialState = {
  status: 'Iniciando salas',
  sala_orden_asc: true,
  sala_orden_key: 'fechaHora',
  data_detalle: []
  
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case types.SALAS_ORDEN_KEYS: {
      console.log(state.status, 'SALAS_ORDEN_KEYS');
      return {
        ...state,
        sala_orden_key: action.sala_orden_key,
        status: 'Ordenando Keys',
      }
    }
    case types.SALAS_ORDEN_ASC: {
      console.log(state.status, 'SALAS_ORDEN_ASC');
      return {
        ...state,
        sala_orden_asc: action.sala_orden_asc,
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