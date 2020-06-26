// Imports: Dependencies
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Imports: Redux Actions
import ActionCreators from '../redux/actions';



class FotosScreen extends React.Component {

  render() {
    const {numero, funIncrementar, funDecrementar } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView >
        <Text>Hola Fotos</Text>
        


        
        </ScrollView>
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
export default connect(mapStateToProps, mapDispatchToProps)(FotosScreen);







