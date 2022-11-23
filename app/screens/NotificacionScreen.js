// Imports: Dependencies
import React from 'react'
import {TouchableOpacity, StyleSheet, View, Text, Image} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from "react-native-modal"
import Icon from '../herramientas/Icon'
import * as constants from '../herramientas/Const'
import {funMessage} from '../herramientas/Mensaje'
const ImageLoad = require ('../images/gds_visual-1.png')
// Imports: Redux Actions
import ActionCreators from '../redux/actions'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from "react-native-linear-gradient";



import React, { Component } from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  AsyncStorage,
  TouchableOpacity,
  Alert,
  TextInput

} from 'react-native';
import firebase from 'react-native-firebase';
import  { Notification, NotificationOpen } from 'react-native-firebase';
import Icon from 'react-native-vector-icons/Entypo';



import stylesimport from '../styles/Notificacion'


//import funcionAPI from '../api/apiSalasResponde'

const styles = stylesimport


class LoginNotification extends Component {
  constructor(props){
    super(props)
    this.state = {  
      value: '',   
      dsSalas: [],
      isLoading: true,
      count: '',
      dsSalasresp: [],
      dsUser: [],
      username: '',
      password: '',
      id_usuario: '',
      token: '',
      data: '',
      dataResponse: 'error',
      paso: true,

    }

  }

  //1
  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }

  }

  //2
  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  async  searchgetToken(){

    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
     // Alert.alert("Token", fcmToken)
    await  this.setState({
        data: fcmToken,
      })

    } else {
     // Alert.alert("Token", fcmToken)
      
    }

  } 

  
    //3
    async getToken() {
      let fcmToken = await AsyncStorage.getItem('fcmToken');
      if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
          this.setState({
          data: fcmToken
        })
        if (fcmToken) {
          // user has a device token
          console.log('fcmToken:', fcmToken);
           this.setState({
            data: fcmToken
          })
          await AsyncStorage.setItem('fcmToken', fcmToken);
        }
      }
      console.log('fcmToken:', fcmToken);
    }





async postSelect(){

// consulta si tenemos inscrito el Usuario
    const notificationStorage = await 'notification'   
    const  newNotificacion = await AsyncStorage.getItem(notificationStorage);
      
  //Alert.alert("revisemos otra", newNotificacion)
      
      if (newNotificacion == 'OK')    
      {
       alert("Usuario Registrado!")
      }
      else{
      var retorno = await  this.postInsert();
         if (retorno == 'ERROR'){
            Alert.alert("Ups!", 'Ocurrió un problema al registrar su Usuario en las Notificaciones - Favor avise a soporte.')
         }     
    
        
      }


//si no esta inscrito, lo inscribimos.

}


  async postInsert(){

   const retorno =  await fetch('http://api.gdsnet.com:3004/post_insert_users', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
          id_app: 1,
          id_user: this.state.id_usuario,
          token_user: this.state.token, 
          reference_key: this.state.data
          
          
          })
        }).then((data) => {  
          var respuesta = JSON.parse(data._bodyInit)
          const estadoOK = respuesta.usuario

             this.setState({ 
                dataResponse: estadoOK ,          
            })

          AsyncStorage.setItem('notification', estadoOK);
          AsyncStorage.setItem('reference_key', this.state.data);
          return(estadoOK);
            
           })

      return(retorno);
       
      }



async buscarUsuario(){
      const nameStorage = await 'usuarios'   
      var json = await AsyncStorage.getItem(nameStorage);
      var newLogin= await JSON.parse(json);  
      if (!Array.isArray(newLogin) || !newLogin.length)    
      {
        alert("esta vacio")
      }
      else{
        this.setState({ 
          dsUser: newLogin,   
          username: newLogin[0].username,
          password: newLogin[0].password,
          id_usuario: newLogin[0].id_usuario,
          token: newLogin[0].token,
        })
      }
      
  }

  componentWillUnmount() {
        this.notificationDisplayedListener();
        this.notificationListener();
        this.notificationOpenedListener();
    }

  refrescar(){
    //Alert.alert("Ejecuto");
    this.componentDidMount();
   // alert("se puso a refrescar")
  }

  async componentDidMount(){
    //cargamos el usuario para luego ocuparlo en guardar sus Notificaciones.
    await this.buscarUsuario();

    //Checkeamos si el usuario cuenta con los Permisos.
    await this.checkPermission();

    // Guardamos Salas
    await this.searchgetToken();
  



  


    //Checkeamos si el usuario esta registrado.


        const notificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            const action = notificationOpen.action;
            const notification = notificationOpen.notification;

        } 
        const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
                .setDescription('My apps test channel');
// Create the channel
        firebase.notifications().android.createChannel(channel);
        this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
            // Process your notification as required
            // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
        });
        this.notificationListener = firebase.notifications().onNotification((notification) => {
            // Aca se debe agregar acciones para cuando esta en primer plano la app
           // alert("algo entro")

        });
        this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
            // Get the action triggered by the notification being opened
            const action = notificationOpen.action;
            // Get information about the notification that was opened
            const notification = notificationOpen.notification;

            firebase.notifications().removeDeliveredNotification(notification.notificationId);
            
        });








  }

  async onBotonInscribir(){
      await this.postSelect();
      await this.props.navigation.navigate('Salas');   
  }

 

render(){
 




  
      return(
        <View style={styles.container}>

         <View style = {styles.bienvenido} >
             <Text  style = {styles.textBienvenido}>
            Bienvenido
              </Text>
                  <Icon name="emoji-happy" size={40} color="#567" />
                  <Text  style = {styles.textUsuario}>
            {this.state.username} 
              </Text>
             </View>



            
       <View style = {styles.continuar} >
              <TouchableOpacity onPress={()=>this.onBotonInscribir()} >
                <Text  style = {styles.textContinuar}>
                   Continuar   <Icon name="arrow-with-circle-right" size={30} color="#fff" />
              </Text>
            
              </TouchableOpacity>
            </View>
       </View>





  

    );
  }
 
}







  
  







// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    network: state.authReducer.network,
    status: state.userReducer.status,
    token: state.authReducer.token,
    id_cliente: state.authReducer.id_cliente,
    loggedIn: state.authReducer.loggedIn,
    
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
function mapDispatchToProps(dispatch) {
  const combiner = Object.assign({},
    ActionCreators,
    { dispatch },
  );
  return bindActionCreators(
    combiner,
    dispatch,
  );
}

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(LoginNotification);







