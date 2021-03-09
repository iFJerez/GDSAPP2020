

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
  Alert,
  TextInput

} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import { Button } from 'react-native-share';

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification);

    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function(err) {
    console.error(err.message, err);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: true,
});




export default class LoginNotification extends Component {
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







  componentWillUnmount() {
  
    }

  refrescar(){
 
    this.componentDidMount();
   
  }


  async onBotonInscribir(){
      
      await this.props.navigation.navigate('Salas');   
  }

 

  sendMessage(){
console.log("enviando Push Notification")
    PushNotification.localNotification({
      title: "My Notification Title", // (required)
      message: "My Notification Message", // (required)
      
    });

  }

render(){
 




  
      return(
        <View style={styles.container}>

         <View style = {styles.bienvenido} >
           <Button onPress={()=>{this.sendMessage()}}>
             <Text  style = {styles.textBienvenido}>
            Bienvenido
              </Text>
              </Button>
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




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF',

  },
    bienvenido: {
    backgroundColor:'#FFFFFF',
    padding: 50,
    marginTop: 200,
    alignItems: 'center',
    flex: 1,
  

  },
   usuario: {
    backgroundColor:'#FFFFFF',
    padding: 50,
    alignItems: 'center',
 

  },
     continuar: {
    alignItems: 'center',
    backgroundColor:'#567567',
      padding: 50,
    

  },
  textContinuar: {
       color: '#FFFFFF', fontSize: 30, alignItems: 'center', paddingBottom: 20

  },
    textUsuario: {
       color: '#567567', fontSize: 30, alignItems: 'center', paddingBottom: 20

  },
    textBienvenido: {
    color: '#567567', fontSize: 30, alignItems: 'center', paddingBottom: 20

  },
  
  

});





  
  