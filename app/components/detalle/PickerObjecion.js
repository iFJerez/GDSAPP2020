import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReactNativePickerModule from 'react-native-picker-module';
import * as constants from '../../herramientas/Const';
import TextoBase from '../../herramientas/textos/TextoBase';
import ActionCreators from '../../redux/actions';



class SalasListadoInCo extends Component {
  
  constructor(props) {
    super(props);

    const selectedValue = 
      this.props.objeciones.find((v) => 
          ( props.data.id_sku === v.id_sku &&
            props.data.indicador === v.indicador &&
            props.data.id_sala === v.id_sala &&
            props.data.fechaHora === v.fechaHora)
      )

    this.state = {
      selectedValue: selectedValue ? selectedValue.objecion : 'Sin Objeción',
      data: [
        "Sin Objeción",
        "Producto Bloqueado",
        "Producto no planogramado",
        "Producto Quiebre Compañía",
        "Producto No habilitado",
        "Producto en transito",
        "Falso Stock ajustado",
        "Falso Stock sin ajustar",
        "No hay entrega"
      ]
    };
  }


  handleTouch (index) {
    this.pickerRef.show()
    const dataObjecion = {
      id_sku: this.props.data.id_sku,
      indicador: this.props.data.indicador,
      id_sala: this.props.data.id_sala,
      fechaHora: this.props.data.fechaHora,
      objecion: index
    } 
    this.state.selectedValue = index;

    this.props.funGuardarObjecion(dataObjecion);
  }



  render() {
    return  (
  <View style={styles.container}> 
      <View style={styles.arrowDown}></View>
      <View style={styles.estadoObjecion}>
        <TextoBase style={styles.sty_txt_title}>Estado Objeción</TextoBase>
        <TextoBase style={styles.sty_txt_selected}>{this.state.selectedValue}</TextoBase>
      </View>
        <TouchableOpacity
          style={styles.styleTouch}
          onPress={() => {this.pickerRef.show()}}>
          <View style={styles.objetar}>
            <TextoBase style={styles.sty_txt_objetar}>Objetar ></TextoBase>
          </View>
        </TouchableOpacity>
          
        <ReactNativePickerModule
          pickerRef={e => this.pickerRef = e}
          value={this.state.selectedValue}
          title={"Seleccione Objeción"}
          items={this.state.data}
          onValueChange={(index) => {
            // this.setState({
            //   selectedValue: index
            // })
            this.handleTouch(index)
        }}/>
  </View>
   )
    
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.COLOR_GRIS_E,
    padding: 10,
    paddingTop: 13,
    margin: 0,
    flexDirection: 'row',
    flex: 8
  },
  estadoObjecion: {
    flex: 5
  },
  objetar: {
    borderRadius: 3,
    backgroundColor: '#ededed',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  styleTouch:{
    justifyContent: 'flex-end',
    padding:1
  },
  sty_txt_objetar: {
    color: constants.COLOR_SECUNDARIO
  },
  sty_txt_title:{
    color: constants.COLOR_GRIS_J,
    fontSize: constants.SIZE_LETRA_LARGE
  },
  sty_txt_selected:{
    color: constants.COLOR_GRIS_K,
    fontSize: constants.SIZE_LETRA_X_LARGE
  },
  TextStyle: {
    fontSize: 15,
    color: constants.COLOR_GRIS_I,
    alignItems: "flex-start",
    paddingTop: 5
  },
  arrowDown: {
    position: 'absolute',
    top: -4,
    left: 20,
    width: 0, 
    height: 0, 
    borderLeftWidth: 25,
    borderLeftColor: 'rgba(158, 150, 150, 0)',
    borderRightWidth: 25,
    borderRightColor: 'rgba(158, 150, 150, 0)',
    borderTopColor: constants.COLOR_GRIS_A,
    borderTopWidth: 12
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
  console.log(JSON.stringify(ActionCreators))
  return bindActionCreators(
    combiner,
    dispatch,
  );
}

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(SalasListadoInCo);