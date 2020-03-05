import React, {Component} from 'react';
import { StyleSheet, View, Picker} from 'react-native';

import IPresencia from './IPresencia'
import IPrecio from './IPrecio'
import IPorcentaje from './IPorcentaje'
import IPromocion from './IPromocion'

import Titulo from './Titulo'
import Subtitulo from './Subtitulo'


import {funMessage} from '../../herramientas/Mensaje'
import * as constants from '../../herramientas/Const'
import { ScrollView } from 'react-native-gesture-handler';



export default class DetalleIndicadoresFila extends Component {

  funIndicadores(){
    const {data, i} = this.props

try {

        return(      
        <View style={styles.view_fila} key={i} >
            <View style={styles.view_textos}>
                <Titulo text={data.titulo}></Titulo>
                <Subtitulo text={data.subtitulo}></Subtitulo>
            </View>
         
            <ScrollView horizontal={true}  style={styles.view_scroll}>
                 <View style={styles.view_indicadores}>
                 <IPromocion valor={data.promocion} />
                  <IPresencia valor={data.presencia}/>
                  <IPrecio valor={data.precio}/>
                  <IPorcentaje valor={data.porcentaje} />

                  </View>
            </ScrollView>


           
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
  padding: 5
  },
  view_fila: {
    flex: 1,
    flexDirection: 'row',
  },
  view_textos: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  view_indicadores: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  view_scroll: {
    flex: 1,
    paddingHorizontal: 30
    

  },
  
});