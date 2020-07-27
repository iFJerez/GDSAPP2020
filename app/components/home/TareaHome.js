import React, { Component } from "react";
import { View, LayoutAnimation, StyleSheet } from "react-native";
import { connect } from "react-redux";
import TareaCardButton from "./TareaCardButton";
import * as constants from "../../herramientas/Const";
import TextHomeSubTitulos from "./TextHomeSubTitulos";

class TareaBody extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedButton: "INTELIGENTE" };
    this.selectionOnPress = this.selectionOnPress.bind(this);
  }

  selectionOnPress(userType) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ selectedButton: userType });
    this.props.touchHandler()
  }

  shouldComponentUpdate(prevProps) {
    return (
      (prevProps.envioTareas !== this.props.envioTareas ||
        prevProps.dataTarea !== this.props.dataTarea)
    );
  }

  obtenerContadorTareas() {
    let count = {};

    if (this.props.dataTarea) {
      const { salas, tareasPicker, ...tareas } = this.props.dataTarea;

      Object.keys(tareas).forEach((key) => {
        if (tareas[key]?.indicadores) {
          tareas[key].indicadores.forEach((v) =>
            count.hasOwnProperty(v.indicador)
              ? (count[v.indicador] += v?.detalles ? v.detalles.length : 0)
              : (count[v.indicador] = v?.detalles ? v.detalles.length : 0)
          );
        }
      });
    }
    return count;
  }

  obtenerContadorTareasRealizadas() {
    let count = {};

    if (this.props.envioTareas) {
      this.props.envioTareas.reduce((obj, val) => {
        if (obj.hasOwnProperty(val.indicador)) {
          obj[val.indicador] += 1;
        } else {
          obj[val.indicador] = 1;
        }
        return obj;
      }, count);
    }
    return count;
  }

  obtenerContadorTareasVsRealizadas() {
    const countPendientes = this.obtenerContadorTareas();
    const countRealizadas = this.obtenerContadorTareasRealizadas();

    return Object.keys(countPendientes).reduce((obj, val) => {
      if (obj[val]) {
        obj[val].pendientes = countPendientes[val];
        obj[val].realizadas = countRealizadas?.[val] ?? 0;
      } else {
        obj[val] = {
          pendientes: countPendientes[val],
          realizadas: countRealizadas?.[val] ?? 0,
        };
      }
      return obj;
    }, {});
  }

  getIcon = (indicador) => {
    switch(indicador) {
      case 'INTELIGENTE':
          return 'rocket1'
      case 'EJECUCION':
          return 'team'
      case 'PROGRAMADAS':
          return 'setting'
      default:
          return 'setting'
    }
  }

  generarTarjetas() {
    const count = this.obtenerContadorTareasVsRealizadas()
    return Object.keys(count)
      .map(v => {
        const icon = this.getIcon(v);
        return (<TareaCardButton
          activa={this.state.selectedButton}
          selectionOnPress={this.selectionOnPress}
          nombre={v}
          base={count[v].pendientes}
          cantidad={count[v].realizadas}
          name_icon={icon}
          key={v}
        />)
      })
  }

  render() {
    const tarjetas = this.generarTarjetas() 
    return (
      <View style={styles.container}>
        <TextHomeSubTitulos text={"Tareas"} />
        <View style={styles.botones}>
         {tarjetas}
          {/* <TareaCardButton
            activa={this.state.selectedButton}
            selectionOnPress={this.selectionOnPress}
            nombre={"INTELIGENTE"}
            base={7}
            cantidad={2}
            name_icon={"rocket1"}
          />

          <TareaCardButton
            activa={this.state.selectedButton}
            selectionOnPress={this.selectionOnPress}
            nombre={"EJECUCION"}
            base={6}
            cantidad={4}
            name_icon={"team"}
          />
          <TareaCardButton
            activa={this.state.selectedButton}
            selectionOnPress={this.selectionOnPress}
            nombre={"PROGRAMADAS"}
            base={5}
            cantidad={3}
            name_icon={"setting"}
          /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLOR_GRIS_D,
  },
  sty_texto: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  sty_icon: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
    alignContent: "center",
  },
  st_indicadores_progres: { marginHorizontal: 10 },
  st_indicadores_texto: {},
  botones: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },

  body: { flex: 1, alignItems: "center" },
});

const mapStateToProps = (state) => {
  // Redux Store --> Component

  const tareas = state.envioReducer.filter((v) => v.type === "TAREAS");
  return { dataTarea: state.userReducer.dataTarea, envioTareas: tareas };
};

export default connect(mapStateToProps)(TareaBody);
