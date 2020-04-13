import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PendienteEnvioBody from './PendienteEnvioBody'
import Texto from '../../herramientas/textos/TextTypePendiente'
import Enviar from './Enviar'

class App extends Component {

  constructor() {
    super()
    this.state = {
      check: false,
    }
  }


  funCerrar(){
    return(

      <TouchableOpacity   style={{flex: 0.2}} onPress={() => this.onPresscheck()}>
         <LinearGradient colors={['#3F93A4', '#016a7c']} style={styles.buttonCerrar}>
         <Texto text={'X'}></Texto>
         </LinearGradient>
                 
        </TouchableOpacity>

    
    )

  }
  funAbrir(){
    return(


    <TouchableOpacity  style={styles.buttonAbrir} onPress={() => this.onPresscheck()}>
         <LinearGradient colors={['#3F93A4', '#016a7c']} style={styles.buttonAbrir}>
         <Texto text={'Pendiente Envio'}></Texto>
         </LinearGradient>
                 
        </TouchableOpacity>

  
)
  }


  onPresscheck() {




    var CustomLayoutLinear = {
      duration: 600,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      delete: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
    };
     LayoutAnimation.configureNext(CustomLayoutLinear);

    this.setState({ check : !this.state.check});
  }

  render() {

    let middleStyle = this.state.check === false ? styles.styCerrado : styles.styAbierto;
    

    return (
      
  <View style={[middleStyle]} >

         
               {this.state.check?this.funCerrar(): this.funAbrir()}
         
                 
        


         {this.state.check && (
            <View style={styles.container} >
              <PendienteEnvioBody />
              <Enviar />
            </View>
        )}
    


 

         
    </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,

  },
  buttonAbrir: {
    position: 'absolute',
    width:"100%",
    height: 60,
    backgroundColor: '#567',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1


  },
  buttonCerrar: {
    width: 60,
    height: 60,
    backgroundColor: '#567',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    margin: 8,
    right: 10,
    top: 20,
    position: 'absolute',
    zIndex: 100,
  },
  styCerrado: {position: 'absolute', width: "100%", bottom: 150},
  styAbierto: {position: 'absolute', width: "100%",height:"100%"},

});

export default App;