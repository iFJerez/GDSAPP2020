import React, {Component} from 'react';
import { StyleSheet, View, } from 'react-native';
import * as constants from '../../../herramientas/Const'
import PickerTarea from './PickerTarea'
import Fotografia from './Fotografia'



export default class Objecion extends Component {

  render() {

    


    return  (
      <View style={styles.container}>

                 <PickerTarea  {...this.props}/>
                 <Fotografia />
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
    marginHorizontal: 8,
    marginVertical: 3,
    borderRadius: 10,
    alignItems:"center"
  },
});