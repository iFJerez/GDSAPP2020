import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {funMessage} from '../../herramientas/Mensaje'



export default class PrimerComponents extends Component {

  funIndicadores(){
    const {data} = this.props

    //funMessage('Mensaje', 'Sin Detalles')


  }


  render() {

const {numero, funDesIncrementar } = this.props;


    return (
      <View style={styles.container}>
            <Text> Numero es: {numero} </Text>


        <TouchableOpacity style={styles.styleBoton} onPress={()=>funDesIncrementar(2)}>
            <Text style={styles.styleText}> boton Cambiar </Text>
        </TouchableOpacity>


            {this.funIndicadores()}

     </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#098'
  

  },
  styleBoton: {
    backgroundColor: '#056',
    borderRadius: 50,
    margin: 50,
    padding: 20,
    alignItems: 'center'
  },

  styleText: {
    color: '#FFF',
    fontSize: 20
  }
});