
import React, { Component } from 'react';
import {
  View,
  Animated,
  Easing,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import * as constants  from '../herramientas/Const'

const easing = Easing.out(Easing.ease);

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      filter: {
        position: new Animated.Value(30),
        opacity: new Animated.Value(1),
      },
      inputText: {
        opacity: new Animated.Value(0),
        container: new Animated.Value(0.2),
      },
    };

    
  }
  handleSearchOpen() {
    this.setState({ show: !this.state.show }, () => {
      if (this.state.show) {
        this.hideFilter();
        this.showInput();
      } else {
        this.showFilter();
        this.hideInput();
      }
    });
  }
  handleBur() {
    this.handleSearchOpen();
  }

  hideFilter() {
    const timing = Animated.timing;
    Animated.parallel([
      timing(this.state.filter.position, { toValue: 320, easing, duration: 1500 }),
      timing(this.state.filter.opacity, { toValue: 0, duration: 1500 }),
    ]).start();
  }
  showFilter() {
    const timing = Animated.timing;
    Animated.parallel([
      timing(this.state.filter.position, { toValue: 30, easing, duration: 1500 }),
      timing(this.state.filter.opacity, { toValue: 1, duration: 1500 }),
    ]).start();
  }


  hideInput() {
    const timing = Animated.timing;
    Animated.parallel([
      timing(this.state.inputText.container, { toValue: 0.2, easing, duration: 700 }),
      timing(this.state.inputText.opacity, { toValue: 0, duration: 1500 }),
    ]).start();
  }
  showInput() {
    const timing = Animated.timing;
    Animated.parallel([
      timing(this.state.inputText.container, { toValue: 18, easing, duration: 1500 }),
      timing(this.state.inputText.opacity, { toValue: 1, duration: 1500 }),
    ]).start();
  }


  render() {
    

    return (
      <View style={[styles.header, styles.fill, styles.row, styles.center]}>
        <Animated.View
          style={
          [styles.searchIconContainer,
            { flex: this.state.inputText.container },
          ]}
        >
          <View style={styles.searchIconCircle}>
            <Animated.View
              style={
              [
                styles.searchIconText,
                { opacity: this.state.inputText.opacity },
              ]}
            >
              <TextInput
                onChangeText={(text) => this.props.filterSearch(text)}
                onBlur={()=>this.handleSearchOpen()}
                style={styles.textInput}
                autofocus
                returnKeyType="done"
                underlineColorAndroid="transparent"
              />
            </Animated.View>
            <TouchableHighlight
              style={styles.searchIconButton}
              onPress={()=>this.handleSearchOpen()}
              underlayColor="transparent"
              hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            >
              <Icon size={13} name="magnifier" color="#FFFFFF" />
            </TouchableHighlight>
          </View>
        </Animated.View>
        <Animated.View
          style={
          [styles.filterContainer,
            { left: this.state.filter.position, opacity: this.state.filter.opacity },
          ]}
        >

        </Animated.View>
      </View>
    );
  }
}

export default Buscador;





const styles = StyleSheet.create({

    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
    },
    header: {
    },
    paddingTwentyVertical: {
  
    },
    listHeader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    headerDropDownContainer: {
      backgroundColor: '#376593',
      paddingHorizontal: 10,
      justifyContent: 'space-around',
    },
  
    searchIconContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginLeft: 20,
    },
    searchIconCircle: {
      backgroundColor: constants.COLOR_PRIMARIO,
      borderRadius: 50,
      padding: 5,
      flexDirection: 'row',
    },
    textInput: {
      height: 20,
      padding: 0,
      marginLeft: 10,
      color: '#FFFFFF'
    },
    searchIconText: {
      flex: 1,
    },
    searchIconButton: {
      height: 20,
      width: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    filterContainer: {
      flex: 2,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    dropDownIcon: {
      marginLeft: 5,
      top: 5,
    },
    headerCancelText: {
      fontFamily: 'Muli',
      fontWeight: 'bold',
      color: '#376593',
    },
    headerOverlay: {
      backgroundColor: '#376593',
    },
    headerSelection: {
      borderWidth: 0,
      padding: 0,
      flexDirection: 'row',
    },
    headerSelectionText: {
      color: '#376593',
      fontFamily: 'Muli',
      fontWeight: 'bold',
    },
    headerOptionText: {
      color: '#376593',
      fontFamily: 'Muli',
    },
  
    orderByText: {
      marginRight: 5,
    },
  
    headerSelectedOrderByText: {
      color: '#376593',
   
    },
  
  
  });