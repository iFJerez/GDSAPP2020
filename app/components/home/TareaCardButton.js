import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconAntDesign'


export default class TareaCardButton extends Component {
  render() {
    const {activa, selectionOnPress, nombre, base, cantidad, name_icon} = this.props
    let style_activa = activa === nombre ? styles.sty_botonOn: styles.sty_botonOff
    let style_texto = activa === nombre ? styles.textoOn: styles.textoOff
    let style_icon = activa === nombre ? constants.COLOR_PRIMARIO: constants.COLOR_PRIMARIO
    return (
      
      <TouchableOpacity
      onPress={() => selectionOnPress(nombre)}>
        <View style={[style_activa, styles.container ]}>
          <Text style={styles.textoCant}>{cantidad} / <Text style={styles.textoCantBold}>{base}</Text></Text>
          <Icon name={name_icon} color={constants.COLOR_QUINTENARIO_CLARO} size={constants.ICON_VERY_X_SMALL} />
          <Text style={styles.textoSubTitle}>{nombre}</Text>
          
      
      </View>
    </TouchableOpacity>

      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    padding: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
    backgroundColor: constants.COLOR_GRIS_B,
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
  textoCant: {
    paddingBottom: 5,
    color: constants.COLOR_QUINTENARIO,
    fontSize: constants.SIZE_LETRA_XX_LARGE,

  },
  textoCantBold: {
    color: constants.COLOR_QUINTENARIO,
    fontSize: constants.SIZE_LETRA_XX_LARGE,
    fontWeight: 'bold'
  },
  textoOn: {
    color: constants.COLOR_QUINTENARIO},
    
    textoSubTitle: {
      paddingTop: 5,
      color: constants.COLOR_QUINTENARIO_CLARO,
      fontSize: constants.SIZE_LETRA_SMALL,
  
    },
  
});