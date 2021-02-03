import React, {Component} from 'react';
import { StyleSheet, View, Image} from 'react-native';


export default class Imagegds extends Component {

  render() {

const {fila, i} = this.props;

    return (
      
      <View style={styles.viewimagenFondo}>  
      <View style={styles.viewimagen}>  
 
       <Image
       style={styles.st_icono}
       source={ImageLoad}
       />
       

     </View>
     
</View>
     
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCC',
    flexDirection: 'row',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    flex: 1,

  
    },
    st_icono: {
      width: "50%",
      height: "50%",
      resizeMode: "center",
      alignItems: "center",
    },
      viewimagenFondo: {
        flex: 1,
        
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        
        
      },
      viewimagen: {
        width: '100%',
      
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
      
      },
      styleDesc: {
        flex: 5,
      
        },

});