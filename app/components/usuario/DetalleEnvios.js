import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import * as constants from '../../herramientas/Const';
import { connect } from 'react-redux';
import {funFecha} from '../../herramientas/Fechas'

class DetalleEnvios extends Component {

  funCantidades (data) {
    
      const enviosReduced = data
        .reduce( (obj,val) => {
    
          const key =  val.fechaHoraEnvio + val.id_sala
          if(obj[key]) {
            obj[key].cantidad = obj[key].cantidad + 1;
          } else {
            obj[key] = {}
            obj[key].id_sala = val.id_sala;
            obj[key].cadena = val.cadena;
            obj[key].desc_sala = val.desc_sala;
            obj[key].fechaHora = val.fechaHora;
            obj[key].fechaHoraEnvio =  val.fechaHoraEnvio;
            obj[key].id_sala = val.id_sala;
            obj[key].cantidad = 1
          }
          return obj;
        },{})

       return Object.keys(enviosReduced).map(v => enviosReduced[v])

  }



  funAgruparFechas () {
    const { envios } = this.props
    const enviosReduced = envios
      .filter( v => v.status === 'enviado')
      .reduce( (obj,val) => {
        const key = val.fechaHoraEnvio
        if(obj[key]) {
          obj[key].data.push({
            id_sala: val.id_sala,
            desc_sala: val.desc_sala,
            type: val.type
          }) 
        } else {
          obj[key] = {}
          obj[key].fechaHoraEnvio = val.fechaHoraEnvio
          obj[key].data = [
            {
              id_sala: val.id_sala,
              desc_sala: val.desc_sala,
              type: val.type
            }
          ]
        }
        
        return obj;
        
      },{})

      return Object.keys(enviosReduced).map(v => enviosReduced[v])
  }





  funGenerarVista(data) {
    return data.map((v,i)=>(
      <View style={styles.dataContainer} key={i}>
        <View style={styles.dataPunto}>
          <Text style={styles.textoFecha}>{v.fechaHoraEnvio}</Text>
        </View>

        <View style={styles.dataObjeciones}>
            <View style={styles.referencia}>
              {this.funGenerarVistaDetalle(this.funCantidades(v.data))}
            </View>
        </View>
      </View>
    ))
  }

  funGenerarVistaDetalle(data) {
    return data.map((v,i)=>(
      <View style={styles.dataContainerDetalle} key={i}>
        <View style={styles.dataPunto}>
          <Text style={styles.textoPunto}>{v.desc_sala}</Text>
        </View>
        <View style={styles.dataObjecionesCantidad}>
          <View style={styles.cantidad}>
             <Text style={styles.textoCantidad}>{v.cantidad} {v.cantidad>1 ? 'envios':'envio'}</Text>
          </View>
          <View style={styles.referencia}>
          </View>
        </View>
      </View>
    ))
  }



  render() {
    const dataJSX = this.funGenerarVista(this.funAgruparFechas())
    return (
      <View style={styles.container}>
        <ScrollView>
        
          {dataJSX}
        </ScrollView>
      </View> )

  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.COLOR_GRIS_D,
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 10,
    flexDirection: 'column',
    flex: 1
  },
  dataContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    
  },
  dataContainerDetalle: {
    backgroundColor: constants.COLOR_BLANCO,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginTop: 1,
    borderRadius: 5
    
  },

  textoFecha: {
      fontSize: constants.SIZE_LETRA_LARGE,
      color: constants.COLOR_PRIMARIO,
      fontWeight: 'bold'
  },
  textoPunto: {
    color: constants.COLOR_GRIS_J
},
  textoCantidad: {
      color: constants.COLOR_SECUNDARIO,
      fontSize: constants.SIZE_LETRA_LARGE,
      fontWeight: 'bold'
  },
  cantidad: {
    padding: 5
    
  },
  textoObjeciones: {
      color: constants.COLOR_GRIS_J,
      fontSize: constants.SIZE_LETRA_LARGE,
      fontWeight: 'bold'
  },
  dataObjecionesCantidad: {
    flexDirection: 'row',
    marginTop: 3,
    alignItems: 'center',
    marginHorizontal: 5,
    paddingBottom: 3,
  },
  dataPunto: {
    paddingHorizontal: 10,
    paddingVertical: 5,

    
  },
  linea: {
    borderColor: constants.COLOR_PRIMARIO_CLARO,
    borderWidth: 1,
    borderRadius: 50,
    

  },
  sty_texto: {flex: 1,    flexDirection: 'row', alignItems: 'center', alignContent: 'center', alignSelf: 'center'},
  sty_icon: {flex: 1,paddingVertical: 1, alignItems: 'center', alignContent: 'center'},

});


const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    envios: state.envioReducer
  };
};



export default connect(mapStateToProps)(DetalleEnvios)