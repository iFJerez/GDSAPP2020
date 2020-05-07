import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReactNativePickerModule from 'react-native-picker-module';
import * as constants from '../../herramientas/Const';
import Icon from '../../herramientas/IconSimple';
import TextoBase from '../../herramientas/textos/TextoBase';



export default class SalasListadoInCo extends Component {

  state = {
    selectedValue: 'Sin Objeción',
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
  <View style={styles.container}> 
      <View style={styles.estadoObjecion}>
        <TextoBase style={styles.sty_txt_title}>Estado Objeción</TextoBase>
        <TextoBase style={styles.sty_txt_selected}>{this.state.selectedValue}</TextoBase>
      </View>
        <TouchableOpacity
          style={styles.styleTouch}
          onPress={() => {this.pickerRef.show()}}>
          <View style={styles.objetar}>
            <TextoBase style={styles.sty_txt_objetar}>Objetar ></TextoBase>
          </View>
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
    backgroundColor: constants.COLOR_GRIS_E,
    padding: 10,
    margin: 0,
    flexDirection: 'row',
    flex: 8
  },
  estadoObjecion: {
    flex: 5
  },
  objetar: {
    borderRadius: 3,
    backgroundColor: '#ededed',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  styleTouch:{
    justifyContent: 'flex-end',
    padding:1
  },
  sty_txt_objetar: {
    color: constants.COLOR_SECUNDARIO
  },
  sty_txt_title:{
    color: constants.COLOR_GRIS_J,
    fontSize: constants.SIZE_LETRA_LARGE
  },
  sty_txt_selected:{
    color: constants.COLOR_GRIS_K,
    fontSize: constants.SIZE_LETRA_X_LARGE
  },
  TextStyle: {
    fontSize:15,
    color: constants.COLOR_GRIS_I,
    alignItems:"flex-start",
    paddingTop:5
  }
});