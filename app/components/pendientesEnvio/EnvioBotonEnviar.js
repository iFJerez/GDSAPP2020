import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import TextType1 from '../../herramientas/textos/TextType1Blanco'
import {funMessage} from '../../herramientas/Mensaje'
import * as constants from '../../herramientas/Const'
import IconAntDesign from '../../herramientas/IconAntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    flexDirection: 'row'
  },
  sty_texto: {flex: 3, alignItems: 'center', paddingHorizontal: 10},
  sty_icon: {flex: 1,paddingVertical: 15, alignItems: 'center', alignContent: 'center'},

});