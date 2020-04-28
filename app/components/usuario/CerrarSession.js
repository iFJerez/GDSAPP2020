import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import TextType1 from '../../herramientas/textos/TextType1Color'
import * as constants from '../../herramientas/Const'
import IconAntDesign from '../../herramientas/IconAntDesign'

export default class CardItems extends Component {
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.linea}>
           <View style={styles.sty_texto}>
                <TextType1  text={'Cerrar Session'}/>

            </View>
        </View>
      
        </View>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width:"100%",
    bottom: 90,


  },
  linea: {
    borderColor: constants.COLOR_PRIMARIO_CLARO,
    borderWidth: 1,
    margin: 100,
    borderRadius: 50,
    padding: 10,

  },
  sty_texto: {flex: 1,    flexDirection: 'row', alignItems: 'center', alignContent: 'center', alignSelf: 'center'},
  sty_icon: {flex: 1,paddingVertical: 1, alignItems: 'center', alignContent: 'center'},

});