import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import * as constants from '../../herramientas/Const';
import { connect } from 'react-redux';

class DetalleObjeciones extends Component {

  funObtieneObjeciones (/*Se puede dejar para filtrar por rango de fechas PENDIENTE*/) {
    const { objeciones } = this.props
      const objecionesReduced = objeciones
        .filter( v => v.status === 'enviado')
        .reduce( (obj,val) => {
          const key = 'sala' + val.id_sala + val.fechaHora
          if(obj[key]) {
            obj[key].cantidad = obj[key].cantidad + 1;
          } else {
            obj[key] = {}
            obj[key].id_sala = val.id_sala;
            obj[key].cadena = val.cadena;
            obj[key].desc_sala = val.desc_sala;
            obj[key].fechahora = val.fechahora;
            obj[key].id_sala = val.id_sala;
            obj[key].cantidad = 1
          }
          return obj;
        },{})

       return Object.keys(objecionesReduced).map(v => objecionesReduced[v])

  }

  funGenerarVista(data) {
    return data.map((v,i)=>(
      <View style={styles.dataContainer} key={i}>
        <View style={styles.dataPunto}>
          <Text style={styles.textoPunto}>{v.desc_sala.toUpperCase()}</Text>
        </View>
        <View style={styles.dataObjeciones}>
          <View style={styles.cantidad}>
            <Text style={styles.textoCantidad}>{v.cantidad}</Text>
          </View>
          <View style={styles.referencia}>
            <Text style={styles.textoObjeciones}>{'OBJECIONES'}</Text>
          </View>
        </View>
      </View>
    ))
  }




  render() {
    const dataJSX = this.funGenerarVista(this.funObtieneObjeciones())
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
    flexDirection: 'column'
  },
  dataContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  textoPunto: {
      color: constants.COLOR_PRIMARIO
  },
  textoCantidad: {
      color: constants.COLOR_SECUNDARIO,
      fontSize: constants.SIZE_LETRA_XX_LARGE,
      fontWeight: 'bold'
  },
  cantidad: {
    paddingRight: 10
  },
  textoObjeciones: {
      color: constants.COLOR_GRIS_J,
      fontSize: constants.SIZE_LETRA_LARGE,
      fontWeight: 'bold'
  },
  dataObjeciones: {
    flexDirection: 'row',
    backgroundColor: constants.COLOR_BLANCO,
    marginTop: 3,
    padding: 10,
    alignItems: 'center'
  },
  dataPunto: {
    padding: 5,
    borderBottomColor: constants.COLOR_GRIS_F,
    borderBottomWidth: 1
  },
  linea: {
    borderColor: constants.COLOR_PRIMARIO_CLARO,
    borderWidth: 1,
    margin: 100,
    borderRadius: 50,
    padding: 10,

  },
  sty_texto: {flex: 1,    flexDirection: 'row', alignItems: 'center', alignContent: 'center', alignSelf: 'center'},
  sty_icon: {flex: 1,paddingVertical: 1, alignItems: 'center', alignContent: 'center'},

});


const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    objeciones: state.envioReducer
  };
};



export default connect(mapStateToProps)(DetalleObjeciones)