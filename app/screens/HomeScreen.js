// Imports: Dependencies
import React from 'react';
import { SafeAreaView, StyleSheet,Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {funMessage} from '../herramientas/Mensaje'
import data from '../api/home.json'
import CardIndicadores from '../components/home/CardIndicadores'


// Imports: Redux Actions
import ActionCreators from '../redux/actions';


// Screen: Counter
class Home extends React.Component {




  render() {

const {} = this.props;

    return (
      <SafeAreaView style={styles.container}>
      <Text>{JSON.stringify(data)}</Text>
      <CardIndicadores data={data} />
      </SafeAreaView>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    counter: state.counterReducer.counter,
    loggedIn: state.authReducer.loggedIn,
    home_modal: state.userReducer.home_modal,
    ms_help: state.userReducer.ms_help,
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