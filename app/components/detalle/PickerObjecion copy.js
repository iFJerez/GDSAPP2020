import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ReactNativePickerModule from "react-native-picker-module";
import * as constants from "../../herramientas/Const";
import TextoBase from "../../herramientas/textos/TextoBase";

class PickerObjecion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {id_objecion: "0", objecion: "Sin Objecion"},
        {id_objecion: "1", objecion: "Producto Bloqueado"},
        {id_objecion: "2", objecion: "Producto no planogramado"},
        {id_objecion: "3", objecion:  "Producto Quiebre Compañía"},
        {id_objecion: "4", objecion:  "Producto No habilitado"},
        {id_objecion: "6", objecion: "Producto en transito"},
        {id_objecion: "6", objecion:  "Falso Stock ajustado"},
        {id_objecion: "7", objecion:  "Falso Stock sin ajustar"},
        {id_objecion: "8", objecion:  "No hay entrega"},
      ],
    };
  }

  handleTouch(index) {
    //console.log(index)
    this.pickerRef.show();
    this.props.touchHandlder(index);
  }

  render() {
    
    const { disabled } = this.props

    const selectedValue = this.props.objecion || "Sin objecion";
    return (
      <View style={styles.container}>
        <View style={styles.arrowDown} />
        <View style={styles.estadoObjecion}>
          <TextoBase style={styles.sty_txt_title}>Estado Objeción</TextoBase>
          <TextoBase style={styles.sty_txt_selected}>
            {selectedValue}
          </TextoBase>
        </View>
        <TouchableOpacity
          disabled={disabled}
          style={styles.styleTouch}
          onPress={() => {
            this.pickerRef.show();
          }}
        >
          <View style={styles.objetar}>
            <TextoBase style={disabled ? styles.sty_txt_objetar_disabled : styles.sty_txt_objetar}>Objetar ></TextoBase>
          </View>
        </TouchableOpacity>

        <ReactNativePickerModule
          pickerRef={(e) => (this.pickerRef = e)}
          value={this.state.data.indexOf(this.props.objecion)}
          title={"Seleccione Objeción"}
          items={this.state.data}
          onValueChange={(index) => {
            // this.setState({
            //   selectedValue: index
            // })
            this.handleTouch(index);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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