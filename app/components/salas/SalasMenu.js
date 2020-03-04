import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';



export default class SalasMenu extends Component {


  render() {

    

    return (
      <View style={styles.container}>
        <Text>
          Menu Salas
        </Text>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
   
   width: '100%',
   
  }
});