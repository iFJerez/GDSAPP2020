import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import TextTypeHome from '../../herramientas/textos/TextTypeHome'

export default class HomeTitulo extends Component {
  render() {
 
    return (
      <View style={styles.container}>
             <View style={styles.viewText}>
                    <TextTypeHome text={'Home'}/>

            </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    backgroundColor: 'transparent',


    
  },
  viewText: {
    
    
    
    position: 'absolute',
    bottom: 10,
    left: 20

   
  }
  

});