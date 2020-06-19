import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import IPresencia from './IPresencia'
import IPrecio from './IPrecio'
import IPorcentaje from './IPorcentaje'
import IPromocion from './IPromocion'
import IStatus from './IStatus'

import Titulo from './Titulo'
import Subtitulo from './Subtitulo'


import {funMessage} from '../../../herramientas/Mensaje'
import * as constants from '../../../herramientas/Const'




export default class DetalleIndicadoresFila extends Component {

  funIndicadores(){
    const {data, i} = this.props
    let status = ''
    if (data.objecion && data.objecion.status) {
      status = data.objecion.status
    }

  try {
        return(    
        <View style={styles.view_fila} key={i} >
  

          <View style={styles.view_textos}>
            <Titulo text={data.titulo}></Titulo>
            <Subtitulo text={data.subtitulo}></Subtitulo>
          </View>
          <View style={styles.view_status}>
            <IStatus status={status}/>
          </View>
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
  marginBottom: 1,
  padding: 2,
  
  },
  view_fila: {
    
    flexDirection: 'row',

  },
  view_textos: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: "flex-end",
    paddingLeft: 10,
  },
  view_indicadores: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  view_scroll: {
    flex: 1,
    paddingHorizontal: 30
    

  },

  view_status: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    paddingHorizontal: 5,
  },
  
});