import React, {Component} from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import * as constants from '../../herramientas/Const'
import Indicadores from './Indicadores'
import {funMessage} from '../../herramientas/Mensaje'
import TextHomeSubTitulos from './TextHomeSubTitulos'

export default class SalasListadoInCo extends Component {

funIndicadores(){
  const {data} = this.props

  try {
    

return(

  data.indicadores.map((valores, x)=>{
    console.log('va la cosa de nuevo')
    console.log(valores)
    return this.crearIndicadores(valores, x)
  }


)

)

} catch (error) {
  funMessage('mensaje', "error")
  console.log('va la cosa')

    
}
}


crearIndicadores(item, i){
  try {
    return(
      <View style={styles.desc_indicador} key={'ante' + i}>
      <Indicadores data={item} i={i} />
    </View>
    )
  
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
    padding: 2,
    margin: 2,


  },
  card: {
    
    alignItems: 'center',
    padding: 3,
    backgroundColor: constants.COLOR_BLANCO


  },
  desc_indicador: {
  

  },

});