import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, SafeAreaView, Image, ActivityIndicator} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Activity from '../../screens/ActivityScreen'




export default class IImagen extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      expanded : false,
      loading: false,
      progress: 0
    }
}


toggleExpand=()=>{
  this.setState({expanded : !this.state.expanded})
}


funLlenar(){
  const {valor, semaforo} = this.props
  const iconStyle = styles.IconStyle
  let nameIcons = "look-" + valor
  if(valor != null) {
    return(
          <View style={styles.container}>
             <TouchableOpacity style={styles.Touchs} onPress={()=>{this.toggleExpand()}}>
              <View style={styles.containerCenter}>
                  <View style={styles.containerInto}>
                    <Icon name={"image"} style={iconStyle}/>
                  </View>
                 
              </View>
   
              </TouchableOpacity>
              {
                this.state.expanded &&
              
      
                <Modal style={styles.styImagen}>
                  
              <SafeAreaView style={styles.safetyArea}>
              <View visible={!this.state.loading} style={styles.fondoImagen} onPress={()=>{this.toggleExpand()}}>
                     <View style={styles.fondoImagenInto} onPress={()=>{this.toggleExpand()}}>
                       <Image 
                       onLoadStart={() => this.setState({loading: true})}
                       onLoadEnd={() => this.setState({loading: false})}
                        style={styles.styImagenView} source={{uri: valor}}/>
                    </View>
              </View>

              {this.state.loading ? <ActivityIndicator color={constants.COLOR_SECUNDARIO} style={styles.styleIndicator} size={'large'} />: null}
              
       
            
                  <TouchableOpacity style={styles.styBtnCerar} onPress={()=>{this.toggleExpand()}}> 
                  <View style={styles.viewCerrar}>
                    <View style={styles.viewCerrarInto}>
                  
                        <AntDesign name={"closecircle"} style={styles.IconClose}/> 
         
                    </View>
                  </View>
                  </TouchableOpacity>
            
                  </SafeAreaView>
                  </Modal>
 
              
            }
          </View>
        )
  }

}

  render() {
    
    return (
      <View>
            {this.funLlenar()}
      </View>
    );
  }

}

const styles = StyleSheet.create({

  styleIndicator: {flex: 100},

  viewCenter: {
    alignItems: 'center',
    padding: 1,

  },
  containerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
     
    
    
  },
  containerInto: {
    margin: 5,
    alignItems: 'center',
    
    
    
    
  },


  IconStyle: {
    alignItems: 'center',
    color:constants.COLOR_SECUNDARIO,
    fontSize:40,
  },
  viewCerrar: {
    
    alignItems: 'center', 
    flexDirection: 'row'
  },
  viewCerrarInto: {
    flex: 1,
    alignItems: 'center',

  },
  styImagenView: {flex: 1},

  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    

  },
 
  safetyArea: {
    flex: 1,
  },
  fondoImagen: {
    backgroundColor: '#fff',
    flex: 1,
  },
  fondoImagenInto: {
    backgroundColor: '#000',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
 

  styImagen: {
   flex: 1,
   backgroundColor: '#FDD7E4',
   alignSelf: 'stretch',
   textAlign: 'center',
  
  },
  styBtnCerar: {
    
    textAlign: 'center',
   
   },

  IconStyleTrue: {
    flex: 1,
    color:constants.COLOR_PRIMARIO,
    fontSize:20,
  },
  IconStyleFalse: {
    flex: 1,
    color:constants.COLOR_SECUNDARIO,
    fontSize:20,
  },
  TextStyle: {
    
    fontSize:15,
    fontFamily:"Futura",
    color: constants.COLOR_NEGRO_OPACO,
    
  },
  TextStyleImage: {
    
    fontSize:10,
    fontFamily:"Futura",
    color: constants.COLOR_GRIS_K,
    margin: 10,

    
  },
  IconClose: {
    color:constants.COLOR_SECUNDARIO,
    fontSize:50,

  },


})