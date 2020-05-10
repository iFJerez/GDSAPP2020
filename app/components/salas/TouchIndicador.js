// Imports: Dependencies
import React from 'react';
import {TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Indicadores from './Indicadores'

// Imports: Redux Actions
import ActionCreators from '../../redux/actions';

// Screen: Counter
class TouchIndicador extends React.Component {

  funExec(){
  const {data, dataAll, ver_detalle,  funVerDetalle, funGuardaDetalle} = this.props;
  obj = {...data, ...dataAll}

 funGuardaDetalle(obj) 
 funVerDetalle(!ver_detalle)
//console.log('TouchIndicador', JSON.stringify(dataAll))
}

  render() {
  const {data} = this.props;
 
    return (
      <TouchableOpacity onPress={()=>this.funExec()} >
         <Indicadores data={data} />
      </TouchableOpacity>
    );
  }
}



// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    
    ver_detalle: state.flashReducer.ver_detalle,
    
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