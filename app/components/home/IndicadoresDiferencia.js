import React from 'react';
import { Text, View } from 'react-native';

import * as colores from '../../herramientas/Const'


const color_primario = colores.COLOR_PRIMARIO_CLARO
const color_secundario = colores.COLOR_SECUNDARIO_CLARO
const tamaño_letra = colores.SIZE_LETRA_LARGE

export default class IconApp extends React.Component {


  

  diferencia(numero){

    if(numero>0){
      return (
        <Text style={{ color: color_primario, fontSize: tamaño_letra, fontWeight: 'bold' }}>
          {numero}
        </Text>
      
      )
    }
    else if (numero<0){
      return (
        <Text style={{ color: color_secundario, fontSize: tamaño_letra, fontWeight: 'bold' }}>
          {numero}
        </Text>
      )
    }

  }


  render() {
    const {numero} = this.props;
    return (
      <>
      {this.diferencia(numero)}
      </>
      
    );
  }
}





