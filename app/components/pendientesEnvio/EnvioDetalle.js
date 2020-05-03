import React, {Component} from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import * as constants from '../../herramientas/Const'
import EnvioDetalleCard from './EnvioDetalleCard'
import data_cadena from '../../api/cadenas.json'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EnvioText from './EnvioText'

export default class PendienteEnvioBody extends Component {



  cargaImagen(cadena){

    try {
      return(
    <View style={styles.sty_image}>
            <Image
            style={styles.st_icono}
            source={{uri: data_cadena[cadena].uri}}
              
          />
    </View>
      )
    } catch (error) {
      return(
        <View style={styles.sty_image}>
            <Icon name={'store'} color={constants.COLOR_GRIS_G} size={50} style={styles.st_icono} />
        </View>
      )
      
    }


   }

   funLlenadoSalas(){
    const {data} = this.props;

    return data.map((sucursal, i ) => {
      return (
       <View style={styles.container}>
         {this.cargaImagen(sucursal.cadena)}
         <Text>{sucursal.cadena}</Text>
         <EnvioText text={sucursal.desc_sala} />

         {this.funLlenadoAcciones(sucursal.acciones)}
       </View>
      )
    })

   }

   funLlenadoAcciones(data){
  
    return data.map((accion, i ) => {
      return (
        <EnvioDetalleCard data={{...accion, numero: i + 1}} />
      )
    })

   }



  render() {
  
    const {data} = this.props;
    return (
      <View style={styles.container}>
        {this.funLlenadoSalas()}
    
           
      
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLOR_GRIS_D,
    borderRadius: 5,
    
  },
  st_icono: {width: '100%', height: '100%', resizeMode: 'center', alignItems: "center"},
  sty_image: {width: 50, height: 50},
  
});