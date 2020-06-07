// Imports: Dependencies
import React from 'react';
import {StyleSheet, View, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as constants from '../herramientas/Const';

// Imports: Redux Actions
import ActionCreators from '../redux/actions';
import EnvioBoton from '../components/pendientesEnvio/EnvioBoton'
import Activity from './ActivityScreen'
import TareaDetallesScreen from './TareaDetallesScreen'

// Screen: Tarea
import TareaIndex from '../components/tarea/TareaIndex'


class TareasScreen extends React.Component {

  funRevisarData(){
    const {dataTarea} = this.props;

    if(dataTarea){
      return(
        <SafeAreaView style={styles.container}>

               <TareaIndex />
               <TareaDetallesScreen />
              <EnvioBoton />

         </SafeAreaView>      
        )
    }
    else {
      return(
      <Activity />
      )
    }
  }


  render() {


    return (
      <View style={styles.container}>
                {this.funRevisarData()}
        

      </View>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sty_botonOn: {
    borderColor: constants.COLOR_PRIMARIO,
    borderWidth: 1,
  },
  sty_botonOn: {
    borderColor: constants.COLOR_PRIMARIO,
    borderWidth: 1,
  }
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    dataTarea: state.userReducer.dataTarea,
    
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
export default connect(mapStateToProps, mapDispatchToProps)(TareasScreen);