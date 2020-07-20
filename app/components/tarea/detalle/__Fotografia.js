import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import * as constants from '../../../herramientas/Const'
import Icon from 'react-native-vector-icons/AntDesign';
import {funMessage} from '../../../herramientas/Mensaje'



export default class SalasListadoInCo extends Component {




  render() {
    
    return  (
      <TouchableOpacity style={styles.styleTouch} onPress={() => {funMessage('Mensaje', 'Por construir...')}}>

<View style={styles.container}>
    <Icon name={'camera'} size={constants.ICON_SMALL} color={constants.COLOR_SECUNDARIO}/>
 </View>

 </TouchableOpacity>

   )
    
  }

}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignItems:"center",
    margin: 0
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