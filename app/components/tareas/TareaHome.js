import React, {Component} from 'react';
import { View, Text, LayoutAnimation, StyleSheet } from 'react-native';
import TareaCardButton from './TareaCardButton'
import * as constants from '../../herramientas/Const'
import TareaDetalle from './TareaDetalles'



export default class TareaBody extends Component {
  constructor(props) {
      super(props);
      this.state = { selectedButton: 'INTELIGENTE' };
      this.selectionOnPress = this.selectionOnPress.bind(this);
  }
  
  selectionOnPress(userType) {


       LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  
       this.setState({ selectedButton: userType });
    }


  


  
  render() {
      return (
        <View style={styles.container}>
          <View style={styles.botones}>
          <TareaCardButton 
                activa={this.state.selectedButton}
                selectionOnPress={this.selectionOnPress} 
                nombre={'INTELIGENTE'} 
                base={7}
                cantidad={2}
                name_icon={'rocket1'}/>
                
            <TareaCardButton 
                activa={this.state.selectedButton}
                selectionOnPress={this.selectionOnPress} 
                nombre={'EJECUCION'} 
                base={6}
                cantidad={4}
                name_icon={'team'}/>
            <TareaCardButton 
                activa={this.state.selectedButton}
                selectionOnPress={this.selectionOnPress} 
                nombre={'PROGRAMADAS'} 
                base={5}
                cantidad={3}
                name_icon={'setting'}/>

          </View>

          </View>
      );
  }
  }



const styles = StyleSheet.create({
  container: {
flex: 1, backgroundColor: constants.COLOR_GRIS_D
  },
  sty_texto: {flex: 1, alignItems: 'center', paddingHorizontal: 10,    flexDirection: 'row'},
  sty_icon: {flex: 1,paddingVertical: 15, alignItems: 'center', alignContent: 'center'},
  st_indicadores_progres: { marginHorizontal: 10},
  st_indicadores_texto: {},
  botones: {flexDirection: 'row',  alignItems: 'center', alignContent: 'center', alignSelf: 'center'},
  
  body: {flex: 1, alignItems: 'center'},


});
  