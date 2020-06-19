import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import * as constants from '../../../herramientas/Const'

import Ionicons from 'react-native-vector-icons/Ionicons';


export default class IPorcentaje extends Component {

funLlenar(){
  const {valor} = this.props
  if(valor != null) {
    return(
          <View style={styles.container}>
             <View >
               <Ionicons name={'ios-arrow-dropup-circle'} style={styles.IconStyle}/>
               </View>
              <View>
                <Text style={styles.TextStyle}>{valor}</Text>
                </View>  
          </View>
        )
  }else {
    <View style={styles.container}>
        <View >
          <Ionicons name={'ios-arrow-dropdown-circle'} style={styles.IconStyle}/>
        </View>
     <View>
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
    backgroundColor: constants.COLOR_BLANCO,
    borderColor: constants.COLOR_GRIS_F,
    borderWidth: -2,
    borderRadius: 5,
    margin:2
  },
  IconStyle: {
    flex: 1,
    color:constants.COLOR_PRIMARIO,
    fontSize:20,
    paddingLeft:12,
    paddingTop:3,
    alignItems:"center"
  },
  TextStyle: {
    flex: 1,
    fontSize:15,
    padding:3,
    fontFamily:"Futura",
    color: constants.COLOR_GRIS
  }

})