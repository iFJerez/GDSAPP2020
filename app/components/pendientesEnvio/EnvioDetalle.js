import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import * as constants from '../../herramientas/Const'
import EnvioDetalleCard from './EnvioDetalleCard'

export default class PendienteEnvioBody extends Component {
  render() {
    const data = {
    "descSala": "Jumbo el Llano",
     "indicador": "Promocion",
     "item": "Producto 1000cc",
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