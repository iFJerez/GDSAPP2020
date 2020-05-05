// Imports: Dependencies
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Imports: Redux Actions
import ActionCreators from '../redux/actions';
//Ciomponents
import PrimerComponets from '../components/desarrollo/PrimerComponents'
import SegundoComponents from '../components/desarrollo/SegundoComponents'
import CardPrincipal from '../components/desarrollo/CardPrincipal'


// Screen: Counter 14932
class DesarrolloScreen extends React.Component {


  
  render() {

    const {numero, funIncrementar, funDecrementar } = this.props;
    return (
      <View style={styles.container}>
        <Text>Hola Desarrollo</Text>
        <PrimerComponets numero={numero} funIncrementar={funIncrementar} funDecrementar={funDecrementar}/>
        <SegundoComponents />
        <CardPrincipal />
        
        
    </View>
    )
  }
}

// Styles

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
 
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    numero: state.desarrolloReducer.numero,
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
export default connect(mapStateToProps, mapDispatchToProps)(DesarrolloScreen);







