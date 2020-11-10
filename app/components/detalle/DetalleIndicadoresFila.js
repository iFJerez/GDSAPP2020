import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';

import IPresencia from './IPresencia'
import IPrecio from './IPrecio'
import IPorcentaje from './IPorcentaje'
import IPromocion from './IPromocion'
import IStatus from './IStatus'

import Titulo from './Titulo'
import Subtitulo from './Subtitulo'


import {funMessage} from '../../herramientas/Mensaje'
import * as constants from '../../herramientas/Const'




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
            <View style={styles.view_divisorPresencia}>
                <IPresencia valor={data.presencia}/>    
            </View>
            <View style={styles.view_divisorTextosUno}>
                  <View style={styles.view_divisorTextos}>
                    <Titulo text={data.titulo}></Titulo>
                    <Subtitulo text={data.subtitulo}></Subtitulo>
                  </View>
                  <View style={styles.view_indicadores}>
                    
                    <IPromocion valor={data.promocion} />              
                    <IPrecio valor={data.precio}/>
                    <IPorcentaje valor={data.porcentaje} />
                  </View>
      
            </View>
            <View style={styles.view_divisorStatus}>
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
  backgroundColor: constants.COLOR_GRIS_A,
  marginBottom: 1,
  padding: 5,
  margin: 2,
  },
  view_fila: {
    flex: 1,
    flexDirection: 'row',
  },
  view_textos: {

    alignItems: 'flex-start',
    borderColor: constants.COLOR_CELESTE,
    borderWidth: 1,
    flex: 1,
  },
  view_divisor: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderColor: constants.COLOR_CELESTE,
    borderWidth: 1,
  },
  view_divisorPresencia: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: constants.COLOR_GRIS_F,
    borderRightWidth: 1,
    marginRight: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  view_divisorTextos: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderColor: constants.COLOR_GRIS_F,
    borderBottomWidth: 1,
    flex: 5,
    paddingBottom: 5
  },
  view_divisorTextosUno: {
    flex: 5
  },
  view_divisorStatus: {
    paddingRight: 10,
  },
  view_indicadores: {
    flexDirection: 'row',
    flex: 1,
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