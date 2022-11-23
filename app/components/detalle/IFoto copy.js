import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreators from '../../redux/actions'
import { StyleSheet, View, Text,TouchableOpacity ,Image} from 'react-native';
import * as constants from '../../herramientas/Const'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal"
import * as colores from '../../herramientas/Const'
import Icon from '../../herramientas/Icon'

class IFoto extends Component {

  funMostrarImagen=()=>{

    const {valor} = this.props
      return(
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: valor }}
        />
  
      )
  }

  toggleExpand=()=>{

    const {funSalaVerImagen} = this.props;
    funSalaVerImagen(true);

  }

funLlenar(){

  const {valor, semaforo} = this.props
  const iconStyle = semaforo!=null ? (semaforo? styles.IconStyleTrue:styles.IconStyleFalse) : styles.IconStyle
  if(valor != null) {
    return(
     
          <View style={styles.container}>
              <TouchableOpacity onPress={()=>this.toggleExpand()}>
            
                <View style={styles.containerInd}>
             
                  <View style={styles.viewCenter}>
                      <Ionicons name="ios-image" style={iconStyle}/>
                  </View>
              
              </View>
              </TouchableOpacity>
          </View>
         
        )
  }

}

  render() {

    const {funSalaVerImagen ,ver_imagen} = this.props;
    
    return (
      <View>
          {this.funLlenar()}
      <Modal
      testID={'modal'}
      backdropColor={colores.COLOR_GRIS}
      backdropOpacity={0.5}
      isVisible={ver_imagen}
      onBackdropPress={()=>funSalaVerImagen(!ver_imagen)}
      style={styles.modal}>
      <View style={styles.scrollableModal}>
        <View style={styles.view_close}>
        <TouchableOpacity style={styles.view_close} onPress={()=>funSalaVerImagen(!ver_imagen)} >
                <Icon
                  name={'ios-arrow-down'}
                  size={30}
                  color={'#ffffff'}
                  ></Icon>      
            </TouchableOpacity>
        </View>
        <View style={styles.scrollableModalContent1}>
        {this.funMostrarImagen()}
        </View>
      </View>
    </Modal>
           
      </View>
    );
  }

}

const styles = StyleSheet.create({
  view_close: {
    
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  scrollableModalContent1: {
    flex: 1,
    paddingVertical: 10,
    
  },
  modal: {
    justifyContent: 'center',
    margin: 0,
  },
  container: {
    flex: 1,
    borderRightWidth : 1,
    borderRightColor: constants.COLOR_GRIS_F,
    paddingTop: 1,
    paddingHorizontal: 10,
    
    
  },
  viewCenter: {
    alignItems: 'center',
    padding: 1,
  },
  IconStyle: {
    flex: 1,
    color:constants.COLOR_QUINTENARIO_CLARO,
    fontSize:20,
  },
  IconStyleTrue: {
    flex: 1,
    color:constants.COLOR_PRIMARIO,
    fontSize:20,
  },
  IconStyleFalse: {
    flex: 1,
    color:constants.COLOR_SECUNDARIO,
    fontSize:20,
  },
  
  TextStyle: {
    flex: 1,
    fontSize:15,
    fontFamily:"Futura",
    color: constants.COLOR_GRIS
  }

});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    
    ver_imagen: state.flashReducer.ver_imagen,
    
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
export default connect(mapStateToProps, mapDispatchToProps)(IFoto);