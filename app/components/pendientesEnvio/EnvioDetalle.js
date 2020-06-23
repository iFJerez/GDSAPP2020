import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView } from 'react-native';
import * as constants from '../../herramientas/Const'
import EnvioDetalleCard from './EnvioDetalleCard'
import data_cadena from '../../api/cadenas.json'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
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
            {this.funLlenadoAcciones(sucursal)}
          </View>
        </View>
      )
    })

  }

  funLlenadoAcciones(data) {

    const { acciones, ...dataPunto } = data;
    

    return acciones.map((accion, i) => {
      return (
        
        <EnvioDetalleCard data={{ ...accion, ...dataPunto, numero: i + 1 }} />
      )
    })

  }



  render() {

    const { data } = this.props;
    let detalle = null;
    if (data && data.length > 0) {
      detalle = this.funLlenadoSalas()
    } else {
      detalle =
        <SafeAreaView>
        <View style={styles.sin_datos_container}>
          <IconAnt style={styles.sty_icon_sin_datos} name='checkcircleo' size={100} color={constants.COLOR_GRIS_G}/>
          <Text style={styles.sty_text_sin_datos}>Sin datos por enviar</Text>
        </View>
        </SafeAreaView>
    } 
    return (
        <View style={styles.container}>
          {detalle}
          {/* {this.funLlenadoSalas()} */}
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
  st_icono: { 
    width: '100%',
    height: '100%',
    resizeMode: 'center',
    alignItems: "center"
  },
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
  sty_text_sin_datos: {
    fontSize: constants.SIZE_LETRA_XXXX_LARGE,
    textAlign: 'center',
    fontWeight: 'bold',
    color: constants.COLOR_GRIS_G,
    shadowColor: constants.COLOR_GRIS_K,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    shadowOffset: {width: 1, height: 1},
  },
  sty_icon_sin_datos: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: constants.COLOR_GRIS_G,
    shadowColor: constants.COLOR_GRIS_K,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    shadowOffset: {width: 1, height: 1},
  },
  sin_datos_container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400
  }


});