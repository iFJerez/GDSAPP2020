import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import * as constants from '../../herramientas/Const'
import EnvioDetalleCard from './EnvioDetalleCard'

export default class PendienteEnvioBody extends Component {
  render() {
    const data = {
    "descSala": "Jumbo el Llano",
     "numero": 1,
     "indicador": "Promocion",
     "item": "Producto Ejecutado 1000cc",
     "ean": "7878787839232",
     "accion": "Quiebre"}
    return (
      <View style={styles.container}>
            <EnvioDetalleCard data={data} />
            <EnvioDetalleCard data={data} />
            <EnvioDetalleCard data={data} />
            <EnvioDetalleCard data={data} />
      
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLOR_GRIS_D,
    borderRadius: 5
  },
  
});