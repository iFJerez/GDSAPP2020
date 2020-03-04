import * as types from '../redux_constants'; 
// Initial State
const initialState = {
  data_detalle: []

};

// Reducers (Modifies The State And Returns A New State)
const detalleReducer = (state = initialState, action) => {
  switch (action.type) {

        // Guarda Detalle de Sala
    case types.DETALLES_GUARDA_DATA: {
      console.log('GUARDANDO DATA');
      return {
        ...state,
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