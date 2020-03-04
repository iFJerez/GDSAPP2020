// Imports: Dependencies
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as constants from '../herramientas/Const'
import {
  SkypeIndicator
} from 'react-native-indicators';

// Screen: Counter 14932
class ModalScreen extends React.Component {



  render() {
    return (
   
      <View style={styles.scrollableModal}>

      <View style={styles.scrollableModalContent1}>

      
      <SkypeIndicator count={2} size={200} animationDuration={1800} color={constants.COLOR_PRIMARIO_CLARO} />

      
        </View>
      </View>


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
flexDirection: 'row',
alignItems: 'center',
 flex: 1

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


// Exports
export default (ModalScreen);







