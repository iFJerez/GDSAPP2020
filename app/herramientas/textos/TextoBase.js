import React from 'react';
import {Text} from 'react-native';

const TextoBase = (props) => (
    <Text
      adjustsFontSizeToFit
      numberOfLines={ props.numberOfLines || 2 }
      style={props.style}>
        {props.children}
    </Text>)

export default TextoBase