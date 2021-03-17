import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import * as constants from "../../../herramientas/Const";
import TextoBase from "../../../herramientas/textos/TextoBase";
import Cadenas from "../../../herramientas/Cadenas"
import LinearGradient from "react-native-linear-gradient";
import {fechaConvierteSQLTZ} from '../../../herramientas/Fechas'

export default class DetalleSucursalHearer extends Component {

  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <LinearGradient 
          start={{x: 0.5, y: 0}} 
          end={{x: 0.5, y: 1}}
          locations={[0,0.15,0.9,1]}
          colors={[constants.COLOR_GRIS_D,'#fff','#fff', constants.COLOR_GRIS_D,]}>
          <View style={styles.sucursalHeader}>
            <View style={styles.logo}>
              
              <Cadenas cadena={this.props.cadena} />
            </View>
            <View style={styles.detalleSuc}>
              <TextoBase style={styles.sty_text_desc_sucursal}>
                {this.props.desc_sala}
              </TextoBase>
              <TextoBase style={styles.sty_text_direccion}>
                {this.props.direccion}
              </TextoBase>
              <TextoBase style={styles.sty_text_fechaHora}>
                {fechaConvierteSQLTZ(this.props.fechaHora)}
              </TextoBase>
              
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: constants.COLOR_GRIS_D,
  },
  st_icono: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  sty_image: { width: 90, height: 90, padding: 10 },
  sucursalHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  sty_text_desc_sucursal: {
    fontSize: constants.SIZE_LETRA_XX_LARGE,
    textAlignVertical: "center",
    textAlign: "left",
    fontWeight: "bold",
    color: constants.COLOR_QUINTENARIO,
  },
  sty_text_fechaHora:{
    fontSize: constants.SIZE_LETRA_X_LARGE,
    textAlignVertical: "center",
    textAlign: "left",
    color: constants.COLOR_QUINTENARIO,
    marginBottom: 5,
    marginTop: 5,
    fontWeight: "bold",
  },

  sty_text_direccion: {
    fontSize: constants.SIZE_LETRA_X_LARGE,
    textAlignVertical: "center",
    textAlign: "left",
    color: constants.COLOR_QUINTENARIO_CLARO,

  },
  detalleSuc: {
    flex: 3,
    flexDirection: "column",
    alignContent: "flex-start",
    paddingLeft: 10,
    justifyContent: "flex-start",
  },
});
