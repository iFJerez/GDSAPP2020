import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {funMessage} from '../../herramientas/Mensaje'



export default class PrimerComponents extends Component {

  funIndicadores(){
    const {data} = this.props

    //funMessage('Mensaje', 'Sin Detalles')


  }


  render() {

    const {numero, funIncrementar, funDecrementar } = this.props;


    return (
      <View style={styles.container}>
            <Text> Numero es: {numero} </Text>

            <View style={styles.contBotones}>
              


                <TouchableOpacity style={styles.styleBoton} onPress={()=>funIncrementar(2)}>
                    <Text style={styles.styleText}> Incrementar </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.styleBoton} onPress={()=>funDecrementar(2)}>
                    <Text style={styles.styleText}> Decrementar </Text>
                </TouchableOpacity>

                    {this.funIndicadores()}

            </View>

     </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#098',
  
    },
  contBotones: {
  backgroundColor: '#098',
  flexDirection: 'row'

  },
  styleBoton: {
    backgroundColor: '#056',
    borderRadius: 50,
    margin: 5,
    padding: 10,
    alignItems: 'center',
  },

  styleText: {
    color: '#FFF',
    fontSize: 20
  }
});