import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as constants from "../../herramientas/Const";
import Icon from "react-native-vector-icons/AntDesign";
import { funMessage } from "../../herramientas/Mensaje";
import ActionCreators from "../../redux/actions";

class Fotografia extends Component {

  getFotoStatus() {
    const { objecion } = this.props
    // console.log('Status Foto:',JSON.stringify(objecion))
    if (objecion && objecion.foto && objecion?.status !== 'enviado') {
      return constants.CON_FOTO
    }
    if (objecion && !objecion.foto && objecion?.status !== 'enviado') {
      return constants.SIN_FOTO
    }
    return constants.FOTO_DESHABILITADA
  }

  getColorStatus() {
    switch(this.getFotoStatus()) {
      case constants.SIN_FOTO:
          return constants.COLOR_SECUNDARIO
      case constants.CON_FOTO:
          return constants.COLOR_PRIMARIO
      case constants.FOTO_DESHABILITADA:
          return constants.COLOR_GRIS_H
      default:
          return constants.COLOR_GRIS_K
    }
  }

  getHandler() {
    const { funSalaVerDetalleFoto, funSalaVerDetallePreviewFoto } = this.props; 
    switch(this.getFotoStatus()) {
      case constants.SIN_FOTO:
          return (() => funSalaVerDetalleFoto(true,this.props.objecion))
      case constants.CON_FOTO:
          return (() => funSalaVerDetallePreviewFoto(true,this.props.objecion))
      default:
          return (() => null)
    }
  }




  render() {

    // console.log('[Fotografia]', JSON.stringify(this.props))
    const { funSalaVerDetalleFoto } = this.props;
    const fotoStatus = this.getFotoStatus()
    

    return (
      <TouchableOpacity
        style={styles.styleTouch}
        onPress={this.getHandler()}
        disabled={this.getFotoStatus() === constants.FOTO_DESHABILITADA}
      >
        {/* <TouchableOpacity style={styles.styleTouch} onPress={() => {funMessage('Mensaje', 'Por construir...')}}> */}

        <View style={styles.container}>
          <Icon
            name={"camera"}
            size={constants.ICON_SMALL}
            color={this.getColorStatus()}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignItems: "center",
    margin: 0,
  },
  styleTouch: {
    flex: 1,
    padding: 5,
  },
  TextStyle: {
    fontSize: 15,
    fontFamily: "Futura",
    color: constants.COLOR_PRIMARIO,
    alignItems: "center",
    paddingTop: 5,
  },
});

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
function mapDispatchToProps(dispatch) {
  const combiner = Object.assign({}, ActionCreators, { dispatch });
  return bindActionCreators(combiner, dispatch);
}

// Exports
export default connect(
  null,
  mapDispatchToProps
)(Fotografia);
