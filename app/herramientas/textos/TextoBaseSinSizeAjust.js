import React from 'react';
import {Text} from 'react-native';

const TextoBase = (props) => (
    <Text
      numberOfLines={ props.numberOfLines || 1 }
      style={props.style}>
        {props.children}
    </Text>)

export default TextoBase