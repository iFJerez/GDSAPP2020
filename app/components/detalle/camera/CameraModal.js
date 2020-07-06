// Imports: Dependencies
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Modal from "../../UI/Modal/ModalSlideLeft";
import Camera from "../../../components/camera/Camera";
import Preview from "./PreviewModal";

// Imports: Redux Actions
import ActionCreators from "../../../redux/actions";

// Screen: Counter 14932
class CameraModal extends React.Component {
  render() {
    const {
      funSalaVerDetalleFoto,
      ver_sala_detalle_foto,
      funMostrarPreviewCamera,
    } = this.props;
    return (
      <Modal
        isVisible={ver_sala_detalle_foto}
        closeHandler={() => funSalaVerDetalleFoto(!ver_sala_detalle_foto)}
      >
        <Camera
          closeHandler={() => funSalaVerDetalleFoto(false)}
          takeHandler={(data) => funMostrarPreviewCamera(true, data)}
        />
        <Preview />

      </Modal>
    );
  }
}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    ver_sala_detalle_foto: state.flashReducer.ver_sala_detalle_foto,
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
)(CameraModal);
