import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconSimple'



export default class SalasListadoInCo extends Component {
  render() {
    const {valor} = this.props
    return (
      <View style={styles.container}>
          <Text>{valor?<Icon name={'ios-arrow-dropup-circle'} size={20} color={constants.COLOR_PRIMARIO}/>:<Icon name={'ios-arrow-dropdown-circle'} size={20} color={constants.COLOR_SECUNDARIO}/>}</Text>  
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: 70,
    backgroundColor: constants.COLOR_BLANCO,
    borderColor: constants.COLOR_GRIS_F,
    borderWidth: 1,
    marginHorizontal: 8,
    marginVertical: 3,
    borderRadius: 20
  },
  
  st_indicadores_progres: {flex: 1, marginHorizontal: 10},
  st_indicadores_texto: {flex: 1},
  st_indicadores_valor: {flex: 1},
});