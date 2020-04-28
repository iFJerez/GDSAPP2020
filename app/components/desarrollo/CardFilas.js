import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';




export default class CardFilas extends Component {


  render() {

    
const {fila, i} = this.props;

    return (
      
      <View style={styles.container}>
            <View style={styles.styleId}>
                  <Text key={'idSala' + i}>{fila.id_sala}</Text>
                  

          </View>
          <View style={styles.styleDesc}>
                  
                  <Text key={'descSala' + i}>{fila.desc_sala}</Text>

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
    styleId: {
      flex: 1
      
      
    
      },
      styleDesc: {
        flex: 5,
      
        },

});