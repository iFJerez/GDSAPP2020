import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ReactNativePickerModule from "react-native-picker-module";
import * as constants from "../../herramientas/Const";
import TextoBase from "../../herramientas/textos/TextoBase";
import RNPickerSelect from 'react-native-picker-select';


this.state = {
  country: 'uk'
}

class PickerObjecion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        "Sin Objeción",
        "Producto Bloqueado",
        "Producto no planogramado",
        "Producto Quiebre Compañía",
        "Producto No habilitado",
        "Producto en transito",
        "Falso Stock ajustado",
        "Falso Stock sin ajustar",
        "No hay entrega",
      ],
    };
  }

 
  state = {
    language: 'java',
  };

  
  
  handleTouch(index) {
    //console.log(index)
    this.pickerRef.show();
    this.props.touchHandlder(index);
  }

  render() {

    const placeholder = {
      label: 'Select a sport...',
      value: null,
      color: '#9EA0A4',
    };

const sports = [
  {
    label: 'Football',
    value: 'football',
  },
  {
    label: 'Baseball',
    value: 'baseball',
  },
  {
    label: 'Hockey',
    value: 'hockey',
  },
];

    
    const { disabled } = this.props

    const selectedValue = this.props.objecion || "Sin objecion";
    return (
   
   
        <RNPickerSelect
            placeholder={placeholder}
            items={sports}
            onValueChange={value => {
              this.setState({
                favSport0: value,
              });
            }}
            style={styles.inputIOS}
            value={this.state.favSport0}
          />
      

    );
  }
}

const styles = StyleSheet.create({
  inputIOS: {
    width: 100, height: 50,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, 
  },
  container: {
    backgroundColor: constants.COLOR_GRIS_E,
    padding: 10,
    paddingTop: 13,
    margin: 0,
    flexDirection: "row",
    flex: 8,
  },
  estadoObjecion: {
    flex: 5,
  },
  objetar: {
    borderRadius: 3,
    backgroundColor: "#ededed",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  styleTouch: {
    justifyContent: "flex-end",
    padding: 1,
  },
  sty_txt_objetar: {
    color: constants.COLOR_SECUNDARIO,
  },
  sty_txt_objetar_disabled: {
    color: constants.COLOR_GRIS_J,
  },
  sty_txt_title: {
    color: constants.COLOR_GRIS_J,
    fontSize: constants.SIZE_LETRA_LARGE,
  },
  sty_txt_selected: {
    color: constants.COLOR_GRIS_K,
    fontSize: constants.SIZE_LETRA_X_LARGE,
  },
  TextStyle: {
    fontSize: 15,
    color: constants.COLOR_GRIS_I,
    alignItems: "flex-start",
    paddingTop: 5,
  },
  arrowDown: {
    position: "absolute",
    top: -4,
    left: 20,
    width: 0,
    height: 0,
    borderLeftWidth: 25,
    borderLeftColor: "rgba(158, 150, 150, 0)",
    borderRightWidth: 25,
    borderRightColor: "rgba(158, 150, 150, 0)",
    borderTopColor: constants.COLOR_GRIS_A,
    borderTopWidth: 12,
  },
});




// Exports
export default PickerObjecion;
