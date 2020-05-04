import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import TextType1 from '../../herramientas/textos/TextType1Blanco'
import {funMessage} from '../../herramientas/Mensaje'
import * as constants from '../../herramientas/Const'
import IconAntDesign from '../../herramientas/IconAntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextoBase from './EnvioTextBase';

export default class CardItems extends Component {
  render() {
    return (
      <TouchableOpacity onPress={()=>funMessage('Mensaje', 'Preparando envio')}>
      <View style={styles.container}>
        
           <View style={styles.sty_texto}>
                    <View style={styles.st_indicadores_valor}>   
                        <TextType1  text={'Enviar'}/>
                    </View>  
            </View>
            <View style={styles.sty_icon}>
                <IconAntDesign name={'rocket1'} size={constants.ICON_SMALL} color={constants.COLOR_BLANCO}/>
            </View>
        <View style={styles.button}>
          <TextoBase style={styles.sty_text_enviar}>Enviar</TextoBase>
        </View>
          
        </View>
            </TouchableOpacity>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.COLOR_SECUNDARIO,
    marginHorizontal: 8,
    marginBottom: 50,
    marginTop: 20,
    borderRadius: 100,
    paddingVertical: 1,
    flexDirection: 'row',
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