// Login

import * as types from '../redux_constants'; 


export const login = (trueFalse) => ({
  type: types.LOGON,
  trueFalse: trueFalse,
});