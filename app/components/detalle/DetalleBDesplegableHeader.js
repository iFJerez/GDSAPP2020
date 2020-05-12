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
      backgroundColor: constants.COLOR_GRIS_D,
      paddingTop: 15,
      paddingLeft: 15,
      paddingBottom: 10,
      borderBottomColor: constants.COLOR_GRIS_G,
      borderBottomWidth: 1,
      marginHorizontal: 5,
      marginBottom: 6,
      justifyContent: 'flex-end'
    },
    sty_txt_agrupador: {
      fontSize: constants.SIZE_LETRA_XX_LARGE,
      textTransform: 'capitalize',
      color: constants.COLOR_GRIS_J
    }
});

export default detalleBDesplegableHeader;