import React from 'react';
import { View } from 'react-native';
import ListaDesplegable from '../components/ListaDesplegable'

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ListaDesplegable />
      </View>
    );
  }
}