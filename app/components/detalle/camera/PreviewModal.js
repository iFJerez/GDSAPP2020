// Imports: Dependencies
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Modal from "../../../herramientas/ui/ModalSlideLeft";
import Preview from '../../../herramientas/camera/Preview';

// Imports: Redux Actions
import ActionCreators from "../../../redux/actions";
import { ThemeColors } from "react-navigation";

// Screen: Counter 14932
class PreviewModal extends React.Component {

  confirmHandler() {
    const { funEliminarFotoEnvio,envio_seleccionado_data,funSalaVerDetallePreviewFoto } = this.props;
    funSalaVerDetallePreviewFoto(false,null)
    funEliminarFotoEnvio(envio_seleccionado_data)
  }

  render() {
    const { funSalaVerDetallePreviewFoto , ver_sala_detalle_preview_foto, envio_seleccionado_data } = this.props;
    // console.log(envio_seleccionado_data)
    return (
    <Modal
        isVisible={ver_sala_detalle_preview_foto}
        closeHandler={() => funSalaVerDetallePreviewFoto(false, null)}
    >
         <Preview 
            close={() => funSalaVerDetallePreviewFoto(false, null)}
            foto={envio_seleccionado_data?.foto}
            action={
              {
                method: () => this.confirmHandler(),
                label: 'Borrar Foto'
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
    ver_sala_detalle_preview_foto: state.flashReducer.ver_sala_detalle_preview_foto,
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
