// Imports: Dependencies
import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardUsuario from '../components/usuario/CardUsuario'
import DetalleEnvios from "../components/usuario/DetalleEnvios"
import CerrarSession from '../components/usuario/CerrarSession'
import { useIsFocused } from '@react-navigation/native';

// Imports: Redux Actions
import ActionCreators from '../redux/actions';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}



// Screen: Counter
class UsuarioScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {  
      dato: 'algo'
    }

    this.cerrarSeccion = this.cerrarSeccion.bind(this)
  }



  cerrarSeccion(){
    this.props.LoginOFF()
    this.props.navigation.navigate('Login')
  }
 
  render() {
 
    return (
      <SafeAreaView style={styles.container}>
     <FocusAwareStatusBar barStyle="light-content" />
       <View style={styles.container}>
            <View style={styles.Usuario}>
                <CardUsuario usuario={this.props.usuario} />
                <DetalleEnvios/> 
            </View>

            <View style={styles.CerrarSession}>
            <CerrarSession cerrar={this.cerrarSeccion} />
            </View>
        
       </View>
  
      </SafeAreaView>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  Usuario: {
    flex: 6,
    margin: 5,
  },
  CerrarSession: {
    flex: 1
  },
  
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    dataSala: state.userReducer.dataSala,
    usuario: state.authReducer.usuario,
    
    
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