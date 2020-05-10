// Imports: Dependencies
import React from 'react';
import {StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TareaBody from '../components/tareas/TareaBody'
import * as constants from '../herramientas/Const';

// Imports: Redux Actions
import ActionCreators from '../redux/actions';
import EnvioBoton from '../components/pendientesEnvio/EnvioBoton'

// Screen: Counter
class TareasScreen extends React.Component {


  render() {


    return (
      <View style={styles.container}>
        <TareaBody />
        <EnvioBoton />

        
        
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