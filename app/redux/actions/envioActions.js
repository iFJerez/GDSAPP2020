import * as types from '../redux_constants'; 

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

export function funEnviarEnvios() {
  console.log('enviando')
  return {
    type: types.ENVIO_SEND
  }
}

