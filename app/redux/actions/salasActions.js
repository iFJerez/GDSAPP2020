// Login

import * as types from '../redux_constants'; 


export function funSalaGuardaDetalle(data_detalle) {
  return {
    type: types.SALA_DETALLES_GUARDA_DATA,
    data_detalle: data_detalle
  }
}

  

