// Imports: Dependencies
import React from 'react'
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from "react-native-modal"
import Icon from '../herramientas/Icon'
import * as colores from '../herramientas/Const'
import PruebasScreen from './PruebaScreen'

// Imports: Redux Actions
import ActionCreators from '../redux/actions'
import DetalleASala from '../components/detalle/DetalleASala'

// Screen: Counter 14932
class ModalScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { scrollOffset: 0, scrollViewRef: 0 };
    this.scrollViewRef = React.createRef();
    
  }

  shouldComponentUpdate(nextProps,nextState) {
    return nextProps.ver_sala_detalle !== this.props.ver_sala_detalle
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



funRecorrer(data){

try {
  return data.map((res, i)=>{
    return (
    <Text key={i}>{JSON.stringify(res['pauta14932'])}</Text>
    )
})
  
} catch (error) {

  console.log(error)
  
}


}


funMostrarDastos(){

  // Mostrar datos se crea para enviar la informacion una vez, debido a que el Render lo hacia 2 veces

  const {ver_sala_detalle, data_detalle} = this.props;
  if(ver_sala_detalle){
    return(
      <DetalleASala data={data_detalle} />
    )
  }

}

  render() {

    const {funSalaVerDetalle, ver_sala_detalle, data_detalle} = this.props;
    return (
      <Modal
      testID={'modal'}
      backdropColor={colores.COLOR_GRIS}
      backdropOpacity={0.5}
      isVisible={ver_sala_detalle}
      onBackdropPress={()=>funSalaVerDetalle(!ver_sala_detalle)}
      style={styles.modal}>
      <View style={styles.scrollableModal}>
        <View style={styles.view_close}>
          <TouchableOpacity style={styles.view_close} onPress={()=>funSalaVerDetalle(!ver_sala_detalle)} >
                <Icon
                  name={'ios-arrow-down'}
                  size={30}
                  color={'#bbb'}
                  ></Icon>      
            </TouchableOpacity>
        </View>
        <View style={styles.scrollableModalContent1}>
          {this.funMostrarDastos()}
        </View>
      </View>
      <PruebasScreen/>
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
    backgroundColor: colores.COLOR_GRIS_D,
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
    
    ver_sala_detalle: state.flashReducer.ver_sala_detalle,
    data_detalle: state.salasReducer.data_detalle,
    
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







