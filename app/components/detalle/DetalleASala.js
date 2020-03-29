import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Indicador from '../salas/Indicadores'
import {funMessage} from '../../herramientas/Mensaje'
import DetalleBDesplegable from './DetalleBDesplegable'
import VerFotografia from './VerFotografia'



export default class DetalleIndicadores extends Component {

  funIndicadores(){
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


    return (
      <View style={styles.container}>
         <View style={styles.view_indicador}>
            <Indicador data={data}  />
            <VerFotografia />
         </View>
         <View style={styles.view_detalle}>
            {this.funIndicadores()}
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