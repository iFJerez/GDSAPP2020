// Imports: Dependencies
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardUsuario from '../components/usuario/CardUsuario'
import CerrarSession from '../components/usuario/CerrarSession'

// Imports: Redux Actions
import ActionCreators from '../redux/actions';

// Screen: Counter
class UsuarioScreen extends React.Component {

 
  render() {


    return (
      <View style={styles.container}>


        
        <CardUsuario />
        <CerrarSession />

      </View>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    dataSala: state.userReducer.dataSala,
    
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
export default connect(mapStateToProps, mapDispatchToProps)(UsuarioScreen);