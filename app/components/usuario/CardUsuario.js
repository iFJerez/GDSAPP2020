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
           <View style={styles.sty_icon}>
               
            </View>
               <View style={styles.st_indicadores_valor}>   
                      <IconAntDesign name={'user'} size={constants.ICON_MEDIUM} color={constants.COLOR_PRIMARIO}/>
                    </View>  
                    <View style={styles.st_indicadores_valor}>   
                        <TextType1  text={"Kenny Bell"}/>
                    </View>  
                    <View style={styles.st_indicadores_texto}>
                        <TextType2  text={"Informacion"}/>
                    </View>
          
            </View>
         
        </View>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.COLOR_BLANCO,
    borderColor: constants.COLOR_GRIS_F,
    borderWidth: 1,
    marginHorizontal: 8,
    marginVertical: 3,
    borderRadius: 20,
    padding: 5,
    flexDirection: 'row'
  },
  sty_texto: {flex: 3, alignItems: 'flex-start', paddingHorizontal: 10},
  sty_icon: {flex: 1,paddingVertical: 15, alignItems: 'center', alignContent: 'center'},
  st_indicadores_progres: { marginHorizontal: 10},
  st_indicadores_texto: {},
  st_indicadores_valor: {},
});