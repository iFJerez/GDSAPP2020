import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView, SectionList } from 'react-native';
import * as constants from '../../herramientas/Const'
import EnvioDetalleCard from './EnvioDetalleCard'

import data_cadena from '../../api/cadenas.json'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import TextoBase from './EnvioTextBase';
import GrupoHeader from './GrupoHeader'





const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


export default class PendienteEnvioBody extends Component {


  agruparData (data) {
    const dataReduced = data
      .reduce( (obj,val) => {
        
        const key = val.type
        if(obj[key]) {
          obj[key].data.push({
            indicador: val.indicador,
            fechaHora:val.fechaHora,
            item: val.item,
            ean: val.ean,
            id_sku: val.id_sku,
            accion: val.accion,
            fechaHoraObjecion: val.fechaHoraObjecion
          
          }) 
        } else {
          obj[key] = {}
          obj[key].type = val.type;
          obj[key].id_sala = val.id_sala;
          obj[key].cadena = val.cadena;
          obj[key].direccion = val.direccion;
          obj[key].desc_sala = val.desc_sala;
          obj[key].fechaHora = val.fechaHora;
          obj[key].data = [
            {
              indicador: val.indicador,
              fechaHora:val.fechaHora,
              item: val.item,
              ean: val.ean,
              id_sku: val.id_sku,
              accion: val.accion,
              fechaHoraObjecion: val.fechaHoraObjecion
            }
          ]
        }
        
        return obj;
        
      },{})

    return Object.keys(dataReduced)
      .map(v => dataReduced[v])
  }

  cargaImagen(cadena) {

    try {
      return (
        <View style={styles.st_icono}>
          <Image
            style={styles.st_icono}
            source={{ uri: data_cadena[cadena].uri }}

          />
        </View>
      )
    } catch (error) {
      return (
        <View style={styles.st_icono}>
          <Icon name={'store'} color={constants.COLOR_GRIS_G} size={50} style={styles.st_icono} />
        </View>
      )

    }


  }

  funLlenadoSalas() {
    const { data } = this.props;
console.log(data)
    return data.map((sucursal, i) => {
      return (
        <View style={styles.card}>
          <View style={styles.sucursalHeader}>
            <View style={styles.logo}>
              {this.cargaImagen(sucursal.cadena)}
            </View>
            <View style={styles.detalleSuc}>
              <TextoBase style={styles.sty_text_desc_sucursal}>
                {sucursal.desc_sala}
              </TextoBase>
              <TextoBase style={styles.sty_text_direccion}>
                {sucursal.direccion} 
              </TextoBase>
            </View>
          </View>
          <View style={styles.detalleAcciones}>
          
            


            <SectionList
              sections={this.agruparData(sucursal.acciones)}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item, index }) => (  
                
                <View>
                
                {this.funLlenadoAccionesOtra(item, index, sucursal.id_sala, sucursal.direccion)}
                </View>
              )}
              renderSectionHeader={({ section: { type } }) => (
                
                <GrupoHeader agrupador={type} />
              )}
            />

          </View>
        </View>
      )
    })

  }


  funLlenadoAccionesOtra(data, index, id_sala) {
const datos = {...data, numero: index + 1, id_sala }    

    return(
    
        <View>
          <EnvioDetalleCard data={datos} />
        </View>
    )
        

  }

  



  render() {

    const { data } = this.props;
    let detalle = null;
  
    if (data && data.length > 0) {
      detalle = this.funLlenadoSalas()
    } else {
      detalle =
        <SafeAreaView>
        <View style={styles.sin_datos_container}>
          <IconAnt style={styles.sty_icon_sin_datos} name='checkcircleo' size={100} color={constants.COLOR_GRIS_G}/>
          <Text style={styles.sty_text_sin_datos}>Sin datos por enviar</Text>
        </View>
        </SafeAreaView>
    } 
    return (
        <View style={styles.container}>
          {detalle}
  
          {/* {this.funLlenadoSalas()} */}
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    
  },
  card: {
    justifyContent: 'center',
    borderColor: constants.COLOR_GRIS_F,
    borderWidth: 1,

    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: constants.COLOR_BLANCO,
    
    
  },
  st_icono: { 
    width: 50,
    height: 50,
    resizeMode: 'center',
    alignItems: "center"
  },
  sucursalHeader: {
    paddingLeft: 10,
    padding: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

  
  },
  sty_text_desc_sucursal: {
    fontSize: constants.SIZE_LETRA_XX_LARGE,
    textAlignVertical: "center",
    textAlign: "left",
    fontWeight: 'bold',
    color: constants.COLOR_GRIS_J
  },
  sty_text_direccion: {
    fontSize: constants.SIZE_LETRA_LARGE,
    textAlignVertical: "center",
    textAlign: "left",
    color: constants.COLOR_QUINTENARIO_CLARO
  },
  detalleSuc: {
  
    flexDirection: 'column',
    alignContent: 'flex-start',
    paddingLeft: 10,
    justifyContent: 'flex-start',
    
  },
  sty_text_sin_datos: {
    fontSize: constants.SIZE_LETRA_XXXX_LARGE,
    textAlign: 'center',
    fontWeight: 'bold',
    color: constants.COLOR_GRIS_G,
    shadowColor: constants.COLOR_GRIS_K,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    shadowOffset: {width: 1, height: 1},
  },
  sty_icon_sin_datos: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: constants.COLOR_GRIS_G,
    shadowColor: constants.COLOR_GRIS_K,
    shadowOpacity: 0.1,
    shadowRadius: 0,
    shadowOffset: {width: 1, height: 1},
  },
  sin_datos_container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400
  }


});