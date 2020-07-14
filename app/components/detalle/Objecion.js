import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import * as constants from '../../herramientas/Const'
import PickerObjecion from './PickerObjecion'
import Fotografia from './Fotografia'



export default class Objecion extends Component {

  render() {
    return  (
      <View style={styles.container}>

                 <PickerObjecion {...this.props}/>
                 <Fotografia objecion={this.props.objecionObj}/>
      </View>
   )

  }

}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      alignItems: 'center',
      flex:1,

  },
  st_ind: {flex: 1},

  StyleAction: {
    flex: 1,
    backgroundColor: constants.COLOR_BLANCO,
    borderColor: constants.COLOR_GRIS_F,
    borderWidth: 1,
    marginHorizontal: 8,
    marginVertical: 3,
    borderRadius: 10,
    alignItems:"center"
  },
});