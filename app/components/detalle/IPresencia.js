import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconSimple'



export default class IPresencia extends Component {

funLlenar(){
  const {valor} = this.props
  if(valor != null) {
    return(
          <View>
              {valor?<Icon name={'ios-checkmark'} size={constants.ICON_SMALL} color={constants.COLOR_PRIMARIO}/>:<Icon name={'ios-close'} size={constants.ICON_SMALL} color={constants.COLOR_SECUNDARIO}/>  }
          </View>
        )
  }

}

  render() {
    return  (
      <View>
        {this.funLlenar()}
      </View>
   )
    
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
