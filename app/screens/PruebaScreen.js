// Imports: Dependencies
import React from "react";
import { StyleSheet} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Modal from "react-native-modal";
import * as colores from "../herramientas/Const";
import Camera from '../components/camera/Camera'

// Imports: Redux Actions
import ActionCreators from "../redux/actions";

// Screen: Counter 14932
class ModalScreen extends React.Component {
  render() {
    const { funSalaVerDetalleFoto , ver_sala_detalle_foto, data_detalle } = this.props;
    console.log('[Prueba Screen]',ver_sala_detalle_foto)
    return (
      <Modal
        testID={"modal2"}
        backdropColor={colores.COLOR_GRIS}
        backdropOpacity={0.5}
        isVisible={ver_sala_detalle_foto}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        onBackdropPress={() => funSalaVerDetalleFoto(!ver_sala_detalle_foto)}
        style={styles.modal}
      >
        <Camera closeHandler={() => funSalaVerDetalleFoto(false)}/>
      </Modal>
    );
  }
}

// Styles

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
    backgroundColor: "red",
  },
  scrollableModal: {
    height: "90%",
    backgroundColor: colores.COLOR_GRIS_D,
  },
  scrollableModalContent1: {
    flex: 1,
    paddingVertical: 30,
  },
  scrollableModalText1: {
    fontSize: 20,
    color: "white",
  },
  scrollableModalContent2: {
    height: 300,
    backgroundColor: "#A9DCD3",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollableModalText2: {
    fontSize: 20,
    color: "white",
  },
  view_close: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    ver_sala_detalle_foto: state.flashReducer.ver_sala_detalle_foto
    // ,
    // data_detalle: state.salasReducer.data_detalle,
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
)(ModalScreen);
