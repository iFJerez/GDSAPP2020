import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconAntDesign'


export default class SalasListadoInCo extends Component {
  render() {
    const {numero} = this.props

    if (numero>0) {
      return (
    
<View style={styles.container}>
  <View style={styles.sty_view_icon_positivo}>
    <Icon name="up" size={constants.ICON_VERY_XX_SMALL} color={constants.COLOR_PRIMARIO} /> 
  </View>
  <View style={styles.sty_view_txt_positivo}>
    <Text style={styles.sty_positivo}> {numero}</Text>
  </View>
</View>
      );
    }
    else {
      return(
        <View style={styles.container}>
        <View style={styles.sty_view_icon_positivo}>
        <Icon name="down" size={constants.ICON_VERY_XX_SMALL} color={constants.COLOR_SECUNDARIO} /> 
        
        </View>
        <View style={styles.sty_view_txt_positivo}>
        <Text style={styles.sty_negativo}> {numero}</Text>
        </View>
    </View>
      )
    }

  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    
    width: '100%',
    flex: 1,
    flexDirection: 'row'
    
  },
  sty_view_icon_positivo: {
    flex: 1.5,
    alignItems: 'flex-end'
  },
  sty_view_txt_positivo: {
    flex: 1
  },
  sty_view_icon_negativo: {
    flex: 1.5,
    alignItems: 'flex-end'
  },
  sty_view_txt_negativo: {
    flex: 1
  },

  sty_view_positivo: {
      fontSize: constants.SIZE_LETRA_MEDIUM,
      color: constants.COLOR_PRIMARIO,
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