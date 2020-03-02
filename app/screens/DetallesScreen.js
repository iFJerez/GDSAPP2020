// Imports: Dependencies
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from "react-native-modal";


// Imports: Redux Actions
import ActionCreators from '../redux/actions';
import { ScrollView } from 'react-native-gesture-handler';




// Screen: Counter 14932
class ModalScreen extends React.Component {


  constructor(props) {
    super(props);
    // No llames this.setState() aquí!
    this.state = { scrollOffset: 0, scrollViewRef: 0 };

    this.scrollViewRef = React.createRef();
    
  }

  handleOnScroll = event => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y,
    });
  };
  handleScrollTo = p => {
    if (this.scrollViewRef.current) {
      this.scrollViewRef.current.scrollTo(p);
    }
  };


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
      <Modal
      testID={'modal'}
      isVisible={this.props.home_modal}
      onSwipeComplete={()=>this.props.funUserModal(!this.props.home_modal)}
      swipeDirection={['down']}
      scrollTo={this.handleScrollTo}
      scrollOffset={this.state.scrollOffset}
      scrollOffsetMax={300} // content height - ScrollView height
      style={styles.modal}>
      <View style={styles.scrollableModal}>
        <ScrollView
          ref={this.scrollViewRef}
          onScroll={this.handleOnScroll}
          scrollEventThrottle={16}>
          <View style={styles.scrollableModalContent1}>
            <Text style={styles.scrollableModalText1}>
              You can scroll me up! 👆
            </Text>
          </View>
          <View style={styles.scrollableModalContent2}>
            <Text style={styles.scrollableModalText2}>
              Same here as well! ☝
            </Text>
          </View>
          <View style={styles.scrollableModalContent1}>
            <Text style={styles.scrollableModalText1}>
            otra vez👆
            </Text>
          </View>
          <View style={styles.scrollableModalContent2}>
            <Text style={styles.scrollableModalText2}>
             again ☝
            </Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
    )
  }
}

// Styles

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: 500,
  },
  scrollableModalContent1: {
    height: 300,
    backgroundColor: '#87BBE0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText1: {
    fontSize: 20,
    color: 'white',
  },
  scrollableModalContent2: {
    height: 300,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 20,
    color: 'white',
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







