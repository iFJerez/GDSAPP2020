import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import TextA from '../../herramientas/textos/TextTypeC'
import TextType2 from '../../herramientas/textos/TextType2'
import * as constants from '../../herramientas/Const'
import TareasEstado from './TareaDetallesEstado'

export default class CardUsuario extends Component {
  render() {
    const {data} = this.props
    return (
      <View style={styles.container}>
           
    
                    <View style={styles.st_indicadores_valor}>   
                        <TextA  text={"01. Inteligente"}/>
                    </View>  
                    <View style={styles.st_indicadores_texto}>
                        <TextType2  text={"Quiebre"}/>
                    </View>
                    <View style={styles.st_indicadores_valor}>   
                        <TareasEstado  estado={0}/>
                    </View>  
        </View>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.COLOR_BLANCO,
    marginHorizontal: 8,
    marginVertical: 3,
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row'
  },
  st_indicadores_texto: {},
  st_indicadores_valor: { flex: 1},
});