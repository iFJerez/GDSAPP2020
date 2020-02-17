import React from 'react';
import { Text, View } from 'react-native';

import * as colores from '../herramientas/Const'


export default class IconApp extends React.Component {



  render() {
    const {text} = this.props;
    return (
      
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: colores.COLOR_SECUNDARIO_CLARO,
          borderRadius: 5,
          width: '100%',
          padding: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
          {text}
        </Text>
      </View>
      
      
    );
  }
}





