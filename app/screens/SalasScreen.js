// Imports: Dependencies
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SalasMenu from '../components/salas/SalasMenu'
import SalasListado from '../components/salas/SalasListado'



// Imports: Redux Actions
import ActionCreators from '../redux/actions';

// Screen: Counter
class Home extends React.Component {



  render() {

const {vista_salas, funViewSalasONOFF} = this.props;


    return (
      <SafeAreaView style={styles.container}>
        <Text adjustsFontSizeToFit={true}>   Salas</Text>
        
           <Button title="SalaResumen" onPress={() => this.props.navigation.navigate('SalaResumen')}
        />
        <SalasMenu 
          funViewSalasONOFF={()=>funViewSalasONOFF(!vista_salas)}
          vista_salas={vista_salas}
        />
        <SalasListado 
          vista_salas={vista_salas}/>

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
    
    vista_salas: state.userReducer.vista_salas,
    
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