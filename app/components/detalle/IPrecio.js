import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconSimple'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class IPrecio extends Component {

funLlenar(){
  const {valor} = this.props
  if(valor != null) {
    return(
          <View style={styles.container}>
              <View>
                <Ionicons name="ios-cash" style={styles.IconStyle}/>
              </View>
              <View>
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
    backgroundColor: constants.COLOR_BLANCO,
    borderColor: constants.COLOR_GRIS_F,
    borderWidth: -2,
    borderRadius: 5
  
  },
  IconStyle: {
    flex: 1,
    color:constants.COLOR_PRIMARIO,
    fontSize:20,
    paddingLeft:7,
    paddingTop:3,
  },
  TextStyle: {
    flex: 1,
    fontSize:15,
    padding:3,
    fontFamily:"Futura",
    color: constants.COLOR_GRIS
  }

})