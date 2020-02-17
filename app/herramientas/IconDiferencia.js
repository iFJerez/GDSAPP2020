import React from 'react';
import { Text, View } from 'react-native';

import * as colores from '../herramientas/Const'


export default class IconApp extends React.Component {


  diferencia(numero){

    if(numero>0){
      return (
        <View
        style={{
          position: 'absolute',
          right: -8,
          top: 3,
          backgroundColor: colores.COLOR_PRIMARIO_CLARO,
          borderRadius: 5,
          width: 20,
          height: 14,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
          {numero}
        </Text>
      </View>
      )
    }
    else if (numero<0){
      return (
        <View
        style={{
          position: 'absolute',
          right: -8,
          top: 3,
          backgroundColor: colores.COLOR_SECUNDARIO_CLARO,
          borderRadius: 5,
          width: 20,
          height: 14,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
          {numero}
        </Text>
      </View>
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





