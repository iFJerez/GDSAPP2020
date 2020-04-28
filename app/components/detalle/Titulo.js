
import React from 'react';
import {Text, View} from 'react-native';
import * as constants from '../../herramientas/Const'




export default class TextTypeA extends React.Component {

render() {

const {text} = this.props;


    return (

      <Text
      adjustsFontSizeToFit
      numberOfLines={1}
      style={{
        fontSize: constants.SIZE_LETRA_X_LARGE,
        textAlignVertical: "center",
        textAlign: "center",
        fontWeight: 'bold',
        color: constants.COLOR_QUINTENARIO_CLARO,
      }}>{text}</Text>

    )
  }
}




