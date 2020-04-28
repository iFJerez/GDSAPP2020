import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import CardFilas from './CardFilas'
import data from '../../api/salas.json'
import Icon from 'react-native-vector-icons/FontAwesome';




export default class CardPrincipal extends Component {

  funRecorrer(){


  return  data.map((fila, i) => {
      return(
  
             <CardFilas fila={fila} i={i} />

      )
    })

  }


  render() {

    


    return (
      <View style={styles.container}>
          <Icon name="pencil" color="#098" size={50}></Icon>
            <Text> Card Principal </Text>
            <ScrollView horizontal={true}>
            <View style={styles.contFilas}>
            {this.funRecorrer()}
            </View>
            </ScrollView>

     </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDD',
    padding: 5,
    margin: 10,
    borderRadius: 5,



    },

    contFilas: {
      flexDirection: 'row',


}

});