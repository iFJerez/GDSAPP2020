// Imports: Dependencies
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from "react-native-modal";
import * as colores from '../herramientas/Const'
import Icon from '../herramientas/Icon'
import ListaDesplegable from '../components/ListaDesplegable'
import TextHelp from '../components/TextoHelp'

// Imports: Redux Actions
import ActionCreators from '../redux/actions';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

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
  
  render() {
    return (
      <Modal
      testID={'modal'}
      isVisible={this.props.ms_help}
      backdropColor={colores.COLOR}
      backdropOpacity={0.5}
      animationInTiming={800}
      animationOutTiming={1000}
      onSwipeComplete={()=>this.props.funUserHelp(!this.props.ms_help)}
      onBackdropPress={()=>this.props.funUserHelp(!this.props.ms_help)}
      swipeDirection={['down']}
      scrollTo={this.handleScrollTo}
      scrollOffset={this.state.scrollOffset}
      scrollOffsetMax={400 - 300} 
      style={styles.modal}>
      <View style={styles.scrollableModal}>
      <View style={styles.scrollableModalContent1}>
            <TouchableOpacity onPress={()=>this.props.funUserHelp(!this.props.ms_help)} >
                <Icon 
                      name={'ios-arrow-down'}
                      size={30}
                      color={'#bbb'}
                  ></Icon>
            </TouchableOpacity>
            <ScrollView
              ref={this.scrollViewRef}
              onScroll={this.handleOnScroll}
              scrollEventThrottle={16}>
            <TextHelp />
            <ListaDesplegable />

        </ScrollView>
        </View>
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
    height: '70%',
    
 
  },
  scrollableModalContent1: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },


  scrollableModalText1: {
    fontSize: 12,
    color: 'black',
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 12,
    color: 'black',
  },
  scrollStyle: {
    height: 1000,
  }
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {

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
export default connect(mapStateToProps, mapDispatchToProps)(ModalScreen);







