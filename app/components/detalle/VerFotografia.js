import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconSimple'
import {funMessage} from '../../herramientas/Mensaje'



export default class SalasListadoInCo extends Component {




  render() {
    
    return  (
      <View>

<TouchableOpacity onPress={() => {funMessage('Ver Fotografias', 'Por construir...')}}>
<Text>ver fotos</Text>
<Text>{<Icon name={'ios-reverse-camera'} size={constants.ICON_LARGE} color={constants.COLOR_PRIMARIO}/>}</Text>  
</TouchableOpacity>
          


      </View>
   )
    
  }

}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: constants.COLOR_BLANCO,
    borderWidth: 1,
    marginHorizontal: 8,
    marginVertical: 3,
    borderRadius: 20
  },
  
  st_indicadores_progres: {flex: 1, marginHorizontal: 10},
  st_indicadores_texto: {flex: 1},
  st_indicadores_valor: {flex: 1},
});