// Login

import * as types from '../redux_constants'; 


export const funIncrementar = (numero) => ({
  type: types.DESARROLLO_INCREMENT,
  numero: numero,
});

export const funDecrementar = (numero) => ({
  type: types.DESARROLLO_DECREMENT,
  numero: numero,
});