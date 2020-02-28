import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Indicador from '../salas/Indicadores'
import IPresencia from './IPresencia'
import {funMessage} from '../../herramientas/Mensaje'



export default class DetalleIndicadores extends Component {

  funIndicadores(){
    const {data} = this.props

    try {
      return data.detalles.map((v, i)=>{
        if(v.presencia==null){
        return(
        <View>
          <Text>{v.producto}</Text>
        <IPresencia valor={v.presencia}/>
        </View>
        )
      }
      else{
        return(      <View>
          <Text>{v.producto}</Text>
        <IPresencia valor={v.presencia}/>
        </View>)
      }
      })
      
    } catch (error) {

      funMessage('Mensaje', 'Sin detalles: ' + error)
      
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
  
});