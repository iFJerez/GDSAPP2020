import * as types from '../redux_constants'; 
// Initial State
const initialState = {
  ver_sala_detalle: false,
  ver_tarea_detalle: false,
  ver_activity: false,
  ver_sala_filtro: false,
  ver_envio: false,
  ver_sala_detalle_foto: false
};

// Reducers (Modifies The State And Returns A New State)
const flashReducer = (state = initialState, action) => {
  switch (action.type) {

        // Guarda Detalle de Sala
    case types.SALA_DETALLES_VIEW: {
      console.log('VER SALA DETALLE');
      return {
        ...state,
        ver_sala_detalle: action.ver_sala_detalle,
      }
    }
    case types.TAREA_DETALLES_VIEW: {
      console.log('VER TAREA DETALLE');
      return {
        ...state,
        ver_tarea_detalle: action.ver_tarea_detalle,
      }
    }
    case types.ENVIO_VIEW: {
      console.log('VER ENVIO');
      return {
        ...state,
        ver_envio: action.ver_envio,
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
    case types.SALA_DETALLES_VIEW_FOTO: {
      console.log('VER SALA DETALLE FOTO');
      return {
        ...state,
        ver_sala_detalle_foto: action.ver_sala_detalle_foto,
      }
    }
    default: {
      return state;
    }
  }
};

// Exports
export default flashReducer;