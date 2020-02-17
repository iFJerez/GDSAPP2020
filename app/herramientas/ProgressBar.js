import React from 'react';
import {View, StyleSheet } from 'react-native';
import * as constants from '../herramientas/Const'



export default class ProgressBar extends React.Component {
  render() {
    const {numero} = this.props;
    const ancho = numero + '%'
    return (
      <View style={styles.container}>
        <View style={[styles.progres, { width: '100%'}]}>
          <View style={[styles.progressbar, { width: ancho}]}>
      
          </View>
        </View>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 5,

   
  },
  progres: {
    backgroundColor: constants.COLOR_GRIS_F,  borderRadius:5,
    margin:2
   },
  progressbar: {
   backgroundColor: constants.COLOR_PRIMARIO_CLARO, borderRadius:5, padding:1,

  }
});



