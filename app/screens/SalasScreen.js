// Imports: Dependencies
import React from 'react';
import { SafeAreaView, StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SalasListado from '../components/salas/SalasListado'
import Activity from './ActivityScreen'
import SalaDetallesScreen from './SalaDetallesScreen'
import OrdenSalasScreen from '../components/salas/OrdenSalasScreen'
import EnvioBoton from '../components/pendientesEnvio/EnvioBoton'

// Imports: Redux Actions
import ActionCreators from '../redux/actions';


// Screen: Counter
class SalasScreen extends React.Component {

  funRevisarData(){
    const {dataSala} = this.props;

    if(dataSala){
      return(
        <SafeAreaView style={styles.container}>

            
            <SalasListado />
            <SalaDetallesScreen />
            <OrdenSalasScreen />
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
export default connect(mapStateToProps, mapDispatchToProps)(SalasScreen);