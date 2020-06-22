import React, {Component} from 'react';
import { StyleSheet, View, SectionList } from 'react-native';
// import Indicador from '../salas/Indicadores'
import {funMessage} from '../../../herramientas/Mensaje'
import DetalleBDesplegable from './DetalleBDesplegable'
import DetalleBDesplegableHeader from './DetalleBDesplegableHeader'
import VerFotografia from './VerFotografia';
import Indicador from './DetalleATareaTarjetaIndicador'
import DetalleSucursalHeader from './DetalleATareaSucursalHeader';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ActionCreators from '../../../redux/actions';




 class DetalleA extends Component {
  
  funPickers() {
    const { dataTareaPicker, data } = this.props
    const objecionesReduced = dataTareaPicker
        .filter( v =>    data.indicador === v.indicador 
          ).map((valor, i )=>{
            return valor.picker
          })
          
    let dato =  (Object.keys(objecionesReduced).map(v => objecionesReduced[v]))

    return dato?dato:'sin datos'
  }

  funDetalles(){
    try {

      const picker = this.funPickers()
      console.log('dar amor', picker)
      
    const {data} = this.props
    const {detalles, ...rest} = data;
    const dataAgrupada = detalles
      .reduce((obj,val) => {
        obj[val.agrupador] ? obj[val.agrupador].push(val) : obj[val.agrupador] = [val];
        return obj;
      }, {})
    const sectionListData = Object.keys(dataAgrupada)
      .map(v => ({agrupador: v, ...rest, data: dataAgrupada[v]}))

         return (
         
          
         
         <SectionList
            sections={sectionListData}
            keyExtractor= {(item, index) => (index)}
            renderItem={({ item,index,section }) => (<DetalleBDesplegable picker={picker[0]} data={item} section={section} i={index}/>)}
            renderSectionHeader={({section}) => (<DetalleBDesplegableHeader agrupador={section.agrupador}/>)}
          />
          
          )


    }
    catch (error){
      funMessage('Mensaje','Sin datos para mostrar')
      console.info('error:' + error )
    } 
      
  }



  funTareasRealizadas () {
    
const { data_tareas, data } = this.props

const dato = data_tareas
.filter( v => data.indicador === v.indicador &&
  data.id_sala === v.id_sala)
console.log(dato.length)
return dato.length>0?dato.length:0

}





  render() {
    const {data} = this.props
     //console.log('DetalleASALA', JSON.stringify(data))
    const {cadena, desc_sala, direccion, indicador, fuente} = data
  
    let total = data.detalles.length
  let ok = this.funTareasRealizadas()


  
    return (
      <View style={styles.container}>
     
          <View style={styles.sucHeader}>
            <DetalleSucursalHeader {...{ cadena, desc_sala, direccion }}/>
          </View>
          <View style={styles.indicador}>
           <Indicador {...{ indicador, total, ok, fuente }}/>
          </View>
          <View style={styles.verFoto}>
            <VerFotografia />
         </View>

         <View style={styles.view_detalle}>
           
         
            {this.funDetalles()}
            
         </View>
      
     </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  },
  sucHeader: {
    flex: 1.5,
    paddingBottom: '5 %'
  },
  indicador: {
    flex: 4,
    alignItems: 'center'
  },
  verFoto: {
    flex: 1.1,
    alignItems: 'center'
  },
  view_detalle: {
    flex: 10,
    
  }
});

const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    data_tareas: state.tareaReducer.data_tareas,
    dataTareaPicker: state.userReducer.dataTarea.tareasPicker,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
function mapDispatchToProps(dispatch) {
 
  const combiner = Object.assign({},
    ActionCreators,
    { dispatch },
  );

  return bindActionCreators(
    combiner,
    dispatch,
  );
}

// Exports
export default connect(mapStateToProps,mapDispatchToProps)(DetalleA);