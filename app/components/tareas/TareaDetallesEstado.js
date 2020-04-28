import React, {Component} from 'react';
import {Text, StyleSheet } from 'react-native';

import * as constants from '../../herramientas/Const'




export default class TareaBody extends Component {



  render() {
   
    const {estado} = this.props;

    if (estado===0) {

            return (
        
      <Text
      adjustsFontSizeToFit
      numberOfLines={1}
      style={{
        fontSize: constants.SIZE_LETRA_X_LARGE,
        textAlignVertical: "center",
        textAlign: "center",
        color: constants.COLOR_SECUNDARIO,
      }}>Pendiente</Text>
      );

    }
    else{
      return (
        
        <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={{
          fontSize: constants.SIZE_LETRA_X_LARGE,
          textAlignVertical: "center",
          textAlign: "center",
          color: constants.COLOR_PRIMARIO_CLARO,
        }}>Realizada</Text>
        );

    } 

  }
  }


