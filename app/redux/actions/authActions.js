// Login

import * as types from '../redux_constants'; 


export const funLoginOn = (loggedIn, usuario, token) => ({
  type: types.LOGIN_ON,
  loggedIn: loggedIn,
  usuario: usuario,
  token: token,

});