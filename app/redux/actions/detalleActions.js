import * as types from '../redux_constants'; 


export function funGuardaDetalle(data_detalle) {
  return {
    type: types.DETALLES_GUARDA_DATA,
    data_detalle: data_detalle
  }
}



