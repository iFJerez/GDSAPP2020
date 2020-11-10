import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import * as constants from '../../herramientas/Const'

import Ionicons from 'react-native-vector-icons/Ionicons';


export default class IPorcentaje extends Component {

funLlenar(){
  const {valor} = this.props
  if(valor != null) {
    return(
          <View style={styles.container}>
              <View style={styles.viewCenter}>
                 <Ionicons name={'ios-arrow-dropup-circle'} style={styles.IconStyle}/>
              </View>
               <View style={styles.viewCenter}>
                  <Text style={styles.TextStyle}>{valor}</Text>
                </View>  
          </View>
        )
  }else {
    <View style={styles.container}>
             <View style={styles.viewCenter}>
          <Ionicons name={'ios-arrow-dropdown-circle'} style={styles.IconStyle}/>
        </View>
        <View style={styles.viewCenter}>
        <Text style={styles.TextStyle}>{valor}</Text>
        </View>  
     </View>
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
    borderRightWidth : 1,
    borderRightColor: constants.COLOR_GRIS_F,
    paddingTop: 1,
    paddingHorizontal: 10,

  },
  viewCenter: {
    flex: 1,
    alignItems: "center",
    padding: 1,
  },
  IconStyle: {
    flex: 1,
    color:constants.COLOR_PRIMARIO,
    fontSize:20,
    alignItems:"center"
  },
  
  TextStyle: {
    flex: 1,
    fontSize:15,
    
    fontFamily:"Futura",
    color: constants.COLOR_GRIS
  }

})