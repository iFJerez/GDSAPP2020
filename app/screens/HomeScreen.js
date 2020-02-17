// Imports: Dependencies
import React, { Component } from 'react';
import { Button, Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// Imports: Redux Actions
import ActionCreators from '../redux/actions';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Screen: Counter
class Home extends React.Component {




  render() {

const {funUserModal, loggedIn, ms_help, home_modal, funUserHelp} = this.props;

    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.loggedInContainer}>
      
          <Text style={styles.loggedInText}>Logged In: </Text>
          <Text style={styles.loggedInText}>{`${loggedIn}`}</Text>
          <Button
            title="Abrir Modal"
            onPress={()=>funUserModal(!home_modal)}
            style={styles.loginButton}
          />
           <Button
            title="Abrir Help"
            onPress={()=>funUserHelp(!ms_help)}
            style={styles.loginButton}
          />


          <Button
            title="Login"
            onPress={this.props.loggedIn === false ? () => this.props.login(true) : () => this.props.login(false)}
            style={styles.loginButton}
          />
        </View>

        <Text style={styles.counterTitle}>Counter</Text>

        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>

          <Text style={styles.counterText}>{this.props.counter}</Text>

          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>



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
  loggedInContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  loginButton: {
    marginTop: 20,
    paddingTop: 20,
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loggedInText: {
    fontFamily: 'System',
    fontSize: 17,
    fontWeight: '400',
    color: '#000',
  },
  counterTitle: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 50,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
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