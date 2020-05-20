import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";
import { connect } from 'react-redux';
import DetalleIndicadoresFila from './DetalleIndicadoresFila';
import ActionCreators from '../../redux/actions';

import * as constants from '../../herramientas/Const'
import Objecion from './Objecion'
import { ThemeColors } from 'react-navigation';

class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          expanded : false,
        }
    }

    handleObjecion (objecion) {
      const dataObjecion = {
        id_sku: this.props.data.id_sku,
        indicador: this.props.section.indicador,
        id_sala: this.props.section.id_sala,
        fechaHora: this.props.section.fechaHora,
        objecion
      } 
  
      this.props.funGuardarObjecion(dataObjecion);
    }
  
    
  render() {
    const objecion = 
    this.props.objeciones.find((v) => 
        ( this.props.data.id_sku === v.id_sku &&
          this.props.section.indicador === v.indicador &&
          this.props.section.id_sala === v.id_sala &&
          this.props.section.fechaHora === v.fechaHora)
    )

    const objecionDetalle = objecion ? objecion.objecion : null

    const {data, i} = this.props;
    const {
      data: dataSection,
      indicadores,
      ...dataGeneral } = this.props.section;
    return (
       <View style={styles.container} key={i}>
            <TouchableOpacity key={i} onPress={()=>this.toggleExpand()}>
                <DetalleIndicadoresFila data={{...data, objecion}} i={i} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                     <Objecion objecion={objecionDetalle} touchHandlder={(objecion) => this.handleObjecion(objecion)} />
                </View>
            }
       </View>
    )
  }

  toggleExpand=()=>{
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
       },

    child:{
        backgroundColor: constants.COLOR_CUATERNARIO_CLARO,
        padding:5,
    }
    
});

const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    objeciones: state.objecionesReducer,
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
export default connect(mapStateToProps,mapDispatchToProps)(Accordian);