import React, {Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Touchable from '../TouchButtonSmall'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default class SalasMenu extends Component {


  render() {

    const {vista_salas, funViewSalasONOFF} = this.props

    return (
      <View style={styles.container}>
        <Text>
          Menu Salas
        </Text>
        <Touchable 
          activo={vista_salas}
          Icon={MaterialCommunityIcons}
          icon_on={'view-grid'}
          icon_off={'view-sequential'}
          carpeta={'MaterialCommunityIcons'}
          funExec={funViewSalasONOFF}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
   
   width: '100%',
   
  }
});