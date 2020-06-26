import * as types from '../redux_constants'; 

// Guarda la objecion o la actualiza
export function funGuardarObjecion(objecion) {
  return {
    type: types.OBJECION_SAVE,
    objecion: objecion
  }
}

export function funEliminarObjecion(objecion) {
  return {
    type: types.OBJECION_DELETE,
    objecion: objecion
  }
}

export function funEnviarObjecion() {
  console.log('envio la objecion')
  return {
    type: types.OBJECION_SEND
  }
}

