import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import ProgressBar from '../../herramientas/ProgressBar'
import TextTypeA from '../../herramientas/textos/TextTypeA'
import TextTypeB from '../../herramientas/textos/TextTypeB'
import * as constants from '../../herramientas/Const'
import IconDiferencia from '../../herramientas/IconDiferencia'

export default class SalasListadoInCo extends Component {
  render() {
    const {data} = this.props
    return (
      <View style={styles.container}>
            <IconDiferencia numero={data.diferencia}/>
             <View style={styles.st_indicadores_valor}>   
             <TextTypeA  text={data.valor}/>
            </View>  
            <View style={styles.st_indicadores_texto}>
                <TextTypeB  text={data.indicador  }/>
            </View>
            <View style={styles.st_indicadores_progres}>
                
            </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: 90,
    backgroundColor: constants.COLOR_BLANCO,

    marginHorizontal: 8,
    marginVertical: 3,
    borderRadius: 20
  },
  
  st_indicadores_progres: {flex: 1, marginHorizontal: 10},
  st_indicadores_texto: {flex: 1},
  st_indicadores_valor: {flex: 1},
});