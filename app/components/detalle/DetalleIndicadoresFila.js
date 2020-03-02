import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';

import IPresencia from './IPresencia'
import IPrecio from './IPrecio'
import {funMessage} from '../../herramientas/Mensaje'



export default class DetalleIndicadoresFila extends Component {

  funIndicadores(){
    const {data} = this.props

try {

        return(      
        <View style={styles.view_fila}>
          <Text>{data.producto}</Text>
          <Text>{JSON.stringify(data.presencia)}</Text>
          <IPresencia valor={data.presencia}/>
          <IPrecio valor={data.precio}/>
        </View>
        )
      
        
      
    } catch (error) {

      funMessage('Mensaje', 'Error  DetalleIndicadoresFila' + error)
      
    }


  }


  render() {
    
    return (
      <View style={styles.container}>
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