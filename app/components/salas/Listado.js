import React, {Component} from 'react';
import { StyleSheet, View, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchIndicador from './TouchIndicador'
import TextTypeC from '../../herramientas/textos/TextTypeC'
import * as constants from '../../herramientas/Const'
import data from '../../api/cadenas.json'
import { ScrollView } from 'react-native-gesture-handler';


export default class ListadoContraido extends Component {

  crearIndicadores(item, dataAll){


    try {
      return(
          <FlatList  
          numColumns={100}
          key={1}
          data={item}
          renderItem={({item}) =>
          
          <TouchIndicador data={item} dataAll={dataAll} />}
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
      <View style={styles.sty_image}>
              <Image
              style={styles.st_icono}
              source={{uri: data[cadena].uri}}
                
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

     cargaEstado(estado){



      try {
        if(estado=='nueva') {

        return(
      <View style={styles.linea_nueva}>
                 
      </View>
        )
        }
        else if(estado=='objetada') {

          return(
            <View style={styles.linea_objetada}>
                 
            </View>
          )
          }
          else {

            return(
              <View style={styles.linea_normal}>
                 
              </View>
            )
            }
      } catch (error) {
        return(
          <View style={styles.linea_normal}>
                 
          </View>
        )
        
      }


     }



  render() {
    const {item} = this.props
    const cadena = item.cadena

    //console.log("envioSala", item.desc_sala)


    //alert(JSON.stringify(data[0]["jumbo"].uri))
    return (
      <View style={styles.container}>
          <View style={styles.st_arriba}>
                   {this.cargaEstado(item.estado)}
                    {this.cargaImagen(cadena)}
                    <View style={styles.st_nombreSala}>
                        <TextTypeC text={item.desc_sala} />
                    </View>

                    
                  
          </View>
          <View style={styles.st_abajo}>    
          <ScrollView horizontal={true}>
              {this.crearIndicadores(item.indicadores, item)}
           </ScrollView>
              
          </View>
       </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.COLOR_BLANCO,
},
  st_abajo: {
     padding: 2,
     alignItems: "center"
    },
  st_arriba: {flexDirection: 'row',
   borderTopWidth: 1,
   borderTopColor: constants.COLOR_GRIS_A, alignContent: 'center',
   textAlignVertical: "center",
   textAlign: "center", },
   st_nombreSala: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   alignItems: 'center',
   textAlignVertical: "center",
   textAlign: "center", 
   paddingLeft: 20,
   
   width: '100%',
  padding: 5 },
  st_icono: {width: '100%', height: '100%', resizeMode: 'center', alignItems: "center"},
  sty_image: {width: 50, height: 50},


  linea_nueva: {backgroundColor: constants.COLOR_PRIMARIO, padding: 3, marginHorizontal: 10},
  linea_normal: {backgroundColor: constants.COLOR_GRIS, padding: 3, marginHorizontal: 10},
  linea_objetada: {backgroundColor: constants.COLOR_SECUNDARIO, padding: 3, marginHorizontal: 10},

});