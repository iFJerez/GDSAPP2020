// Imports: Dependencies
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from "react-native-modal";
import * as colores from '../herramientas/Const'
import Icon from '../herramientas/Icon'
import ListaDesplegable from '../components/ListaDesplegable'
import TextHelp from '../components/TextoHelp'

// Imports: Redux Actions
import ActionCreators from '../redux/actions';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

// Screen: Counter 14932
class ModalScreen extends React.Component {

  render() {

    return (
      <Modal
      testID={'modal'}
      isVisible={this.props.ver_detalle}
      backdropColor={colores.COLOR}
      backdropOpacity={0.5}
      animationInTiming={800}
      animationOutTiming={1000}
      onSwipeComplete={()=>this.props.funVerDetalle(!this.props.ver_detalle)}
      onBackdropPress={()=>this.props.funVerDetalle(!this.props.ver_detalle)}
      swipeDirection={['down']}
      scrollOffsetMax={400 - 300} 
      style={styles.modal}>
      <View style={styles.scrollableModal}>

      <View style={styles.scrollableModalContent1}>
        <TouchableOpacity onPress={()=>this.props.funVerDetalle(!this.props.ver_detalle)} >
             <Icon
              name={'ios-arrow-down'}
              size={30}
              color={'#bbb'}
              ></Icon>
              
        </TouchableOpacity>
        <ScrollView
          ref={this.scrollViewRef}
          onScroll={this.handleOnScroll}
          scrollEventThrottle={16}
          >

            <Text>{JSON.stringify(this.props.data_detalle)}</Text>

        </ScrollView>
        </View>
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
    height: '70%',
    
 
  },
  scrollableModalContent1: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },


  scrollableModalText1: {
    fontSize: 12,
    color: 'black',
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 12,
    color: 'black',
  },
  scrollStyle: {
    height: 1000,
  }
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {

    
    ver_detalle: state.detalleReducer.ver_detalle,
    data_detalle: state.detalleReducer.data_detalle,

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







