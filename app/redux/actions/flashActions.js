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

export function funVerSalaFiltro(ver_sala_filtro) {
  return {
    type: types.VER_SALA_FILTRO,
    ver_sala_filtro: ver_sala_filtro
  }
}

export function funVerEnvio(ver_envio) {
  return {
    type: types.ENVIO_VIEW,
    ver_envio: ver_envio
  }
}



