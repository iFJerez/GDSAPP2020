import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconSimple'



export default class IPrecio extends Component {

funLlenar(){
  const {valor} = this.props
  if(valor != null) {
    return(
          <View style={styles.container}>
              <Text>{valor} </Text>  
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
    borderWidth: 1,
    marginHorizontal: 8,
    marginVertical: 3,
    borderRadius: 20
  },
  
  st_indicadores_progres: {flex: 1, marginHorizontal: 10},
  st_indicadores_texto: {flex: 1},
  st_indicadores_valor: {flex: 1},
});