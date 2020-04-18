
import React from 'react';
import {Text, View} from 'react-native';
import * as constants from '../Const'




export default class TextTypeB extends React.Component {

render() {

const {text} = this.props;


    return (

      <Text
      adjustsFontSizeToFit
      numberOfLines={1}
      style={{
        fontWeight: 'bold',
        fontSize: constants.SIZE_LETRA_X_LARGE,
        textAlignVertical: "center",
        textAlign: "center",
        color: constants.COLOR_QUINTENARIO_CLARO,
      }}>{text}</Text>
    )
  }
}




