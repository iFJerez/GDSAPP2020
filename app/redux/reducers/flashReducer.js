import * as types from '../redux_constants'; 
import { AccessibilityInfo, ActivityIndicatorComponent } from 'react-native';
// Initial State
const initialState = {
  ver_sala_detalle: false,
  ver_tarea_detalle: false,
  ver_activity: false,
  ver_sala_filtro: false,
  ver_envio: false,
  ver_sala_detalle_foto: false,
  ver_sala_detalle_preview_foto: false,
  envio_seleccionado_data: null,
  preview_detalle_camara: {
    foto: null,
    visible: false
  }
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
        envio_seleccionado_data: {...action.data}
      }
    }
    case types.SALA_DETALLES_VIEW_PREVIEW_FOTO: {
      console.log('SALA_DETALLES_VIEW_PREVIEW_FOTO');

      return {
        ...state,
        ver_sala_detalle_preview_foto: action.ver_sala_detalle_preview_foto,
        envio_seleccionado_data: {...action.data}
      }
    }
    case types.PREVIEW_DETALLE_FOTO_CAMARA: {
      console.log('PREVIEW_DETALLE_FOTO_CAMARA');
      return {
        ...state,
        preview_detalle_camara: {
          foto: action.foto,
          visible: action.visible
        }
      }
    }
    default: {
      return state;
    }
  }
};

// Exports
export default flashReducer;