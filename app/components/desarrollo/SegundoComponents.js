import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';




export default class PrimerComponents extends Component {

  render() {
    const {data} = this.props
    return (
      <View style={styles.container}>

      <View style={styles.hijo1}>
        <Text> Segundo Componente </Text>
     </View>
     <View style={styles.hijo2}>
        <Text> Segundo Componente </Text>
     </View>
     <View style={styles.hijo3}>
        <Text> Segundo Componente </Text>
     </View>

     </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
  flex: 0.1,
  backgroundColor: '#567',
  flexDirection: 'row'
  },
  hijo1: {
    flex: 3,
    backgroundColor: '#567',
    },
    hijo2: {
      flex: 2,
      backgroundColor: '#672',
      },
      hijo3: {
        flex: 1,
        backgroundColor: '#500667',
        },
});