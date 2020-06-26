import React from 'react';
import { View, StyleSheet} from "react-native";
import TextoBase from '../../herramientas/textos/TextoBase'


import * as constants from '../../herramientas/Const'

export const detalleBDesplegableHeader = ({agrupador}) => (
  <View style={styles.container} key={agrupador}>
      <TextoBase style={styles.sty_txt_agrupador}>{agrupador}</TextoBase>
  </View>)




const styles = StyleSheet.create({
    container: {
      backgroundColor: constants.COLOR_PRIMARIO,
      padding: 5,
      paddingLeft: 15,
      justifyContent: 'flex-end'
    },
    sty_txt_agrupador: {
      fontSize: constants.SIZE_LETRA_XX_LARGE,
      textTransform: 'capitalize',
      fontWeight: 'bold',
      color: constants.COLOR_BLANCO,
    }
});

export default detalleBDesplegableHeader;