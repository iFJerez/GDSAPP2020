import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';
import * as constants from '../../herramientas/Const'
import Indicadores from './Indicadores'




export default class TouchIndicador extends Component {

  

  render() {
    const {data} = this.props
    return (
      <View style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={()=>{}} >
          <Indicadores data={data} />
      </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
width: 100,
height: 100,
  },
  
  st_indicadores_progres: {flex: 1, marginHorizontal: 10},
  st_indicadores_texto: {flex: 1},
  st_indicadores_valor: {flex: 1},
});