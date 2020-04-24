import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import TextType1 from '../../herramientas/textos/TextType1'
import TextType2 from '../../herramientas/textos/TextType2'
import * as constants from '../../herramientas/Const'
import IconAntDesign from '../../herramientas/IconAntDesign'

export default class CardUsuario extends Component {
  render() {
    const {data} = this.props
    return (
      <View style={styles.container}>
           <View style={styles.sty_texto}>
                   <View style={styles.st_indicadores_valor}>   
                      <IconAntDesign name={'setting'} size={constants.ICON_MEDIUM} color={constants.COLOR_PRIMARIO}/>
                    </View>  
                    <View style={styles.st_indicadores_valor}>   
                        <TextType1  text={"Inteligentes"}/>
                    </View>  
                    <View style={styles.st_indicadores_texto}>
                        <TextType2  text={"2 / 8"}/>
                    </View>
          
            </View>
         
        </View>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.COLOR_BLANCO,
    borderColor: constants.COLOR_PRIMARIO,
    borderWidth: 1,
    marginHorizontal: 8,
    marginVertical: 3,
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row'
  },
  sty_texto: {flex: 1, alignItems: 'center', paddingHorizontal: 10,    flexDirection: 'row'},
  sty_icon: {flex: 1,paddingVertical: 15, alignItems: 'center', alignContent: 'center'},
  st_indicadores_progres: { marginHorizontal: 10},
  st_indicadores_texto: {},
  st_indicadores_valor: {flex: 1},
});