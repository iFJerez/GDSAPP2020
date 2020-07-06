// Imports: Dependencies
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Modal from '../../UI/Modal/ModalSlideLeft';
import Preview from '../../camera/Preview';

// Imports: Redux Actions
import ActionCreators from "../../../redux/actions";
import { ThemeColors } from "react-navigation";

// Screen: Counter 14932
class PreviewModal extends React.Component {

  confirmHandler() {
    const { funMostrarPreviewCamera , funSalaVerDetalleFoto,funGuardarEnvio,envio_seleccionado_data, preview_detalle_camara } = this.props;
    funSalaVerDetalleFoto(false)
    funMostrarPreviewCamera(false,null)
    funGuardarEnvio({
      ...envio_seleccionado_data,
      foto: preview_detalle_camara?.foto
    })
  }

  render() {
    const { funMostrarPreviewCamera , preview_detalle_camara, envio_seleccionado_data } = this.props;
    // console.log(envio_seleccionado_data)
    return (
    <Modal
        isVisible={preview_detalle_camara.visible}
        closeHandler={() => funMostrarPreviewCamera(false, null)}
    >
         <Preview 
            close={() => funMostrarPreviewCamera(false, null)}
            foto={preview_detalle_camara.foto}
            action={
              {
                method: () => this.confirmHandler(),
                label: 'Guardar'
              }
            }
            />
    </Modal>
    )
  }
}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    preview_detalle_camara: state.flashReducer.preview_detalle_camara,
    envio_seleccionado_data: state.flashReducer.envio_seleccionado_data
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
)(PreviewModal);
