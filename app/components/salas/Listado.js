import React, {Component} from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TouchIndicador from './TouchIndicador'
import TextTypeC from '../../herramientas/textos/TextTypeC'
import * as constants from '../../herramientas/Const'
import Cadenas from "../../herramientas/Cadenas"
import { ScrollView } from 'react-native-gesture-handler';


export default class ListadoContraido extends Component {

  crearIndicadores(item, dataAll){


    try {
      return(

        item.map((valores, i)=>{
          return  (
          <View key={"dentro" + i}>
            <TouchIndicador data={valores} dataAll={dataAll} />
          </View>
          )

        } )

      )
    
    } catch (error) {
      alert(error)
    }
    
     }



     cargaEstado(estado, cadena){



      try {
        if(estado==0) {

        return(
      <View style={styles.conenedorEstado}>
          <View style={styles.linea_nueva}>           
          </View>
          <View style={styles.conenedorEstadoImagen}>  
          <Cadenas cadena={cadena} />
              <Text style={styles.text_nueva}>Nueva</Text>
          </View>     
      </View>
      
        )
        }
        else if(estado==2) {

          return(
        <View style={styles.conenedorEstado}>
            <View style={styles.linea_objetada}>           
            </View>
            <View style={styles.conenedorEstadoImagen}>  
              <Cadenas cadena={cadena} />
                <Text style={styles.text_objetada}>Objetada</Text>
            </View>     
        </View>
          )
          }
          else if(estado==1) {

            return(
            <View style={styles.conenedorEstado}>
              <View style={styles.linea_normal}>           
              </View>
              <View style={styles.conenedorEstadoImagen}>  
              <Cadenas cadena={cadena} />
                  <Text style={styles.text_normal}>Revisada</Text>
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
              <Cadenas cadena={cadena} />
                  <Text style={styles.text_normal}>  ...  </Text>
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


    //alert(JSON.stringify(data[0]["jumbo"].uri))
    return (
      <View style={styles.container}>
          <View style={styles.st_arriba}>
                   {this.cargaEstado(item.estado, cadena)}
                    
                    <View style={styles.st_nombreSala}>
                        <Text style={styles.sty_sala}>{item.desc_sala} </Text> 
                    </View>

                    
                  
          </View>
          <View style={styles.st_abajo}>    
          <ScrollView >              
          <View style={styles.containerLista}>
    
              {this.crearIndicadores(item.indicadores, item)}
              
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
sty_sala: {
  
  fontWeight: 'bold',
  color: constants.COLOR_QUINTENARIO_CLARO,
  marginRight: 100,
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