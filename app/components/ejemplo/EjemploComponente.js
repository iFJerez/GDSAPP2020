import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";


export default class Accordian extends Component{


  
  render() {

    const {titulo, grados} = this.props

    return (
<View>
     <TouchableOpacity title={'boton 1' }  style={styles.styleBoton}>
          <Text adjustsFontSizeToFit={true} style={styles.styleText}>  {titulo}</Text>
          <Text adjustsFontSizeToFit={true} style={styles.styleText}> {grados}</Text>
     </TouchableOpacity>
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