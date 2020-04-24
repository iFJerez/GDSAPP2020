import React, {Component} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CardTareas from '../components/tareas/CardTareas'
import CardLista from '../components/tareas/CardLista'
import NavigationContainer from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import * as constants from '../herramientas/Const'



export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = { selectedButton: null };
      this.selectionOnPress = this.selectionOnPress.bind(this);
  }
  
  selectionOnPress(userType) {
      this.setState({ selectedButton: userType });
  }


  funMuestra(){
      if(this.state.selectedButton === "ADVANCED") {
        return (    <Text style={styles.switchButtonsTitle}>
          Seleccionaron ADVANCED
      </Text>)
      }  
      else if (this.state.selectedButton === "INTERMEDIATE"){
        return (    <Text style={styles.switchButtonsTitle}>
          Seleccionaron INTERMEDIATE
      </Text>)
      }
      else {
        return (   
          
          <Text style={styles.switchButtonsTitle}>
          Seleccionaron BASIC
      </Text>)
      }

  }
  
  render() {
      return (
        <View style={styles.container}>
          <View style={styles.botones}>
              <Text style={styles.switchButtonsTitle}>
                  Choose Type of User
              </Text>
              <TouchableOpacity
                  onPress={() => this.selectionOnPress("BASIC")}
              >
                  <Text
                      style={{
                          backgroundColor:
                              this.state.selectedButton === "BASIC"
                                  ? "red"
                                  : "grey"
                      }}
                  >
                      <Text style={styles.switchButtonsText}>BASIC</Text>
                  </Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                  onPress={() => this.selectionOnPress("INTERMEDIATE")}
              >
                  <Text
                      style={{
                          backgroundColor:
                              this.state.selectedButton === "INTERMEDIATE"
                                  ? "red"
                                  : "grey"
                      }}
                  >
                      <Text style={styles.switchButtonsText}>
                          INTERMEDIATE
                      </Text>
                  </Text>
              </TouchableOpacity>
  
              <TouchableOpacity
                  onPress={() => this.selectionOnPress("ADVANCED")}
              >
                  <Text
                      style={{
                          backgroundColor:
                              this.state.selectedButton === "ADVANCED"
                                  ? "red"
                                  : "grey"
                      }}
                  >
                      <Text style={styles.switchButtonsText}>
                          ADVANCED
                      </Text>
                  </Text>
              </TouchableOpacity>
          </View>
          <View style={styles.body}>

            {this.funMuestra()}


          </View>
          </View>
      );
  }
  }



const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.COLOR_BLANCO,
    borderColor: constants.COLOR_PRIMARIO,
    borderWidth: 1,
    marginHorizontal: 8,
    marginVertical: 3,
    borderRadius: 5,
    padding: 5,
    flexDirection: 'column'
  },
  sty_texto: {flex: 1, alignItems: 'center', paddingHorizontal: 10,    flexDirection: 'row'},
  sty_icon: {flex: 1,paddingVertical: 15, alignItems: 'center', alignContent: 'center'},
  st_indicadores_progres: { marginHorizontal: 10},
  st_indicadores_texto: {},
  st_indicadores_valor: {flex: 1},
  botones: {  flex: 1,  flexDirection: 'row'},
  body: {flex: 1, alignItems: 'center'}
});
  