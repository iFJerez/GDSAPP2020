import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";


export default class Accordian extends Component{


  
  render() {

    const {grados} = this.props

    return (
<View>

    <Text>Soy el componente A entrego : {grados}</Text>

</View>
    )
  }



}

const styles = StyleSheet.create({
    styleBoton: {
        backgroundColor: '#567',
    
      },
    styleText: {
      color: '#FFF',
      padding: 5,
    }
    
    
});