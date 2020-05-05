import * as types from '../redux_constants'; 
// Initial State
const initialState = {
  ver_detalle: false,
  ver_activity: false,
  ver_sala_filtro: false,

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
    case types.VER_ACTIVITY: {
      console.log('VER ACTIVITY');
      return {
        ...state,
        ver_activity: action.ver_activity,
      }
    }
    case types.VER_SALA_FILTRO: {
      console.log('VER SALA FILTRO');
      return {
        ...state,
        ver_sala_filtro: action.ver_sala_filtro,
      }
    }
  
    default: {
      return state;
    }
  }
};

// Exports
export default flashReducer;