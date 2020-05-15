// Imports: Dependencies
import React from 'react'
import {TouchableOpacity, StyleSheet, View, ScrollView} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from "react-native-modal"
import Icon from '../../herramientas/Icon'
import * as constants from '../../herramientas/Const'
// Imports: Redux Actions
import ActionCreators from '../../redux/actions'
import BotonKeys from './OrdenSalasScreenBotonKeys'
import BotonAsc from './OrdenSalasScreenBotonAsc'
import Titulos from './OrderSalasTitulos'

// Screen: Counter 14932
class OrdenSalas extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { scrollOffset: 0, scrollViewRef: 0 };
    this.scrollViewRef = React.createRef();
    
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

  funBotonesKeys(){
    const {funSalasOrdenKeys, sala_orden_key } = this.props;
    const data = [ {"key": "fechaHora", "desc": "Fecha y Hora"},
    {"key": "desc_sala", "desc": "Salas"},
    {"key": "cadena", "desc": "Cadenas"},
    {"key": "estado", "desc": "Estado"},
                ] 
    
   return data.map((item, i) => {

      return(
        <BotonKeys funExec={funSalasOrdenKeys} itemkey={item.key} desc={item.desc} sala_orden_key={sala_orden_key}/>
      )

    })

  }


  funBotonesAsc(){
    const {funSalasOrdenAscendencia, sala_orden_asc } = this.props;

    return(
      <BotonAsc funExec={funSalasOrdenAscendencia} sala_orden_asc={sala_orden_asc}/>
    )

  }


  render() {

    const {funVerSalaFiltro, ver_sala_filtro, data_detalle,funSalasOrdenKeys,funSalasOrdenAscendencia,  sala_orden_asc, sala_orden_key, status } = this.props;
    const data = [{"key": "id_sala", "desc": "Salas"},
                  {"key": "fechaHora", "desc": "Fecha y Hora"}] 
    
    return (
      <Modal
      testID={'modal'}
      backdropColor={constants.COLOR_GRIS}
      backdropOpacity={0.5}
      isVisible={ver_sala_filtro}
      onSwipeComplete={()=>funVerSalaFiltro(!data_detalle)}
      swipeDirection={['down']}
      scrollTo={this.handleScrollTo}
      scrollOffset={this.state.scrollOffset}
     // scrollOffsetMax={300000} // content height - ScrollView height
      onSwipeComplete={()=>funVerSalaFiltro(!ver_sala_filtro)}
      onBackdropPress={()=>funVerSalaFiltro(!ver_sala_filtro)}
      style={styles.modal}>
      <View style={styles.scrollableModal}>
      <View style={styles.view_close}>
      <TouchableOpacity style={styles.view_close} onPress={()=>funVerSalaFiltro(!ver_sala_filtro)} >
             <Icon
              name={'ios-arrow-down'}
              size={30}
              color={constants.COLOR_PRIMARIO}
              ></Icon>      
        </TouchableOpacity>
      </View>
        <ScrollView
          onScroll={this.handleOnScroll}
          scrollEventThrottle={10}>
          <View style={styles.scrollableModalContent1}>

          
          <View style={styles.ordenContainer}>
          <Titulos text={"Ordenar"}/>
              {this.funBotonesKeys()}
          </View>
          <View style={styles.ordenContainer}>
          <Titulos text={"Segun"}/>
             {this.funBotonesAsc()}
          </View>
        
          </View>
        </ScrollView>
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
    height: '80%',
    backgroundColor: constants.COLOR_GRIS_D,
  },
  scrollableModalContent1: {
    flexDirection: 'column',
    paddingVertical: 30,
    alignItems: 'center',
    
    
    
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
  },
  ordenContainer: {
    borderTopWidth: 1,
    borderTopColor: constants.COLOR_GRIS_G,
    width: '90%',
    marginTop: 5,
    marginBottom: 20,
    
  }
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    
    ver_sala_filtro: state.flashReducer.ver_sala_filtro,
    sala_orden_asc: state.userReducer.sala_orden_asc,
    sala_orden_key: state.userReducer.sala_orden_key,
    status: state.userReducer.status,
    
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
export default connect(mapStateToProps, mapDispatchToProps)(OrdenSalas);







