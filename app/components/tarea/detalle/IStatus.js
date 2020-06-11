import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import * as constants from '../../../herramientas/Const';
import Icon from '../../../herramientas/IconSimple';
import IconAntDesign from '../../../herramientas/IconAntDesign';


export default class IMore extends Component {


  render() {

    let icon = null
    
    switch(this.props.status) {
      case 'objetado':
        icon = <IconAntDesign name={'exclamationcircle'} size={constants.ICON_VERY_SMALL} color={'tomato'}/>
        break;
      case 'enviado':
          icon = <Icon name={'ios-lock'} size={constants.ICON_SMALL} color={constants.COLOR_GRIS_H}/>
          break;
      default:
        icon = (<Icon name={'ios-more'} size={constants.ICON_VERY_SMALL} color={constants.COLOR_GRIS_J}/>)
    }

    return  (
      <View>
         {(icon)}
      </View>
   )
    
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});