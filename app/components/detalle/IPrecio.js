import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconSimple'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default class IPrecio extends Component {

funLlenar(){
  const {valor} = this.props
  if(valor != null) {
    return(
          <View style={styles.container}>
              <View style={styles.viewCenter}>
                <MaterialIcons name="monetization-on" style={styles.IconStyle}/>
              </View>
              <View style={styles.viewCenter}>
                <Text style={styles.TextStyle}>{valor} </Text>  
              </View>    
          </View>
        )
  }

}

  render() {
    
    return (
      <View>
            {this.funLlenar()}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRightWidth : 1,
    borderRightColor: constants.COLOR_GRIS_F,
    paddingTop: 1,
    paddingHorizontal: 10,
  
  },
  viewCenter: {
    alignItems: 'center',
    padding: 1,
  },
  IconStyle: {
    flex: 1,
    color:constants.COLOR_PRIMARIO,
    fontSize:20,
    
  },
  TextStyle: {
    flex: 1,
    fontSize:15,
    fontFamily:"Futura",
    color: constants.COLOR_GRIS,
    
  }

})