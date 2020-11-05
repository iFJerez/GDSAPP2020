import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, FlatList} from 'react-native';
import * as constants from '../../herramientas/Const'
import Indicadores from './Indicadores'
import {funMessage} from '../../herramientas/Mensaje'
import TextHomeSubTitulos from './TextHomeSubTitulos'

export default class SalasListadoInCo extends Component {

funIndicadores(){
  const {data} = this.props

  try {
    

return(

  data.map((valores, x)=>{

    return this.crearIndicadores(valores.indicadores, x)
  }


)

)

} catch (error) {
  funMessage('mensaje', error)
    
}
}


crearIndicadores(item, i){
  try {
    return(
      item.map((valores, x)=>{

        return (<View key={'ante' + x}>
          <Indicadores data={valores} i={x} />
          </View>
        )
      }
    ))
  
  } catch (error) {
    alert(error)
  }
  
}



  
  render() {
   
    return (
      <View style={styles.container}>
        <TextHomeSubTitulos text={'Indicadores'} />
           <View style={styles.card}>
           
           <ScrollView horizontal={true}>
                 {this.funIndicadores()}
          </ScrollView>
          </View>
     
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    backgroundColor: constants.COLOR_BLANCO


  },

});