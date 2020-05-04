import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import TextType1 from '../../herramientas/textos/TextType1Blanco'
import TextType2 from '../../herramientas/textos/TextType2Blanco'
import * as constants from '../../herramientas/Const'
import IconAntDesign from '../../herramientas/IconAntDesign'

export default class CardItems extends Component {
  render() {
    return (
      <View style={styles.container}>
           <View style={styles.sty_texto}>
                    <View style={styles.st_indicadores_valor}>   
                        <TextType1  text={'Enviar'}/>
                    </View>  
                    <View style={styles.st_indicadores_texto}>
                        <TextType2  text={"7 Items Listos para enviar"}/>
                    </View>
            </View>
            <View style={styles.sty_icon}>
                <IconAntDesign name={'rocket1'} size={constants.ICON_MEDIUM} color={constants.COLOR_BLANCO}/>
            </View>
        </View>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: constants.COLOR_PRIMARIO_CLARO,
    marginHorizontal: 8,
    marginVertical: 3,
    borderRadius: 100,
    paddingVertical: 10,
    flexDirection: 'row'
  },
  sty_texto: {flex: 3, alignItems: 'center', paddingHorizontal: 10},
  sty_icon: {flex: 1,paddingVertical: 15, alignItems: 'center', alignContent: 'center'},

});