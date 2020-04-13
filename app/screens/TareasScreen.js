import React from 'react';
import { View } from 'react-native';
import CardTareas from '../components/tareas/CardTareas'

export default class TareasScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CardTareas />
      </View>
    );
  }
}