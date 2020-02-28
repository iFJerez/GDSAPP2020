import * as types from '../redux_constants'; 
// Initial State
const initialState = {
  ver_detalle: false,

};

// Reducers (Modifies The State And Returns A New State)
const flashReducer = (state = initialState, action) => {
  switch (action.type) {

        // Guarda Detalle de Sala
    case types.DETALLES_VIEW: {
      console.log('VER DETALLE');
      return {
        ...state,
        ver_detalle: action.ver_detalle,
      }
    }
  
    default: {
      return state;
    }
  }
};

// Exports
export default flashReducer;