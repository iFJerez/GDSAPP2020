import React, {Component} from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  LayoutAnimation,
  ScrollView,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EnvioDetalle from './EnvioDetalle'
import Texto from '../../herramientas/textos/TextTypePendiente'
import EnvioBotonEnviar from './EnvioBotonEnviar'
import * as constants  from '../../herramientas/Const'
import Icon from '../../herramientas/IconAntDesign'
import data from '../../api/envio.json'

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
         <LinearGradient colors={[constants.COLOR_SECUNDARIO, constants.COLOR_SECUNDARIO_CLARO]} style={styles.buttonCerrar}>
         <Texto text={'X'}></Texto>
         </LinearGradient>
                 
        </TouchableOpacity>

    
    )

  }
  funAbrir(){
    return(


    <TouchableOpacity  style={styles.buttonAbrir} onPress={() => this.onPresscheck()}>
         <LinearGradient colors={[constants.COLOR_SECUNDARIO, constants.COLOR_SECUNDARIO_CLARO]} style={styles.buttonAbrir}>
           <View style={{flexDirection: 'row', alignItems: 'center'}}>

                     <View style={{paddingRight: 20}}>
          <Icon name='rocket1' size={constants.ICON_SMALL} color={constants.COLOR_BLANCO}/>
          </View>


           <View style={{paddingRight: 10}}>
          <Texto text={'Tienes 4 pendientes de envio'}></Texto>
          </View>

  
         
         
         </View>
         </LinearGradient>
                 
        </TouchableOpacity>

  
)
  }
  funCerrar2(){
    return(


    <View  style={styles.buttonCerrar2} onPress={() => this.onPresscheck()}>

                 
        </View>

  
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
        {this.state.check?this.funCerrar2():this.funAbrir()}
         {this.state.check && (
            <View style={styles.container} >
              <ScrollView >
              {this.funCerrar()}
              <EnvioDetalle data={data} />
              </ScrollView>
              <EnvioBotonEnviar />
              
            </View>
        )}
    


 

         
    </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   marginBottom: 0,
   

  },
  buttonAbrir: {
    
    width:"97%",
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonCerrar2: {
    width:"97%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  buttonCerrar: {
    width: 60,
    height: 60,
    backgroundColor: '#567',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: 8,
    right: 10,
    top: 20,

  },
  styCerrado: {height: 50, width: "100%", bottom: 0, alignItems: 'center'},
  styAbierto: {position:'absolute', bottom:0 , width: "100%",height:"100%", backgroundColor: '#fff'},

});

export default App;