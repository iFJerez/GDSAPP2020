import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Indicador from '../salas/Indicadores'
import IPresencia from './IPresencia'
import {funMessage} from '../../herramientas/Mensaje'
import DetalleIndicadoresFilas from './DetalleIndicadoresFila'



export default class DetalleIndicadores extends Component {

  funIndicadores(){
    const {data} = this.props

    try {
      return data.detalles.map((v, i)=>{
        return(
          <DetalleIndicadoresFilas data={v} />
        )
      })
      
    } catch (error) {
      funMessage('Error', 'Pasando a Filas: ' + error)
    }


  }


  render() {
    const {data} = this.props
    return (
      <View style={styles.container}>
         <Indicador data={data}  />
         {this.funIndicadores()}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center'
  },
  view_fila: {
    flex: 1,
    flexDirection: 'row'
  }
});