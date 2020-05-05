import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconSimple'
import {funMessage} from '../../herramientas/Mensaje'



export default class SalasListadoInCo extends Component {




  render() {
    
    return  (
      <TouchableOpacity style={styles.styleTouch} onPress={() => {funMessage('Mensaje', 'Por construir...')}}>

<View style={styles.container}>

   
    <Text style={styles.TextStyle}>Fotografia</Text>
    <Text>{<Icon name={'ios-reverse-camera'} size={constants.ICON_LARGE} color={constants.COLOR_NARANJO}/>}</Text>  
    <Text style={styles.TextStyle}></Text>
 </View>

 </TouchableOpacity>

   )
    
  }

}

const styles = StyleSheet.create({
  container: {

    backgroundColor: constants.COLOR_GRIS_A,
    borderRadius: 10,
    alignItems:"center",
  },
  styleTouch:{
    flex:1,
    padding:5
  },
  TextStyle: {
    fontSize:15,
    fontFamily:"Futura",
    color: constants.COLOR_PRIMARIO,
    alignItems:"center",
    paddingTop:5
  }
});