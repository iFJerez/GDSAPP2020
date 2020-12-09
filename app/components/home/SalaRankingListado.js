import React, {Component} from 'react';
import { StyleSheet, View, FlatList, Image, Text} from 'react-native';
import TouchIndicador from './SalaRankingListadoTouch'
import TextTypeC from '../../herramientas/textos/TextTypeC'
import * as constants from '../../herramientas/Const'
import Cadenas from "../../herramientas/Cadenas"
import IconNueva from '../../herramientas/IconNueva'


export default class ListadoContraido extends Component {

  crearIndicadores(item){
    try {
      return(
        item.map((item, key)=>{
        return(
          <View key={key}> 
            <TouchIndicador data={item} />
          </View>

        ) }
         
      ))
    
    } catch (error) {
      alert(error)
    }
    
     }



  render() {
    const {item} = this.props
    const cadena = item.cadena
    //alert(JSON.stringify(data[0]["jumbo"].uri))
    return (
      <View style={styles.container}>
          <View style={styles.st_arriba}>
              <View style={styles.st_icono}>
                    {this.cargaImagen(cadena)}
                    <Cadenas cadena={cadena} />
                    <IconNueva text={'nueva'}/>  
              </View>  
              <View style={styles.st_sala}>
              
                  <TextTypeC text={item.desc_sala} />
                  {this.crearIndicadores(item.indicadores)}
              </View>
          </View>
          <View style={styles.st_abajo}>    
            
              
          </View>
       </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
   flex:1,
   margin: 5,},
  st_abajo: {flex: 1,
     backgroundColor: constants.COLOR_GRIS_C, 
     padding: 5,
     borderBottomLeftRadius: 15,
     borderBottomRightRadius: 15,
     alignItems: "center"
    },
  st_arriba: {flexDirection: 'row',
   backgroundColor: constants.COLOR_BLANCO, 
   borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  padding: 2 },
  st_indicadores: {flex: 1, flexDirection: 'row'},
  st_icono: {flex: 1, paddingHorizontal: 2,      alignItems: "center"},
  st_sala: {flex: 4, flexDirection: 'row'},
  st_indicadores_valor: {flex: 1},
});