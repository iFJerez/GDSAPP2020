
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
        fontSize: constants.SIZE_LETRA_MEDIUM,
        textAlignVertical: "center",
        textAlign: "center",
        color: constants.COLOR_GRIS,
        padding: 2,
      }}>{text}</Text>
    
    )
  }
}




