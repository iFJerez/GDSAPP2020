import * as types from '../redux_constants'; 

// Guarda la objecion o la actualiza
export function funGuardarEnvio(objecion) {
  return {
    type: types.ENVIO_SAVE,
    objecion: objecion
  }
}

export function funEliminarEnvio(objecion) {
  return {
    type: types.ENVIO_DELETE,
    objecion: objecion
  }
}

export function funEnviarEnvios() {
  console.log('enviando')
  return {
    type: types.ENVIO_SEND
  }
}

