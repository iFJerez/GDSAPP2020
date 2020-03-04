import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import * as constants from '../../herramientas/Const'
import PickerObjecion from './PickerObjecion'
import Fotografia from './Fotografia'



export default class SalasListadoInCo extends Component {

  render() {
    
    return  (
      <View style={styles.container}>
              <View style={styles.st_ind}>
                 <PickerObjecion />
              </View>
              <View style={styles.st_ind}>
                 <Fotografia />
              </View>
      </View>
   )
    
  }

}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  st_ind: {flex: 1},
  
});