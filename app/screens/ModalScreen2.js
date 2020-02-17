// Imports: Dependencies
import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from "react-native-modal";
import ModaScene from '../Components/ModalComponents'


// Imports: Redux Actions

import ActionCreators from '../redux/actions';




// Screen: Counter 14932
class ModalScreen extends React.Component {

funPress(){
  const {funDataAPISalas} = this.props;
  funDataAPISalas()
  console.log('funPress Help')
}


funRecorrer(data){

try {
  return data.map((res, i)=>{
    return (
    <Text key={i}>{JSON.stringify(res['pauta14932'])}</Text>
    )
})
  
} catch (error) {

  console.log(error)
  
}


}

  render() {
    return (
      
         <View style={styles.containerModal}>
         <Button
            title="Cerrar Modal"
            onPress={()=>this.props.funUserModal(!this.props.home_modal)}
            style={styles.loginButton}
          />


         <Text>Creacion de Modal</Text>
         <ModaScene
         visible={this.props.home_modal}
         close={()=>this.props.funUserModal(!this.props.home_modal)}
          />

        </View>
      
    )
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerModal: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#567',
  },
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    counter: state.counterReducer.counter,
    loggedIn: state.authReducer.loggedIn,
    dataSala: state.userReducer.dataSala,
    home_modal: state.userReducer.home_modal,
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
export default connect(mapStateToProps, mapDispatchToProps)(ModalScreen);







