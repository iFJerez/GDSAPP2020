import React, {Component} from 'react';
import { StyleSheet, View, SectionList, ScrollView } from 'react-native';
// import Indicador from '../salas/Indicadores'
import {funMessage} from '../../herramientas/Mensaje'
import DetalleBDesplegable from './DetalleBDesplegable'
import DetalleBDesplegableHeader from './DetalleBDesplegableHeader'
import VerFotografia from './DetalleASalaComponents/VerFotografia';
import Indicador from './DetalleASalaComponents/DetalleASalaTarjetaIndicador'
import DetalleSucursalHeader from './DetalleASalaComponents/DetalleASalaSucursalHeader';



export default class DetalleIndicadores extends Component {

  funDetalles(){
    try {
    const {data} = this.props

    const {detalles, ...rest} = data;
    // const dataAgrupada = {}

    // for (let i = 0; i < detalles.length; i++) {
    //   if (dataAgrupada[detalles[i].agrupador]) {
    //     dataAgrupada[detalles[i].agrupador].push(detalles[i])
    //   } else {
    //     dataAgrupada[detalles[i].agrupador] = [detalles[i]]
    //   }
    // }

    const dataAgrupada = detalles
      .reduce((obj,val) => {
        obj[val.agrupador] ? obj[val.agrupador].push(val) : obj[val.agrupador] = [val];
        return obj;
      }, {})
    const sectionListData = Object.keys(dataAgrupada)
      .map(v => ({agrupador: v, ...rest, data: dataAgrupada[v]}))

    // const sectionListData = detalles.map(v => ({...v, ...dataRest}))
    // console.log('LA DATA: ', sectionListData)

         return (<SectionList
            sections={sectionListData}
            keyExtractor= {(item, index) => (index)}
            renderItem={({ item,index,section }) => (<DetalleBDesplegable data={item} section={section} i={index}/>)}
            renderSectionHeader={({section}) => (<DetalleBDesplegableHeader agrupador={section.agrupador}/>)}
          />)

          // <SectionList
          // sections={sectionListData}
          // renderItem={({ item,index }) => (<EnvioDetalle data={{...item, numero: index+1}} />)}
          // renderSectionHeader={({section}) => (<EnvioSucursalHeader data={section}/>)}
          // />
              //  <DetalleBDesplegable data={v} i={i} />
    }
    catch {
      funMessage('Mensaje','Sin datos para mostrar')
    } 
      
  }


  render() {
    const {data} = this.props
    // console.log('DetalleASALA', JSON.stringify(data))
    const {cadena, desc_sala, direccion, desc_indicador, valor, diferencia, fuente, fechaHora} = data

    return (
      <View style={styles.container}>
        <ScrollView>
              <View style={styles.header}>
                    <View style={styles.sucHeader}>
                      <DetalleSucursalHeader {...{ cadena, desc_sala, direccion, fechaHora }}/>
                    </View>
                    <View style={styles.indicador}>
                      <Indicador {...{ desc_indicador, valor, diferencia, fuente }}/>
                    </View>
                    <View style={styles.verFoto}>
                      <VerFotografia />
                  </View>
             </View>
            <View style={styles.view_detalle}>
                {this.funDetalles()}
            </View>
            </ScrollView>
     </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
  flex: 1
  },
  header: {
    flex: 1,
    paddingBottom: 5,
    
  },
  sucHeader: {
    flex: 1,
    paddingBottom: 30
  },
  indicador: {
    flex: 2,
    alignItems: 'center'
  },
  verFoto: {
    height: 35,
    alignItems: 'center'
  },
  view_detalle: {
    flex: 2,
    
  }
});