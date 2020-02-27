import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import Indicador from '../salas/Indicadores'



export default class DetalleIndicadores extends Component {
  render() {
    const {data} = this.props
    return (
      <View style={styles.container}>
         <Indicador data={data}  />
         <DetalleIndicadores />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center'
  },
  
});