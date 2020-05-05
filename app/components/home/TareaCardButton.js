import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconAntDesign'


export default class CardUsuario extends Component {
  render() {
    const {activa, selectionOnPress, nombre, base, cantidad, name_icon} = this.props
    let style_activa = activa === nombre ? styles.sty_botonOn: styles.sty_botonOff
    let style_texto = activa === nombre ? styles.textoOn: styles.textoOff
    let style_icon = activa === nombre ? constants.COLOR_PRIMARIO: constants.COLOR_PRIMARIO
    return (
      
      <TouchableOpacity
      onPress={() => selectionOnPress(nombre)}>
        <View style={[style_activa, styles.container ]}>
          <Icon name={name_icon} color={style_icon} size={constants.ICON_SMALL} />
          <Text style={style_texto}>{nombre}</Text>
          <Text style={style_texto}>{cantidad} / {base}</Text>
      
      </View>
    </TouchableOpacity>

      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
    backgroundColor: constants.COLOR_BLANCO
  },

  sty_botonOff: {
    borderColor: constants.COLOR_GRIS_A,
    borderWidth: 1,
    padding: 10
  },
  sty_botonOn: {
    borderColor: constants.COLOR_GRIS_A,
    borderWidth: 1,
    padding: 10
    
  },
  textoOn: {
    color: constants.COLOR_PRIMARIO},
    
  textoOff: {
      color: constants.COLOR_PRIMARIO}
  
});