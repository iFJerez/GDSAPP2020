// Login

import * as types from '../redux_constants'; 


export const funTareaOrdenKeys = (tarea_orden_key) => (
  {
  type: types.TAREA_ORDEN_KEYS,
  tarea_orden_key: tarea_orden_key,
});

export const funTareaOrdenAscendencia = (tarea_orden_asc) => (
  {
  type: types.TAREA_ORDEN_ASC,
  tarea_orden_asc: tarea_orden_asc,
});



export function funTareaGuardaDetalle(data_detalle) {
  return {
    type: types.TAREA_DETALLES_GUARDA_DATA,
    data_detalle: data_detalle
  }
}


