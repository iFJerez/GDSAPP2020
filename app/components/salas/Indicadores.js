import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import ProgressBar from '../../herramientas/ProgressBar'
import TextTypeA from '../../herramientas/textos/TextTypeA'
import TextTypeB from '../../herramientas/textos/TextTypeB'
import * as constants from '../../herramientas/Const'
import IndicadoresDiferencia from './IndicadoresDiferencia'

export default class SalasListadoInCo extends Component {
  render() {
    const {data} = this.props
    return (
      <View style={styles.container}>
          <View style={styles.margen}>
                <View style={styles.st_indicadores_valor}>   
                      <IndicadoresDiferencia  text={data.diferencia}/>
                </View>  
                <View style={styles.st_indicadores_valor}>   
                <TextTypeA  text={data.valor}/>
                </View>  
                <View style={styles.st_indicadores_texto}>
                    <TextTypeB  text={data.indicador}/>
                </View>
          </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: 90,
    backgroundColor: constants.COLOR_BLANCO,
    paddingVertical: 10,
    
  },
  margen: {
  
    backgroundColor: constants.COLOR_BLANCO,
    borderColor: constants.COLOR_GRIS_F,
    borderRightWidth: 1,
  
    
  },
  
  st_indicadores_progres: {flex: 1, marginHorizontal: 10},
  st_indicadores_texto: {flex: 1},
  st_indicadores_valor: {flex: 1},
});