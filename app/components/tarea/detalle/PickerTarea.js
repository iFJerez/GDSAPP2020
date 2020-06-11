import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import ReactNativePickerModule from "react-native-picker-module";
import * as constants from "../../../herramientas/Const";
import TextoBase from "../../../herramientas/textos/TextoBase";

class PickerTarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        "Sin Objeción",
      ],
    };
  }

  handleTouch(index) {
    console.log(index)
    this.pickerRef.show();
    this.props.touchHandlder(index);
  }

  render() {
    
    const { disabled, picker } = this.props

    const selectedValue = this.props.objecion || "Sin objecion";
    return (
      <View style={styles.container}>
        
        <View style={styles.estadoObjecion}>
          <TextoBase style={styles.sty_txt_title}>Estado Tarea</TextoBase>
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
          value={this.state.selectedValue}
          title={"Seleccione Objeción"}
          items={picker}
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
export default PickerTarea;
