// Login

import * as types from '../redux_constants'; 





function LoginRequest() {
  return {
    type: types.LOGIN_REQUEST,
    loggedIn: false
  }
}

function LoginError(loggedIn) {
  console.log('Login Error');
  return {
    type: types.LOGIN_ERROR,
    loggedIn: loggedIn
  }
}

function LoginOK(loggedIn, data) {
  console.log('Login OK');
  //console.log(api_cadenas)
  return {
    type: types.LOGIN_OK,
    loggedIn: loggedIn,
    usuario: data.usuario,
    token: data.token,
    id_cliente: data.id_cliente,
    id_usuario: data.id_usuario,
  }
}


export function funGetLogin(usuario, pass) {
  // esta api funciona y extra un ejemplo que hicimos con felipe
  // esta trabajando local por ahora
  console.log('userAction.funGetLogin: Rescatando Logins');
  
  let data =  JSON.stringify(

      {"username":usuario,"password":pass}
  )
  
    const config =  {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: data
    }
    return dispatch => {
        dispatch(LoginRequest());
        fetch('http://api.gdsnet.com:3009/post_login_app', config)
        .then(res => res.json())
        .then(res => {

          console.log("Usuario : " + res.usuario)
          console.log("token : " + res.token)

            if(res.error) {
              
                throw(res.error);
           
            }else if(res.usuario !== "NOUSER") {
            
            dispatch(LoginOK(true, res));
          }else {
            
            dispatch(LoginError(false, res));
          }
          
            
            //dispatch(DataOK(true, json_salas, json_tareas));
            return res;
        })
        .catch(error => {
          // se cambia el error igual para meter la prueba
          console.log(error)
           dispatch(LoginError(error));
           // dispatch(DataOK(true, json_salas, json_tareas));
        })
    }
  }

  export function LoginOFF() {
    console.log('Login OFF');
    //console.log(api_cadenas)
    return {
      type: types.LOGIN_OFF,
      loggedIn: false,
      usuario: null,
      token: null,
      id_cliente: null,
      id_usuario: null,

    }
  }
  
  export function funNetwork(value) {
    console.log('network');
    
    return {
      type: types.NETWORK_ON,
      network: value,

    }
  }
  