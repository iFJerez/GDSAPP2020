import * as types from '../redux_constants'; 

// Increase Counter
export function funGuardarObjecion(objecion) {
  return {
    type: types.OBJECION_SAVE,
    objecion: objecion
  }
}

