import React, {Component} from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TareaTouch from './TareaTouch'
import TextTypeC from '../../herramientas/textos/TextTypeC'
import * as constants from '../../herramientas/Const'
import data from '../../api/cadenas.json'
import { ScrollView } from 'react-native-gesture-handler';



export default class ListadoContraido extends Component {

  crearIndicadores(item){


    try {
      return(

        item.indicadores.map((valores, i)=>{
          const obj = {...valores, ...item}

          return  (
          <View>
             <TareaTouch data={obj}/>
          </View>
   
          )

        } )

      )
    
    } catch (error) {
      alert("Faltan datos TareaListado : " + error)
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

     cargaEstado(estado, cadena){



      try {
        if(estado=='nueva') {

        return(
      <View style={styles.conenedorEstado}>
          <View style={styles.linea_nueva}>           
          </View>
          <View style={styles.conenedorEstadoImagen}>  
              {this.cargaImagen(cadena)}
              <Text style={styles.text_nueva}>  Nuevo </Text>
          </View>     
      </View>
      
        )
        }
        else if(estado=='objetada') {

          return(
        <View style={styles.conenedorEstado}>
            <View style={styles.linea_objetada}>           
            </View>
            <View style={styles.conenedorEstadoImagen}>  
                {this.cargaImagen(cadena)}
                <Text style={styles.text_objetada}> Objetada </Text>
            </View>     
        </View>
          )
          }
          else {

            return(
              <View style={styles.conenedorEstado}>
              <View style={styles.linea_normal}>           
              </View>
              <View style={styles.conenedorEstadoImagen}>  
                  {this.cargaImagen(cadena)}
                  <Text style={styles.text_normal}>  Revisada </Text>
              </View>     
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


    
    return (
      <View style={styles.container}>
          <View style={styles.st_arriba}>
                   {this.cargaEstado(item.estado, cadena)}
                    
                    <View style={styles.st_nombreSala}>
                        <TextTypeC text={item.desc_sala} />
                    </View>

                    
                  
          </View>
          <View style={styles.st_abajo}>    
          <ScrollView >              
          <View style={styles.containerLista}>
    
              {this.crearIndicadores(item)}
              
          </View>
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
containerLista: {
  flexDirection: 'row',
  flex: 1
},
conenedorEstado: {
  flexDirection: 'row',

},
conenedorEstadoImagen: {
  flexDirection: 'column',
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

  text_nueva: {color: constants.COLOR_PRIMARIO, fontSize: constants.SIZE_LETRA_MEDIUM},
  text_normal: {color: constants.COLOR_GRIS, fontSize: constants.SIZE_LETRA_MEDIUM},
  text_objetada: {color: constants.COLOR_SECUNDARIO, fontSize: constants.SIZE_LETRA_MEDIUM},
});