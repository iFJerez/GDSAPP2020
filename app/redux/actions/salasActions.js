// Login

import * as types from '../redux_constants'; 


export const funSalasOrdenKeys = (sala_orden_key) => (
  {
  type: types.SALAS_ORDEN_KEYS,
  sala_orden_key: sala_orden_key,
});

export const funSalasOrdenAscendencia = (sala_orden_asc) => (
  {
  type: types.SALAS_ORDEN_ASC,
  sala_orden_asc: sala_orden_asc,
});

export function funSalaGuardaDetalle(data_detalle) {
  return {
    type: types.SALA_DETALLES_GUARDA_DATA,
    data_detalle: data_detalle
  }
}

  

