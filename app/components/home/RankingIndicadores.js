import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import TextTypeHomeRankValor from '../../herramientas/textos/TextTypeHomeRankValor'
import TextTypeHomeName from '../../herramientas/textos/TextTypeHomeName'
import * as constants from '../../herramientas/Const'
import IndicadoresDiferencia from './IndicadoresDiferencia'

export default class HomeIndicadores extends Component {
  render() {
    const {data} = this.props
    return (
      <View style={styles.container}>
 
            
             <View style={styles.st_indicadores_valor}>   
             
             <TextTypeHomeRankValor  text={data.valor}/>
            </View>  
            <View style={styles.st_diferencia}>   
             <IndicadoresDiferencia numero={data.diferencia}/>
             
            </View> 
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    
    
  },

  st_indicadores_texto: {flex: 1,  alignItems: 'center'},
  st_indicadores_valor: {flex: 1, alignItems: 'center'},
  st_diferencia: {flex: 1, alignItems: 'center'}
});