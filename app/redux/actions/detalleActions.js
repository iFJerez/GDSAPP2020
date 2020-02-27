import * as types from '../redux_constants'; 

// Increase Counter
export function funVerDetalle(ver_detalle) {
  return {
    type: types.DETALLES_VIEW,
    ver_detalle: ver_detalle
  }
}
export function funGuardaDetalle(data_detalle) {
  return {
    type: types.DETALLES_GUARDA_DATA,
    data_detalle: data_detalle
  }
}
export function funGuardaDetalleVer(data_detalle, ver_detalle) {
  return {
    type: types.DETALLES_GUARDA_DATA_VER,
    data_detalle: data_detalle,
    ver_detalle: ver_detalle
  }
}



