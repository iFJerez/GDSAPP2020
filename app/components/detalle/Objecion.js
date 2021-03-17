import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as constants from "../../herramientas/Const";
import PickerObjecion from "./PickerObjecion";
import Fotografia from "../envios/Fotografia/Fotografia";

export default class Objecion extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.picker}>
        <PickerObjecion {...this.props} />
      </View>
      <View style={styles.foto}>
        <View style={styles.foto}>
          <Fotografia objecion={this.props.objecionObj} />
        </View>
      </View>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
   
  },
  picker: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
   
  },
  foto: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    alignContent: 'flex-end',
    alignSelf: 'flex-end'
   
  },
  st_ind: { flex: 1 },

  StyleAction: {

    backgroundColor: constants.COLOR_BLANCO,
    borderColor: constants.COLOR_GRIS_F,
    borderWidth: 1,
    marginHorizontal: 8,
    marginVertical: 3,
    borderRadius: 10,
    alignItems: "center",
  },
});
