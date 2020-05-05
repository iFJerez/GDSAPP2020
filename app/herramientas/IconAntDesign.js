import React from 'react';

import Ionicons from 'react-native-vector-icons/AntDesign';
import { Text, View } from 'react-native';

import * as colores from '../herramientas/Const'



export default class IconApp extends React.Component {
  render() {
    const { name, numero, color, size } = this.props;
    return (
      
 


        <View>
        <Ionicons name={name} size={size} color={color} />
        {numero > 0 && (
          <View
            style={{
              position: 'absolute',
              right: -2,
              top: -2,
              backgroundColor: colores.COLOR_SECUNDARIO,
              borderRadius: 10,
              width: 15,
              height: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {numero}
            </Text>
          </View>
        )}
      </View>
      
    );
  }
}





