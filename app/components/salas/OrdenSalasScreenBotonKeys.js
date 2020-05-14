import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import {funMessage} from '../../herramientas/Mensaje'
import * as constants from '../../herramientas/Const'
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextoBase from './OrdenSalasScreenTextBase';

export default class CardItems extends Component {
  render() {
    const {funExec, text} = this.props
    return (
      <TouchableOpacity onPress={funExec}>
      <View style={styles.container}>

        <View style={styles.button}>
          <TextoBase style={styles.sty_text_enviar}>{text}</TextoBase>
        </View>
          
        </View>
      </TouchableOpacity>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    
    marginHorizontal: 10,
    marginBottom: 0,
    marginTop: 30,
    borderRadius: 100,
    paddingVertical: 1,
    flexDirection: 'row',
    width: '100%',
    bottom: 20,
    justifyContent: 'center',
    marginHorizontal: 'auto',
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  button: {
    flex: 0.6,
    paddingHorizontal: 90,
    paddingVertical: 17,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: constants.COLOR_SECUNDARIO
  },
  sty_text_enviar: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: constants.SIZE_LETRA_XXX_LARGE,
    color: constants.COLOR_BLANCO
  }

});