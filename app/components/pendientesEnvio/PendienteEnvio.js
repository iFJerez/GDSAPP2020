import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconAntDesign'
import {funMessage} from '../../herramientas/Mensaje'
import LinearGradient from 'react-native-linear-gradient';




export default class SalasListadoInCo extends Component {




  render() {
    
    return  (
      


 

<View style={styles.container}>
<LinearGradient colors={['#3F93A4', '#016a7c']} style={styles.linearGradient}>

<TouchableOpacity onPress={() => {funMessage('Pendiente Envio', 'Por construir...')}}>
<View style={styles.styleRow}>
<View style={styles.view_icon}>
   <Icon numero={5} name={'clouduploado'} size={constants.ICON_LARGE} color={constants.COLOR_BLANCO}/>

 </View>
 <View style={styles.view_text}>
   
    <Text style={styles.buttonText}>
        Pendientes de Envio
      </Text>
      
  
  </View>
   

      
  
  </View>
  </TouchableOpacity>
</LinearGradient>
</View>
          


      
   )
    
  }

}

const styles = StyleSheet.create({

 
  container: {position: 'absolute', bottom: 90, width: '100%', },
  linearGradient: {
    flex: 1,


  
  },
  styleRow: {flexDirection: 'row', padding: 5, flex: 1},
  view_icon: { paddingLeft: 50, paddingRight: 20,  alignItems: 'center'},
  view_text: {  padding: 10,fontFamily:'Raleway', alignItems: 'center'},
  buttonText: {
    fontSize: 20,
    
    
    color: constants.COLOR_BLANCO,
    
  },
});