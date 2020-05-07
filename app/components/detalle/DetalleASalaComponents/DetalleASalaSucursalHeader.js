import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import * as constants from '../../../herramientas/Const'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextoBase from '../../../herramientas/textos/TextoBase';
import data_cadena from '../../../api/cadenas.json';

export default class DetalleSucursalHearer extends Component {

  

  cargaImagen(cadena) {

    try {
      return (
        <View style={styles.sty_image}>
          <Image
            style={styles.st_icono}
            source={{ uri: data_cadena['jumbo'].uri }}

          />
        </View>
      )
    } catch (error) {
      return (
        <View style={styles.sty_image}>
          <Icon name={'store'} color={constants.COLOR_GRIS_G} size={50} style={styles.st_icono} />
        </View>
      )

    }


  }

  render() {

    const { data } = this.props;
    return (
        <View style={styles.container}>
            <View style={styles.sucursalHeader}>
            <View style={styles.logo}>
                {this.cargaImagen('jumbo')}
            </View>
            <View style={styles.detalleSuc}>
                <TextoBase style={styles.sty_text_desc_sucursal}>
                {'JUMBO PRUEBA'}
                </TextoBase>
                <TextoBase style={styles.sty_text_direccion}>
                {'AV DE LOS COLONOS INSPIRADOS 2342'} 
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