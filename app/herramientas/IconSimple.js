import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';


export default class IconApp extends React.Component {
  render() {
    const { name, numero, color, size } = this.props;
    return (
      
        <Ionicons name={name} size={size} color={color} />
      
    );
  }
}





