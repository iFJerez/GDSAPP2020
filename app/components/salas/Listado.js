import React, {Component} from 'react';
import { StyleSheet, View, FlatList, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchIndicador from './TouchIndicador'
import TextTypeC from '../../herramientas/textos/TextTypeC'
import * as constants from '../../herramientas/Const'
import data from '../../api/cadenas.json'
import IconNueva from '../../herramientas/IconNueva'


export default class ListadoContraido extends Component {

  crearIndicadores(item){
    try {
      return(
          <FlatList  
          numColumns={4}
          key={1}
          data={item}
          renderItem={({item}) => <TouchIndicador data={item} />}
          keyExtractor={(item, index) => '' + index}
  />   
      )
    
    } catch (error) {
      alert(error)
    }
    
     }

     cargaImagen(cadena){

      try {
        return(
        <Image
        style={{width: '100%', height: 40, margin: 5, alignItems: "center"}}
        source={{uri: data[cadena].uri}}
          
      />
        )
      } catch (error) {
        return(
          <Icon name={'store'} color={constants.COLOR_GRIS_F} size={40} style={styles.st_icono} />
        )
        
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
                    <IconNueva text={'nueva'}/>  
              </View>  
              <View style={styles.st_sala}>
              
                  <TextTypeC text={item.desc_sala} />
                  
              </View>
          </View>
          <View style={styles.st_abajo}>    
              {this.crearIndicadores(item.indicadores)}
              
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
  st_indicadores: {flex: 1},
  st_icono: {flex: 1, paddingHorizontal: 2,      alignItems: "center"},
  st_sala: {flex: 5},
  st_indicadores_valor: {flex: 1},
});