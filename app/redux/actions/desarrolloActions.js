// Login

import * as types from '../redux_constants'; 


export const funDesIncrementar = (numero) => ({
  type: types.DESARROLLO_INCREMENT,
  numero: numero,
});