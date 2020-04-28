import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";
import DetalleIndicadoresFila from './DetalleIndicadoresFila'

import * as constants from '../../herramientas/Const'
import Objecion from './Objecion'

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          expanded : false,
        }
    }
  
  render() {

    return (
       <View style={styles.container}>
            <TouchableOpacity onPress={()=>this.toggleExpand()}>
                <DetalleIndicadoresFila toggleExpand={this.toggleExpand()} data={this.props.data} i={this.props.i} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                     <Objecion />
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