// Login

import * as types from '../redux_constants'; 
import json_salas from '../../api/salasTest.json'



export const funUserHelp = (ms_help) => (
  {
  type: types.USER_HELP,
  ms_help: ms_help,
});

export const funUserModal = (home_modal) => (
  {
  type: types.USER_MODAL,
  home_modal: home_modal,
});


function DataRequest() {
  return {
    type: types.USER_GET_SALA_REQUEST,
    isRefresh: false
  }
}

function DataError(isRefresh) {
  console.log('DataError');
  return {
    type: types.USER_GET_SALA_ERROR,
    isRefresh: isRefresh
  }
}

function   DataOK(isRefresh, api) {
  console.log('DataOK');
  return {
    type: types.USER_GET_SALA_OK,
    dataSala: api,
    isRefresh: isRefresh
  }
}



export function funGetSalas() {
  // esta api funciona y extra un ejemplo que hicimos con felipe
  // esta trabajando local por ahora
  console.log('userAction.funGetSalas: Rescatando Salas');
  
  let data =  JSON.stringify(
      {"token": "1VLC3A8A3PZ04XXJLYI4"}
  )
  
    const config =  {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: data
    }
    return dispatch => {
        dispatch(DataRequest());
        fetch('http://api.gdsnet.com:3005/post_duo_pauta_V2', config)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            //dispatch(DataOK(true, res)); lo remplazo para probar con data_json
            dispatch(DataOK(true, json_salas));
            return res;
        })
        .catch(error => {
          // se cambia el error igual para meter la prueba
           // dispatch(DataError(error));
           dispatch(DataOK(true, json_salas));
        })
    }
  }
  

export function funGetSalasBakcup() {
// esta api funciona y extra un ejemplo que hicimos con felipe
// esta trabajando local por ahora
console.log('userAction.funGetSalas: Rescatando Salas');

let data =  JSON.stringify(
    {"token": "1VLC3A8A3PZ04XXJLYI4"}
)

  const config =  {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: data
  }
  return dispatch => {
      dispatch(DataRequest());
      fetch('http://api.gdsnet.com:3005/post_duo_pauta_V2', config)
      .then(res => res.json())
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          //dispatch(DataOK(true, res)); lo remplazo para probar con data_json
          dispatch(DataOK(true, json_salas));
          return res;
      })
      .catch(error => {
          dispatch(DataError(error));
      })
  }
}


