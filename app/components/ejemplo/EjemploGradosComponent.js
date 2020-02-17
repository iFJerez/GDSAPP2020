import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";
import ComponenteA from './EjemploComponenteA'
import ComponenteB from './EjemploComponenteB'

export default class Accordian extends Component{


  
  render() {

    const {grados,diferencia} = this.props

    return (
<View>
   <ComponenteA grados={grados}/>
   <ComponenteB diferencia={diferencia}/>

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