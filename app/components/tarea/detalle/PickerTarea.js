import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import ReactNativePickerModule from "react-native-picker-module";
import * as constants from "../../../herramientas/Const";
import TextoBase from "../../../herramientas/textos/TextoBase";
import Icon from 'react-native-vector-icons/Ionicons';


class PickerTarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        "Sin Selección",
      ],
    };
  }

  handleTouch(valueText, index) {
    console.log("value: ", valueText)
          console.log("index: ", index)
    this.pickerRef.show();
    this.props.touchHandlder(valueText);
        this.setState({
             selectedValue: index
            })
  }

  render() {
    try {
          
    const { disabled, picker } = this.props

    
    let posicion = 0;
      posicion = posicion + picker.indexOf(this.props.objecion )  


    const selectedValue = this.props.objecion || "Sin Selección";
    const colorBoton = selectedValue!=="Sin Selección"?constants.COLOR_PRIMARIO : constants.COLOR_SECUNDARIO
    return (
      <View style={styles.container}>
        
        <View style={styles.estadoObjecion}>
          <TextoBase style={styles.sty_txt_title}>estado:   {selectedValue}</TextoBase>

        </View>
        <TouchableOpacity
          disabled={disabled}
          style={styles.styleTouch}
          onPress={() => {
            this.pickerRef.show();
          }}
        >
          <View style={styles.objetar}>
          
            <Icon name={"ios-list-box"} size={constants.ICON_SMALL} color={colorBoton}/>
            
          </View>
        </TouchableOpacity>



        <ReactNativePickerModule
          pickerRef={(e) => (this.pickerRef = e)}
          value={posicion }
          
          title={"Seleccione Objeción"}
          items={picker}
          onValueChange={(valueText, index) => {
            // this.setState({
            //   selectedValue: index
            // })
            this.handleTouch(valueText, index);
          }}
        />
      </View>
    );


  } catch (error) {
     return (
          <View style={styles.objetar}>
          
              <Text style={styles.sty_txt_objetar}>Faltan las opciones</Text>
            
          </View>

     )
  }
  
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 6,
  },
  estadoObjecion: {
    flex: 1,
    justifyContent: "center",
    paddingLeft:10
  },
  objetar: {
    borderRadius: 3,
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
  boton_color_on: {
    color: constants.COLOR_PRIMARIO,
  },
  boton_color_off: {
    color: constants.COLOR_SECUNDARIO,
  },
  sty_txt_title: {
    color: constants.COLOR_GRIS_J,
    fontSize: constants.SIZE_LETRA_MEDIUM,
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
export default PickerTarea;
