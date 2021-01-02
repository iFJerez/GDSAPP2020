import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import * as constants from '../../herramientas/Const'
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextoBase from './OrdenSalasScreenTextBase';

export default class CardItems extends Component {
  render() {

    
    const {funExec, sala_orden_asc} = this.props
    const newStyle = sala_orden_asc?styles.buttonOn:styles.buttonOff
    const newStyleText = sala_orden_asc?styles.sty_text_on:styles.sty_text_off
    const texto = sala_orden_asc?"Ascendente":"Descendente"

    return (
      <TouchableOpacity onPress={()=>funExec(!sala_orden_asc)}>
      <View style={styles.container}>

        <View style={newStyle}>
          <TextoBase style={newStyleText}>{texto}</TextoBase>
        </View>
          
        </View>
      </TouchableOpacity>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
    marginTop: 10,
    borderRadius: 100,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
    
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  buttonOn: {
    flex: 0.7,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: constants.COLOR_PRIMARIO
  },
  buttonOff: {
    flex: 0.7,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: constants.COLOR_PRIMARIO,
    borderWidth: 1,
  },
  sty_text_on: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: constants.SIZE_LETRA_XX_LARGE,
    color: constants.COLOR_BLANCO
  },
  sty_text_off: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: constants.SIZE_LETRA_XX_LARGE,
    color: constants.COLOR_PRIMARIO
  }

});