import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as constants from "../../herramientas/Const";
import Icon from "react-native-vector-icons/AntDesign";
import { funMessage } from "../../herramientas/Mensaje";
import ActionCreators from "../../redux/actions";

class SalasListadoInCo extends Component {
  render() {
    const { funSalaVerDetalleFoto } = this.props;

    return (
      <TouchableOpacity
        style={styles.styleTouch}
        onPress={() => funSalaVerDetalleFoto(true)}
      >
        {/* <TouchableOpacity style={styles.styleTouch} onPress={() => {funMessage('Mensaje', 'Por construir...')}}> */}

        <View style={styles.container}>
          <Icon
            name={"camera"}
            size={constants.ICON_SMALL}
            color={constants.COLOR_SECUNDARIO}
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
)(SalasListadoInCo);
