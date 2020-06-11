import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconAntDesign'
import ActionCreators from '../../redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class CardUsuario extends Component {

  funExec(){
    const {data, ver_tarea_detalle,  funTareaVerDetalle, funTareaGuardaDetalle} = this.props;
  
   funTareaGuardaDetalle(data) 
   funTareaVerDetalle(!ver_tarea_detalle)

  //console.log('TouchIndicador', data)
  }

  funTareasRealizadas () {
    const { data_tareas, data } = this.props
    const objecionesReduced = data_tareas
        .filter( v =>    data.indicador === v.indicador &&
          data.id_sala === v.id_sala)
        .reduce( (counter, item) => {
          counter[item] = counter.hasOwnProperty(item) ? counter[item] + 1 : 1;
          return counter ;
        },{})
    let dato =  Object.keys(objecionesReduced).map(v => objecionesReduced[v])
    return dato>0?dato:0

  }


  render() {
    const {data, activa, nombre} = this.props
    const ok = this.funTareasRealizadas() == data.detalles.length
    let style_activa = ok ? styles.sty_botonOn : styles.sty_botonOff
    let style_texto = ok ? styles.textoOn: styles.textoOff
    let style_icon = ok ? constants.COLOR_PRIMARIO: constants.COLOR_GRIS_I
    return (
      
      <TouchableOpacity onPress={()=>this.funExec()}>
        <View style={[style_activa, styles.container ]}>
        
          <Icon name={data.name_icon} color={style_icon} size={constants.ICON_SMALL} />
          <Text style={style_texto}>{data.indicador}</Text>
          <Text style={style_texto}> {this.funTareasRealizadas()} / {data.detalles.length}</Text>

      </View>
    </TouchableOpacity>

      
    );
  }

}


// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    
    ver_tarea_detalle: state.flashReducer.ver_tarea_detalle,
    data_tareas: state.tareaReducer.data_tareas,
    
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
export default connect(mapStateToProps, mapDispatchToProps)(CardUsuario);





const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
    backgroundColor: constants.COLOR_BLANCO
  },

  sty_botonOff: {
    borderColor: constants.COLOR_GRIS_G,
    borderWidth: 1,
    padding: 10
  },
  sty_botonOn: {
    borderColor: constants.COLOR_PRIMARIO,
    borderWidth: 1,
    padding: 10,
    
  },
  textoOn: {
    color: constants.COLOR_PRIMARIO},
    
  textoOff: {
      color: constants.COLOR_GRIS_I}
  
});