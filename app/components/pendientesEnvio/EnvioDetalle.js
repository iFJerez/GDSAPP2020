import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import * as constants from '../../herramientas/Const'
import EnvioDetalleCard from './EnvioDetalleCard'
import data_cadena from '../../api/cadenas.json'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextoBase from './EnvioTextBase';

export default class PendienteEnvioBody extends Component {



  cargaImagen(cadena) {

    try {
      return (
        <View style={styles.sty_image}>
          <Image
            style={styles.st_icono}
            source={{ uri: data_cadena[cadena].uri }}

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

  funLlenadoSalas() {
    const { data } = this.props;

    return data.map((sucursal, i) => {
      return (
        <View style={styles.container}>
          <View style={styles.sucursalHeader}>
            <View style={styles.logo}>
              {this.cargaImagen(sucursal.cadena)}
            </View>
            <View style={styles.detalleSuc}>
              <TextoBase style={styles.sty_text_desc_sucursal}>
                {sucursal.desc_sala}
              </TextoBase>
              <TextoBase style={styles.sty_text_direccion}>
                {sucursal.direccion} 
              </TextoBase>
            </View>
          </View>
          <View style={styles.detalleAcciones}>
            {this.funLlenadoAcciones(sucursal.acciones)}
          </View>
        </View>
      )
    })

  }

  funLlenadoAcciones(data) {

    return data.map((accion, i) => {
      return (
        <EnvioDetalleCard data={{ ...accion, numero: i + 1 }} />
      )
    })

  }



  render() {

    const { data } = this.props;
    return (
      <View style={styles.container}>
        {this.funLlenadoSalas()}
      </View>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: constants.COLOR_GRIS_D,
    borderRadius: 5
  },
  st_icono: { width: '100%', height: '100%', resizeMode: 'center', alignItems: "center" },
  sty_image: { width: 90, height: 90 },
  sucursalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  
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