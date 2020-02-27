import * as types from '../redux_constants'; 
// Initial State
const initialState = {
  ver_detalle: false,
  data_detalle: []

};

// Reducers (Modifies The State And Returns A New State)
const detalleReducer = (state = initialState, action) => {
  switch (action.type) {
        // activa Modal Detalles
    case types.DETALLES_VIEW: {
      console.log(action.ver_detalle  + ':VISTA_SALAS');
      return {
        ...state,
        ver_detalle: action.ver_detalle,
      }
    }
        // Guarda Detalle de Sala
    case types.DETALLES_GUARDA_DATA: {
      console.log('GUARDANDO DATA');
      return {
        ...state,
        data_detalle: action.data_detalle,
      }
    }
    case types.DETALLES_GUARDA_DATA_VER: {
      console.log('GUARDANDO DATA + VER DETALLE');
      return {
        ...state,
        ver_detalle: action.ver_detalle,
        data_detalle: action.data_detalle,
      }
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default detalleReducer;