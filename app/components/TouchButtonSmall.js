import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from "react-native";

import * as constants from '../herramientas/Const';

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }
    }
  
  render() {

    const {activo, icon_on, icon_off, funExec, Icon} = this.props;

    return (
       <View>
            <TouchableOpacity style={styles.row} onPress={()=>funExec()}>
                <Icon name={activo ? icon_on:icon_off} size={constants.ICON_SMALL} color={constants.COLOR_PRIMARIO} />
            </TouchableOpacity>
            <Text>{constants.COLOR_PRIMARIO_CLARO}</Text>
       </View>
    )
  }

  toggleExpand=()=>{
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({

    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    
});