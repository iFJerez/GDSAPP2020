import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconSimple'



export default class IMore extends Component {



  render() {
    return  (
      <View>
         <Icon name={'ios-more'} size={constants.ICON_VERY_SMALL} color={constants.COLOR_GRIS_J}/>
      </View>
   )
    
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});