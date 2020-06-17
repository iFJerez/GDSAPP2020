import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import * as constants from '../../../herramientas/Const';
import Icon from '../../../herramientas/IconSimple';
import IconAntDesign from '../../../herramientas/IconAntDesign';


export default class IMore extends Component {


  render() {

    let icon = null
    
    switch(this.props.status) {
      case 'objetado':
        icon = <Text style={{color: constants.COLOR_PRIMARIO,  fontSize: constants.SIZE_LETRA_MEDIUM}}>Realizada</Text>
        break;
      case 'enviado':
          icon = <Icon name={'ios-lock'} size={constants.ICON_SMALL} color={constants.COLOR_GRIS_H}/>
          break;
      default:
        icon = (<Text style={{color: constants.COLOR_SECUNDARIO, fontSize: constants.SIZE_LETRA_MEDIUM}} >Pendiente</Text>)
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