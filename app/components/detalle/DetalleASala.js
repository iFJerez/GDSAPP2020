import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
// import Indicador from '../salas/Indicadores'
import {funMessage} from '../../herramientas/Mensaje'
import DetalleBDesplegable from './DetalleBDesplegable'
import VerFotografia from './DetalleASalaComponents/VerFotografia';
import Indicador from './DetalleASalaComponents/DetalleASalaTarjetaIndicador'
import DetalleSucursalHeader from './DetalleASalaComponents/DetalleASalaSucursalHeader';



export default class DetalleIndicadores extends Component {

  funDetalles(){
    const {data} = this.props

    try {
      return data.detalles.map((v, i)=>{
        return(
               <DetalleBDesplegable data={v} i={i} />
        )
      })
      
    } catch (error) {
      funMessage('Mensaje', 'Sin Detalles')
    }


  }


  render() {
    const {data} = this.props
    //console.log('DetalleASALA', JSON.stringify(data))


    return (
      <View style={styles.container}>
         <View style={styles.view_indicador}>
         <DetalleSucursalHeader/>
         <Text> hola {data.desc_sala}</Text>
           <Indicador />
            {/* <Indicador data={data}  /> */}
            <VerFotografia />
         </View>
         <View style={styles.view_detalle}>
            {this.funDetalles()}
         </View>
     </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  

  },
  view_indicador: {
  alignItems: 'center',
  flex: 1
    
  },
  view_detalle: {
    flex: 1,
    
  }
});