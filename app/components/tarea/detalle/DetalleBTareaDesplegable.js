import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import DetalleIndicadoresFila from "./DetalleIndicadoresFila";
import ActionCreators from "../../../redux/actions";
import {fechaSQL} from '../../../herramientas/Fechas'

import * as constants from "../../../herramientas/Const";
import Tarea from "./Tarea";

class DetalleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
    };
  }

  handleObjecion(objItem, objecion) {
    const dataObjecion = {
      type: "TAREAS",
      id_sku: this.props.data.id_sku,
      id_indicador: this.props.section.id_indicador,
      desc_indicador: this.props.section.desc_indicador,
      id_sala: this.props.section.id_sala,
      fechaHora: this.props.section.fechaHora,
      direccion: this.props.section.direccion,
      desc_sala: this.props.section.desc_sala,
      cadena: this.props.section.cadena,
      desc_sku: this.props.data.titulo,
      ean: this.props.data.subtitulo,
      status: "realizado",
      fechaHoraEnvio: fechaSQL(),
      objecion: objItem,
      foto: objecion?.foto ? objecion.foto : null  
    };

    console.log("[Data Objecion]", dataObjecion);

    if (objItem === "Sin Selección") {
      this.props.funEliminarEnvio(dataObjecion);
    } else {
      this.props.funGuardarEnvio(dataObjecion);
    }
  }

  funBuscaPicker() {
    const { dataTarea } = this.props;
    //console.info('picker', dataTarea.tareasPicker)
  }

  render() {
    const objecion = this.props.data_tareas.find(
      (v) =>
        this.props.data.id_sku === v.id_sku &&
        this.props.section.desc_indicador === v.desc_indicador &&
        this.props.section.id_sala === v.id_sala &&
        this.props.section.fechaHora === v.fechaHora &&
        "TAREAS" === v.type
    );

    const objecionDetalle = objecion ? objecion.objecion : null;
    const objecionDisabled = objecion && objecion.status === "enviado";

    const { data, i, picker } = this.props;
    const {
      data: dataSection,
      indicadores,
      ...dataGeneral
    } = this.props.section;
    return (
      <View style={styles.container} key={i}>
        <DetalleIndicadoresFila data={data} />
        <Tarea
          picker={picker}
          objecion={objecionDetalle}
          objecionObj={objecion}
          disabled={objecionDisabled}
          touchHandlder={(objItem) => this.handleObjecion(objItem, objecion)}
        />
      </View>
    );
  }

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 1,
    backgroundColor: constants.COLOR_BLANCO,
  },

  child: {},
});

const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    data_tareas: state.envioReducer,
    dataTarea: state.userReducer.dataTarea.tareasPicker,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
function mapDispatchToProps(dispatch) {
  const combiner = Object.assign({}, ActionCreators, { dispatch });

  return bindActionCreators(combiner, dispatch);
}

// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetalleB);
