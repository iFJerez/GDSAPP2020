import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import * as constants from '../../herramientas/Const';
import IconAntDesign from '../../herramientas/IconAntDesign';
import TextoBase from './EnvioTextBase';
import TextoBase2 from '../../herramientas/textos/TextoBaseSinSizeAjust';

export default class CardItems extends Component {

  render() {
    const {data} = this.props
    return (
      <View style={styles.container}>  
        <View style={styles.variable}>
          <TextoBase style={styles.sty_text_ordinal}>{`${data.numero}. `}</TextoBase>
          <TextoBase style={styles.sty_text_variable}>{data.indicador.toUpperCase()}</TextoBase>
        </View>
        <View style={styles.detailLine}>
          <View style={styles.productDetail}>
            <View style={styles.productDesc}>
              <TextoBase style={styles.sty_text_base}>
                  {data.item}
              </TextoBase>
            </View>
            <View style={styles.productEAN}>
              <TextoBase style={styles.sty_text_ean}>
                  {data.ean}
              </TextoBase>
            </View>
          </View>
          <View style={styles.action}>
            <TextoBase2 style={styles.sty_text_action} numberOfLines={3}>
                    {data.accion}
            </TextoBase2>
          </View>
          <View style={styles.sty_icon}>
                <IconAntDesign name={'delete'} size={constants.ICON_SMALL} color={constants.COLOR_GRIS_G}/>
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
    marginHorizontal: 3,
    marginVertical: 0,
    alignItems: 'flex-start',
    padding: 10,
    height: 100,
    flexDirection: 'column'
  },
  detailLine: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 3
  },
  productDetail: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 6,
    flex: 6
  },
  action: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flex: 2,
    paddingHorizontal: 1,
    paddingVertical: 2,
    backgroundColor: constants.COLOR_GRIS_C,
    borderRadius: 10,
    margin: 2
  },
  sty_icon: {
    paddingVertical: 15,
    alignItems: 'flex-end',
    alignContent: 'center'
  },
    productEAN: {
      paddingVertical: 2
    },
  productDesc: {
    paddingVertical: 2  
  },
  variable: {
    flexDirection: 'row',
    padding: 0,
    margin: 0,
    flex: 1
  },
  sty_text_base: {
    fontSize: constants.SIZE_LETRA_X_LARGE,
    textAlignVertical: "center",
    textAlign: "center",
    color: constants.COLOR_QUINTENARIO_CLARO
  },
  sty_text_ean: {
    fontSize: constants.SIZE_LETRA_LARGE,
    textAlignVertical: "center",
    textAlign: "center",
    color: constants.COLOR_GRIS_H
  },
  sty_text_action: {
    fontSize: constants.SIZE_LETRA_LARGE,
    textAlignVertical: "center",
    textAlign: "center",
    flexShrink: 1,
    color: constants.COLOR_SECUNDARIO_CLARO
  },
  sty_text_variable: {
    fontSize: constants.SIZE_LETRA_XXX_LARGE,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: 'bold',
    color: constants.COLOR_QUINTENARIO_CLARO,
  },
  sty_text_ordinal: {
    fontSize: constants.SIZE_LETRA_XXX_LARGE,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: 'bold',
    color: constants.COLOR_GRIS_H,
  }
});