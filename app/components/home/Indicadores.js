import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import ProgressBar from '../../herramientas/ProgressBar'
import TextTypeA from '../../herramientas/textos/TextTypeA'
import TextTypeB from '../../herramientas/textos/TextTypeB'
import * as constants from '../../herramientas/Const'
import IconDiferencia from '../../herramientas/IconDiferencia'

export default class HomeIndicadores extends Component {
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
                <ProgressBar numero={data.valor>100?100:data.valor}/>
            </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 80,
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