import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconSimple'
import ReactNativePickerModule from 'react-native-picker-module'



export default class SalasListadoInCo extends Component {

  state = {
    selectedValue: "Seleccione Objecion",
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
<TouchableOpacity style={styles.styleTouch} onPress={() => {this.pickerRef.show()}}>
  <View style={styles.container}> 

      <Text style={styles.TextStyle}>{this.state.selectedValue}</Text>
      <Text>{<Icon name={'ios-alert'} size={constants.ICON_LARGE} color={constants.COLOR_NARANJO}/>}</Text>  

          
          
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
        <Text></Text>
  </View>
</TouchableOpacity>
   )
    
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.COLOR_GRIS_B,
    borderRadius: 10,
    alignItems:"center"
  },
  styleTouch:{
    flex:1,
    padding:1
  },
  TextStyle: {
    fontSize:15,
    fontFamily:"Futura",
    color: constants.COLOR_PRIMARIO,
    alignItems:"center",
    paddingTop:5
  }
});