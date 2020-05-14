import React from 'react';
import { View, Text,Button, Alert } from 'react-native';

export default class SalaResumen extends React.Component {


  componentDidMount(){
    //Alert.alert('componentDidMount', 'trabajando en Salas Resuemn')
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sala Resumen!!!</Text>
      </View>
    );
  }
}




