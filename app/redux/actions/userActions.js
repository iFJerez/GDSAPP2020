// Login

import * as types from '../redux_constants'; 
import json_salas from '../../api/salasTest.json'
import json_tareas from '../../api/tareas.json'


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

function   DataOK(isRefresh, api_salas, api_tareas) {
  console.log('DataOK');
  //console.log(api_tareas)
  return {
    type: types.USER_GET_SALA_OK,
    dataSala: api_salas,
    dataTarea: api_tareas,
    isRefresh: isRefresh
  }
}


export function funGetData(token) {
  // esta api funciona y extra un ejemplo que hicimos con felipe
  // esta trabajando local por ahora
  console.log('userAction.funGetData: Rescatando Salas');
  
  let data =  JSON.stringify(
      {"token": token}
  )
  
    const config =  {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: data
    }
    return dispatch => {
        dispatch(DataRequest());
        fetch('http://api.gdsnet.com:3009/post_app_salas', config)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(DataOK(true, res, json_tareas)); 
            //dispatch(DataOK(true, json_salas, json_tareas));
            return res;
        })
        .catch(error => {
          // se cambia el error igual para meter la prueba
          console.log(error)
           dispatch(DataError(error));
           // dispatch(DataOK(true, json_salas, json_tareas));
        })
    }
  }
  



function CadenaRequest() {
  return {
    type: types.USER_GET_CADENA_REQUEST,
    isRefresh: false
  }
}

function CadenaError(isRefresh) {
  console.log('cADENA Error');
  return {
    type: types.USER_GET_CADENA_ERROR,
    isRefresh: isRefresh
  }
}

function CadenaOK(isRefresh, api_cadenas) {
  console.log('Cadena OK');
  //console.log(api_cadenas)
  return {
    type: types.USER_GET_CADENA_OK,
    dataCadena: api_cadenas,
    isRefresh: isRefresh
  }
}


export function funGetCadena() {
  // esta api funciona y extra un ejemplo que hicimos con felipe
  // esta trabajando local por ahora
  console.log('userAction.funGetCadena: Rescatando Cadenas');
  
  let data =  JSON.stringify(
      {"token": "AA123"}
  )
  
    const config =  {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: data
    }
    return dispatch => {
        dispatch(CadenaRequest());
        fetch('http://api.gdsnet.com:3009/post_app_cadenas', config)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(CadenaOK(true, res)); 
            //dispatch(DataOK(true, json_salas, json_tareas));
            return res;
        })
        .catch(error => {
          // se cambia el error igual para meter la prueba
          console.log(error)
           dispatch(CadenaError(error));
           // dispatch(DataOK(true, json_salas, json_tareas));
        })
    }
  }

  
function HomeRequest() {
  return {
    type: types.USER_GET_HOME_REQUEST,
    isRefresh: false
  }
}

function HomeError(isRefresh) {
  console.log('HOME Error');
  return {
    type: types.USER_GET_HOME_ERROR,
    isRefresh: isRefresh
  }
}

function HomeOK(isRefresh, apiHome) {
  console.log('HOME OK');
  //console.log(apiHome)
  return {
    type: types.USER_GET_HOME_OK,
    dataHome: apiHome,
    isRefresh: isRefresh
  }
}


export function funGetHome(token, id_cliente) {
  // esta api funciona y extra un ejemplo que hicimos con felipe
  // esta trabajando local por ahora
  console.log('userAction.funGetHome: Rescatando HOME');
  
  let data =  JSON.stringify(
      {"token": token, "cliente": id_cliente}
  )
  
    const config =  {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: data
    }
    return dispatch => {
        dispatch(HomeRequest());
        fetch('http://api.gdsnet.com:3009/post_app_home', config)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(HomeOK(true, res)); 
            //dispatch(DataOK(true, json_salas, json_tareas));
            return res;
        })
        .catch(error => {
          // se cambia el error igual para meter la prueba
          console.log(error)
           dispatch(HomeError(error));
           // dispatch(DataOK(true, json_salas, json_tareas));
        })
    }
  }
  



export function funGetDataBakcup() {
// esta api funciona y extra un ejemplo que hicimos con felipe
// esta trabajando local por ahora
console.log('userAction.funGetData: Rescatando Salas');

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


