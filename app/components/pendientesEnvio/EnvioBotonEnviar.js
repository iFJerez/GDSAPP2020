import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import TextType1 from '../../herramientas/textos/TextType1Blanco'
import TextType2 from '../../herramientas/textos/TextType2Blanco'
import * as constants from '../../herramientas/Const'
import IconAntDesign from '../../herramientas/IconAntDesign'
import TextoBase from './EnvioTextBase';

export default class CardItems extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <TextoBase style={styles.sty_text_enviar}>Enviar</TextoBase>
        </View>
      </View>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 20,
    flex: 1,
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
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: constants.COLOR_SECUNDARIO_CLARO
  },
  sty_text_enviar: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: constants.SIZE_LETRA_XXX_LARGE,
    color: constants.COLOR_SECUNDARIO_CLARO
  }

});