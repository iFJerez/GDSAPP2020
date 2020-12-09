import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import * as constants from '../../herramientas/Const'
import TextoBase from './EnvioTextBase';
import Cadenas from "../../herramientas/Cadenas"

export default class EnvioSucursalHeader extends Component {

  

  render() {

    const { data } = this.props;
    return (
        <View style={styles.container}>
            <View style={styles.sucursalHeader}>
            <View style={styles.logo}>
                
                <Cadenas cadena={data.cadena} />
            </View>
            <View style={styles.detalleSuc}>
                <TextoBase style={styles.sty_text_desc_sucursal}>
                {data.desc_sala}
                </TextoBase>
                <TextoBase style={styles.sty_text_direccion}>
                {data.direccion} 
                </TextoBase>
            </View>
            </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: constants.COLOR_GRIS_D
  },
  st_icono: { width: '100%', height: '100%', resizeMode: 'center', alignItems: "center" },
  sty_image: { width: 90, height: 90 },
  sucursalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10
  
  },
  sty_text_desc_sucursal: {
    fontSize: constants.SIZE_LETRA_XX_LARGE,
    textAlignVertical: "center",
    textAlign: "left",
    fontWeight: 'bold',
    color: constants.COLOR_QUINTENARIO
  },
  sty_text_direccion: {
    fontSize: constants.SIZE_LETRA_X_LARGE,
    textAlignVertical: "center",
    textAlign: "left",
    color: constants.COLOR_QUINTENARIO_CLARO
  },
  detalleSuc: {
    flex: 3,
    flexDirection: 'column',
    alignContent: 'flex-start',
    paddingLeft: 10,
    justifyContent: 'flex-start'
  },


});