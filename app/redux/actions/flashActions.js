import * as types from '../redux_constants'; 

// Increase Counter
export function funSalaVerDetalle(ver_sala_detalle) {
  return {
    type: types.SALA_DETALLES_VIEW,
    ver_sala_detalle: ver_sala_detalle
  }
}

export function funSalaVerDetalleFoto(ver_sala_detalle_foto, data) {
  return {
    type: types.SALA_DETALLES_VIEW_FOTO,
    ver_sala_detalle_foto,
    data
  }
}

export function funTareaVerDetalle(ver_tarea_detalle) {
  return {
    type: types.TAREA_DETALLES_VIEW,
    ver_tarea_detalle: ver_tarea_detalle
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

export function funMostrarPreviewCamera(visible, foto) {
  console.log(foto)
  return {
    type: types.PREVIEW_DETALLE_FOTO_CAMARA,
    visible: visible,
    foto: foto
  }
}


