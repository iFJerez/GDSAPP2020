import * as types from '../redux_constants'; 

// Increase Counter
export function funVerDetalle(ver_detalle) {
  return {
    type: types.DETALLES_VIEW,
    ver_detalle: ver_detalle
  }
}

export function funVerActivity(ver_activity) {
  return {
    type: types.VER_ACTIVITY,
    ver_activity: ver_activity
  }
}




