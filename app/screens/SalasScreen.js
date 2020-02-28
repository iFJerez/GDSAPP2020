// Imports: Dependencies
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SalasListado from '../components/salas/SalasListado'
import {funMessage} from '../herramientas/Mensaje'



// Imports: Redux Actions
import ActionCreators from '../redux/actions';

// Screen: Counter
class Home extends React.Component {



  render() {

    return (
      <SafeAreaView style={styles.container}>
        <Text adjustsFontSizeToFit={true}>   Salas</Text>
           <Button title="SalaResumen" onPress={() => this.props.navigation.navigate('SalaResumen')}
        />

          <Button
            title="Nose"
            onPress={()=>{funMessage('Mensaje', 'Nueva Descripcion')}}
            style={styles.loginButton}
          />

        <SalasListado />

      </SafeAreaView>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);