// Imports: Dependencies
import React from 'react'
import {TouchableOpacity, StyleSheet, View,Text} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from "react-native-modal"
import Icon from '../herramientas/Icon'
import * as colores from '../herramientas/Const'

// Imports: Redux Actions
import ActionCreators from '../redux/actions'
import { ScrollView } from 'react-native-gesture-handler'
import EnvioDetalle from '../components/pendientesEnvio/EnvioDetalle'
import EnvioBotonEnviar from '../components/pendientesEnvio/EnvioBotonEnviar'

class ModalScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { scrollOffset: 0, scrollViewRef: 0 };
    this.scrollViewRef = React.createRef();
    
  }


  convertirObjeciones (objeciones) {
    const objecionesReduced = objeciones
      .filter( v => v.status !== 'enviado')
      .reduce( (obj,val) => {
        //console.info(val.indicador)
        const key = 'sala' + val.id_sala
        if(obj[key]) {
          
          obj[key].acciones.push({
            type: val.type,
            indicador: val.indicador,
            fechaHora:val.fechaHora,
            item: val.desc_sku,
            ean: val.ean,
            id_sku: val.id_sku,
            accion: val.objecion,
            fechaHoraObjecion: val.fechaHoraObjecion
          
          }) 
        } else {
          
          obj[key] = {}
          obj[key].id_sala = val.id_sala;
          obj[key].cadena = val.cadena;
          obj[key].desc_sala = val.desc_sala;
          obj[key].fechaHora = val.fechaHora;
          obj[key].acciones = [
            {
              type: val.type,
              indicador: val.indicador,
              fechaHora:val.fechaHora,
              item: val.desc_sku,
              ean: val.ean,
              id_sku: val.id_sku,
              accion: val.objecion,
              fechaHoraObjecion: val.fechaHoraObjecion
            }
          ]
        }
        
        return obj;
        
      },{})

    return Object.keys(objecionesReduced)
      .map(v => objecionesReduced[v])
  }
  

  handleOnScroll = event => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y,
    });
  };
  handleScrollTo = p => {
    if (this.scrollViewRef.current) {
      this.scrollViewRef.current.scrollTo(p);
    }
  };

  handleEnviar = () => {
    this.props.funEnviarEnvios();
    this.props.funVerEnvio(false);
  }


  render() {
    const {funVerEnvio, ver_envio, objeciones} = this.props;
    const data = this.convertirObjeciones(objeciones);
    return (
      <Modal
      testID={'modal'}
      backdropColor={colores.COLOR_GRIS}
      backdropOpacity={0.5}
      isVisible={ver_envio}
      scrollTo={this.handleScrollTo}
      scrollOffset={this.state.scrollOffset}
      onBackdropPress={()=>funVerEnvio(!ver_envio)}
      style={styles.modal}>
      <View style={styles.scrollableModal}>
      <View style={styles.view_close}>
      <TouchableOpacity style={styles.view_close} onPress={()=>funVerEnvio(!ver_envio)} >
             <Icon
              name={'ios-arrow-down'}
              size={30}
              color={'#bbb'}
              ></Icon>      
        </TouchableOpacity>
      </View>
        <ScrollView
          onScroll={this.handleOnScroll}
          scrollEventThrottle={10}>
          <View style={styles.scrollableModalContent1}>
          <EnvioDetalle data={data} />
          </View>
        </ScrollView>
        <EnvioBotonEnviar touchHandler={this.handleEnviar.bind(this)}/>
      </View>
    </Modal>
    )
  }
}

// Styles

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: '90%',
    backgroundColor: colores.COLOR_GRIS_F,
  },
  scrollableModalContent1: {
    flex: 1,
    paddingVertical: 30,
    
  },
  scrollableModalText1: {
    fontSize: 20,
    color: 'white',
  },
  scrollableModalContent2: {
    height: 300,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 20,
    color: 'white',
  },
  view_close: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    ver_envio: state.flashReducer.ver_envio,
    objeciones: state.envioReducer,
    data_tareas: state.envioReducer
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
function mapDispatchToProps(dispatch) {
  const combiner = Object.assign({},
    ActionCreators,
    { dispatch },
  );
  return bindActionCreators(
    combiner,
    dispatch,
  );
}

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(ModalScreen);







