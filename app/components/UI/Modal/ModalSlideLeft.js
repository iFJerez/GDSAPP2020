// Imports: Dependencies
import React from "react";
import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import * as colores from "../../../herramientas/Const";

// Screen: Counter 14932
export default class ModalScreen extends React.Component {
  render() {
    const { closeHandler , isVisible } = this.props;
    return (
      <Modal
        testID={"modalSlideLeft"}
        backdropColor={colores.COLOR_GRIS}
        backdropOpacity={0.5}
        isVisible={isVisible}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        onBackdropPress={closeHandler}
        style={styles.modal}
      >
        {this.props.children}
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

