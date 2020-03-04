import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconSimple'



export default class IPorcentaje extends Component {

funLlenar(){
  const {valor} = this.props
  if(valor != null) {
    return(
          <View style={styles.container}>
              <Text>{valor}<Icon name={'ios-arr'} size={constants.ICON_SMALL} color={constants.COLOR_PRIMARIO}/></Text>  
          </View>
        )
  }

}

  render() {
    
    return  (
      <View>
          {this.funLlenar()}
      </View>
   )
    
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLOR_BLANCO,
    marginHorizontal: 8,
    marginVertical: 3,
    borderRadius: 20
  },
  
  st_indicadores_progres: {flex: 1, marginHorizontal: 10},
  st_indicadores_texto: {flex: 1},
  st_indicadores_valor: {flex: 1},
});