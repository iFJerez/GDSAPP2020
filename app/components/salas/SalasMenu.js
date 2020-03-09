import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Buscador from './BuscadorSalas'


export default class SalasMenu extends Component {


  render() {

    const {filterSearch} = this.props;

    return (
      <View style={styles.container}>
          <Buscador filterSearch={filterSearch}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {

    
  },


});