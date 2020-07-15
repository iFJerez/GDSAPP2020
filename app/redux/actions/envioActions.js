import * as types from '../redux_constants'; 
import getBase64 from '../../herramientas/getBase64';
import RNFS from 'react-native-fs';

// Guarda la objecion o la actualiza
export function funGuardarEnvio(envio) {
  return {
    type: types.ENVIO_SAVE,
    envio: envio
  }
}

export function funEliminarEnvio(envio) {
  console.log("eliminando:", envio)
  return {
    
    type: types.ENVIO_DELETE,
    envio: envio
  }
}

export function funEliminarFotoEnvio(envio) {
  console.log("eliminando foto:", envio)
  return {
    type: types.ENVIO_DELETE_FOTO,
    envio: envio
  }
}

export function funAgregrFotoEnvio(envio, foto) {
  return async (dispatch) => {
    const uri = await getBase64(foto.uri)
    const fotoNew = {...foto, uri: uri}
    dispatch(funGuardarEnvio({...envio, foto: fotoNew}))

    //Ver si conviene hacer el unlink con el uri que genera RNCamera
    //Primero investigar bien cómo hace la autogestión RNCamera de la caché
    //Ya que también habría que hacer el unlink de cada foto tomada no guardada
  }
}

export function funEnviarEnvios() {
  console.log('enviando')
  return {
    type: types.ENVIO_SEND
  }
}

