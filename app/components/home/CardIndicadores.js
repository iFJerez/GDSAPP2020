import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, FlatList} from 'react-native';
import * as constants from '../../herramientas/Const'
import Indicadores from './Indicadores'
import {funMessage} from '../../herramientas/Mensaje'

export default class SalasListadoInCo extends Component {

funIndicadores(){
  const {data} = this.props

  try {
    

return(

  data.map((valores, x)=>{

    return this.crearIndicadores(valores.indicadores)
  }


)

)

} catch (error) {
  funMessage('mensaje', error)
    
}
}


crearIndicadores(item){
  try {
    return(
        <FlatList  
        horizontal={true}
        key={1}
        data={item}
        renderItem={({item}) => <Indicadores data={item} />}
        keyExtractor={(item, index) => '' + index}
/>   
    )
  
  } catch (error) {
    alert(error)
  }
  
}



  
  render() {
   
    return (
      <View style={styles.container}>
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