
import React from 'react';
import {Text, View} from 'react-native';
import * as constants from '../Const'




export default class TextTypeA extends React.Component {

render() {

const {text} = this.props;


    return (

      <Text
      
      numberOfLines={3}
      style={{
        fontSize: constants.SIZE_LETRA_MEDIUM,
        color: constants.COLOR_QUINTENARIO_CLARO,
      }}>{text}</Text>

    )
  }
}




