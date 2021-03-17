import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as constants from "../../herramientas/Const";
import RNPickerSelect from 'react-native-picker-select';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';



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
  
    let obj = []
    try {
      dataHome.objeciones.map((v)=>{
      obj.push({
        "label" : v.desc_objecion,
        "value" : v.desc_objecion
      }) 
      });
      
    } catch (error) {

      obj.push({
        "label" : "Sin objecion",
        "value" : "0"
      }) 
      
    }




    return (

      
   
      <View style={styles.objetar}>
              

<RNPickerSelect
            placeholder={placeholder}
            items={obj}
            onValueChange={(index) => {
              this.setState({
                selectedValue: index
              })
             this.handleTouch(index);
           }}
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 10,
                right: 12,
              },
            }}
            value={this.props.objecion}
            useNativeAndroidPickerStyle={false}
            textInputProps={{ underlineColor: 'green' }}
            Icon={() => {
              return <Ionicons name="md-arrow-down" size={24} color="gray" />;
            }}
          />
     
  </View>

    );
  }
}


const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: constants.COLOR_QUINTENARIO_CLARO,
    borderRadius: 4,
    color: constants.COLOR_SECUNDARIO,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'green',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});


const styles = StyleSheet.create({

  
  
  inputIOS: {
    fontSize: 25,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 4,
    color: constants.COLOR_PRIMARIO,
    
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'green',
    paddingRight: 30, // to ensure the text is never behind the icon
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
    flex: 1,
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
