import React, { Component } from "react";
import { StyleSheet, Text, Platform, View } from "react-native";
import ReactNativePickerModule from "react-native-picker-module";
import * as constants from "../../herramientas/Const";
import TextoBase from "../../herramientas/textos/TextoBase";
import RNPickerSelect from 'react-native-picker-select';
import { connect } from 'react-redux';



class PickerObjecion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        "Sin Objeción",
        "Producto Bloqueado",
        "Producto no planogramado",
        "Producto Quiebre Compañía",
        "Producto No habilitado",
        "Producto en transito",
        "Falso Stock ajustado",
        "Falso Stock sin ajustar",
        "No hay entrega",
      ],
    };
  }

 
  state = {
    language: 'java',
  };

  
  
  handleTouch(index) {
    //console.log(index)
    //this.pickerRef.show();
    this.props.touchHandlder(index);
  }

  render() {

    const placeholder = {
      label: 'Objetar',
      value: null,
      color: constants.COLOR_SECUNDARIO,
    };
    
    const { disabled, dataHome } = this.props

    const selectedValue = this.props.objecion || "Sin objecion";
  
    var obj = []
      dataHome.objeciones.map((v)=>{
      obj.push({
        "label" : v.desc_objecion,
        "value" : v.desc_objecion
      }) 
      });

      const pickerStyle = {
        inputIOS: {
          color: constants.COLOR_SECUNDARIO,
          paddingTop: 10,
          paddingHorizontal: 10,
          paddingBottom: 10,
          borderRadius: 100,
        },
        inputAndroid: {
          color: constants.COLOR_SECUNDARIO,
                 borderRadius: 100,
        },
        placeholderColor: constants.COLOR_SECUNDARIO,
        underline: { borderTopWidth: 0 },
        borderRadius: 100,

      };


    return (

      
   
      <View style={styles.objetar}>
     

        <RNPickerSelect
          style={
          Platform.OS === 'ios'
          ? styles.inputIOS
          : styles.inputAndroid
      }
        placeholder={{}}
            items={obj}
         //   onValueChange={value => {
         //     this.setState({
          //      favSport0: value,
          //    });
          //  }}
          onValueChange={(index) => {
             this.setState({
               selectedValue: index
             })
            this.handleTouch(index);
          }}
            
            //value={this.state.favSport0}
            value={this.props.objecion}
          />
  </View>

    );
  }
}

const styles = StyleSheet.create({

  
  
  inputIOS: {
    color: constants.COLOR_SECUNDARIO,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 100,
  },
  inputAndroid: {
    padding: 10,
    color: constants.COLOR_SECUNDARIO,
  },
  container: {
    backgroundColor: constants.COLOR_GRIS_E,
    padding: 10,
    paddingTop: 13,
    margin: 0,
    flexDirection: "row",
    flex: 8,
  },
  estadoObjecion: {
    flex: 5,
  },
  objetar: {
    width: '80%',
    borderRadius: 3,
    backgroundColor: "#ededed",

  },
  styleTouch: {
    justifyContent: "flex-end",
    padding: 1,
  },
  sty_txt_objetar: {
    color: constants.COLOR_SECUNDARIO,
  },
  sty_txt_objetar_disabled: {
    color: constants.COLOR_GRIS_J,
  },
  sty_txt_title: {
    color: constants.COLOR_GRIS_J,
    fontSize: constants.SIZE_LETRA_LARGE,
  },
  sty_txt_selected: {
    color: constants.COLOR_GRIS_K,
    fontSize: constants.SIZE_LETRA_X_LARGE,
  },
  TextStyle: {
    fontSize: 15,
    color: constants.COLOR_GRIS_I,
    alignItems: "flex-start",
    paddingTop: 5,
  },
  arrowDown: {
    position: "absolute",
    top: -4,
    left: 20,
    width: 0,
    height: 0,
    borderLeftWidth: 25,
    borderLeftColor: "rgba(158, 150, 150, 0)",
    borderRightWidth: 25,
    borderRightColor: "rgba(158, 150, 150, 0)",
    borderTopColor: constants.COLOR_GRIS_A,
    borderTopWidth: 12,
  },
});




// Exports
//export default PickerObjecion;
export default  connect(state => ({dataHome: state.userReducer.dataHome}))(PickerObjecion);
