import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconAntDesign'


export default class SalasListadoInCo extends Component {
  render() {
    const {text} = this.props

    if (text>0) {
      return (
        <View style={styles.container}>
        <View style={styles.sty_view_positivo}>
        <Icon name="up" size={constants.ICON_VERY_X_SMALL} color={constants.COLOR_PRIMARIO} /> 
        <Text style={styles.sty_positivo}> {text}</Text>    
        </View>
        </View>
      );
    }
    else {
      return(
        <View style={styles.container}>
        <View style={styles.sty_view_positivo}>
        <Icon name="down" size={constants.ICON_VERY_X_SMALL} color={constants.COLOR_SECUNDARIO} /> 
        <Text style={styles.sty_negativo}> {text}</Text>
        </View>
    </View>
      )
    }

  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    
  },
  sty_view_positivo: {
      fontSize: constants.SIZE_LETRA_MEDIUM,
      color: constants.COLOR_PRIMARIO,
      padding: 2,
      alignItems: 'center',
      flexDirection: 'row'
      
    },
    sty_positivo: {

      fontSize: constants.SIZE_LETRA_MEDIUM,
      color: constants.COLOR_PRIMARIO,
      padding: 2,
      textAlign: "center",
      flexDirection: 'row',
      alignItems: 'center'
    },
    sty_negativo: {

      fontSize: constants.SIZE_LETRA_MEDIUM,
      color: constants.COLOR_SECUNDARIO_CLARO,
      padding: 2,
      textAlign: "center",
      
    },
  
});