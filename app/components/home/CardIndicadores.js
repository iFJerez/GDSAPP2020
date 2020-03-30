import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import * as constants from '../../herramientas/Const'
import Indicadores from './Indicadores'

export default class SalasListadoInCo extends Component {

funIndicadores(){
  const {data} = this.props

  try {
    

return(

  data.map((valores, x)=>{
  return  valores.indicadores.map((data, i)=> {
      return (
        <View style={styles.container}>
            <Indicadores data={data}/>
      
      </View>
      
      )

    }


   )
  }
)

)

} catch (error) {
    
}
}



  
  render() {
   
    return (
      <View style={styles.container}>
          {this.funIndicadores()}
     
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

});