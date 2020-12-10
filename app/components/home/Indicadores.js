import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import TextTypeHomeInd from '../../herramientas/textos/TextTypeHomeInd'
import TextTypeHomeLugar from '../../herramientas/textos/TextTypeHomeLugar'
import TextTypeHomeName from '../../herramientas/textos/TextTypeHomeName'
import * as constants from '../../herramientas/Const'
import IndicadoresDiferencia from './IndicadoresDiferencia'

export default class HomeIndicadores extends Component {
  render() {
    const {data, i} = this.props
     //console.log(data)
    return (
      <View key={"ind" + i} style={styles.container}>
              <View style={styles.st_diferencia}>   
             <IndicadoresDiferencia numero={data.diferencia}/>
             
            </View>  
            <View style={styles.st_indicadores_fuente}>   
             <TextTypeHomeLugar  text={data.fuente.toUpperCase().substr(0,2)}/>
            </View> 
            
             <View style={styles.st_indicadores_valor}>   
             
             <TextTypeHomeInd  text={data.valor}/>
            </View>  
            <View style={styles.st_indicadores_texto}>
                <TextTypeHomeName  text={data.indicador  }/>
            </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    backgroundColor: constants.COLOR_GRIS_C,
    marginHorizontal: 10,
    marginVertical: 8,
    borderRadius: 5,
    padding: 5,
    
  },
  
  st_indicadores_progres: {flex: 1, marginHorizontal: 10},
  st_indicadores_texto: {flex: 2,  alignItems: 'center'},
  st_indicadores_valor: {flex: 3, alignItems: 'center'},
  st_diferencia: {flex: 2, alignItems: 'center'},
  st_indicadores_fuente: {height: 22, position: 'absolute',
   top: -5, left: -5,  alignItems: 'center',
   backgroundColor: constants.COLOR_BLANCO,
   borderRadius: 5,
   borderWidth: 2,
   borderColor: constants.COLOR_GRIS_E,

  },
});