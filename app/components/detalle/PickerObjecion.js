import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconSimple'
import ReactNativePickerModule from 'react-native-picker-module'



export default class SalasListadoInCo extends Component {

  state = {
    selectedValue: null,
    data: [
      "Sin Objeción",
      "Producto Bloqueado",
      "Producto no planogramado",
      "Producto Quiebre Compañía",
      "Producto No habilitado",
      "Producto en transito",
      "Falso Stock ajustado",
      "Falso Stock sin ajustar",
      "No hay entrega"
    ]
};




  render() {
    
    return  (
      <View>

<TouchableOpacity onPress={() => {this.pickerRef.show()}}>
<Text>{this.state.selectedValue}</Text>
<Text>Seleccione Objecion</Text>
<Text>{<Icon name={'logo-game-controller-a'} size={constants.ICON_LARGE} color={constants.COLOR_PRIMARIO}/>}</Text>  
</TouchableOpacity>
          
          
<ReactNativePickerModule
  pickerRef={e => this.pickerRef = e}
  value={this.state.selectedValue}
  title={"Seleccione Objeción"}
  items={this.state.data}
  onValueChange={(index) => {
    this.setState({
       selectedValue: index
    })
}}/>


      </View>
   )
    
  }

}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: constants.COLOR_BLANCO,
    borderWidth: 1,
    marginHorizontal: 8,
    marginVertical: 3,
    borderRadius: 20
  },
  
  st_indicadores_progres: {flex: 1, marginHorizontal: 10},
  st_indicadores_texto: {flex: 1},
  st_indicadores_valor: {flex: 1},
});