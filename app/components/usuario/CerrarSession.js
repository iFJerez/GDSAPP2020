import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import TextType1 from '../../herramientas/textos/TextType1Color'
import * as constants from '../../herramientas/Const'
import IconAntDesign from '../../herramientas/IconAntDesign'

export default class CardItems extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
       <View style={styles.linea}>
           <View style={styles.sty_texto}>
                <TextType1  text={'Cerrar Session'}/>

            </View>
        </View>
      
        </TouchableOpacity>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: 60
  },
  linea: {
    flex: 1,
    borderColor: constants.COLOR_PRIMARIO_CLARO,
    borderWidth: 1,
    margin: 10,
    marginHorizontal: 60,
    borderRadius: 50,
    padding: 10,

  },
  sty_texto: {flex: 1,    flexDirection: 'row', alignItems: 'center', alignContent: 'center', alignSelf: 'center'},
  sty_icon: {flex: 1,paddingVertical: 1, alignItems: 'center', alignContent: 'center'},

});