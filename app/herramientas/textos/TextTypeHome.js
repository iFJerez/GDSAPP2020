
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
        fontSize: constants.SIZE_LETRA_XXXX_LARGE,
        color: constants.COLOR_BLANCO,
        fontWeight: "bold"
      }}>{text}</Text>
  
    )
  }
}




