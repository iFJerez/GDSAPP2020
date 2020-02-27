// Imports: Dependencies
import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Indicadores from './Indicadores'
import {funMessage} from '../../herramientas/Mensaje'

// Imports: Redux Actions
import ActionCreators from '../../redux/actions';

// Screen: Counter
class TouchIndicador extends React.Component {

 funExec(){
  const {data, ver_detalle, funVerDetalle, funGuardaDetalle} = this.props;
  //const {funVerDetalle, funGuardaDetalle, ver_detalle} = this.props;
  funMessage('message', JSON.stringify(data))
  funGuardaDetalle(data)
  funVerDetalle(!ver_detalle)

}

  render() {
  const {data} = this.props;
 
    return (
      <TouchableOpacity style={styles.container} onPress={()=>this.funExec()} >
         <Indicadores data={data} />
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   
  },
  st_indicadores: {
    flexDirection: 'row',
    flex: 1,
    

  }


});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    
    ver_detalle: state.detalleReducer.ver_detalle,
    
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
export default connect(mapStateToProps, mapDispatchToProps)(TouchIndicador);