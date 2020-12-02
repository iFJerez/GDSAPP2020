import React, {Component} from 'react';
import { StyleSheet, View, Text,Touchable} from 'react-native';
import * as constants from '../../herramientas/Const'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class IPromocion extends Component {

funLlenar(){
  const {valor, semaforo} = this.props
  const iconStyle = semaforo!=null ? (semaforo? styles.IconStyleTrue:styles.IconStyleFalse) : styles.IconStyle
  if(valor != null) {
    return(
      
          <View style={styles.container}>
                <View style={styles.containerInd}>
                  <View style={styles.viewCenter}>
                      <Ionicons name="ios-pricetags" style={iconStyle}/>
                    </View>
                    <View style={styles.viewCenter}>
                      <Text style={styles.TextStyle}>{valor} </Text>  
                    </View>
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
    color:constants.COLOR_QUINTENARIO_CLARO,
    fontSize:20,
  },
  IconStyleTrue: {
    flex: 1,
    color:constants.COLOR_PRIMARIO,
    fontSize:20,
  },
  IconStyleFalse: {
    flex: 1,
    color:constants.COLOR_SECUNDARIO,
    fontSize:20,
  },
  
  TextStyle: {
    flex: 1,
    fontSize:15,
    fontFamily:"Futura",
    color: constants.COLOR_GRIS
  }

})