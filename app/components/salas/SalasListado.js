// Imports: Dependencies
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Listado from './Listado'
import SalaMenu from './SalasMenu'
import * as constants from '../../herramientas/Const'

// Imports: Redux Actions
import ActionCreators from '../../redux/actions';
import { ScrollView } from 'react-native-gesture-handler';

// Screen: Counter
class SalasListado extends React.Component {
  constructor(props){
    super(props)
    this.state = {  
      NewdataSala: props.dataSala
    }
  }

  OrderSearchAsc=(text) => {
    
    console.log("Ordenando Ascendente: " +text)
    
    let dsOrdernar= this.props.dataSala;
    const newData = dsOrdernar.salas.sort(((a, b) => a[text] > b[text]))
    obj = Object.assign({...dsOrdernar})
    obj.salas = newData
  
  this.setState({NewdataSala: obj})
  }

  OrderSearchDes=(text) => {
    
    console.log("Ordenando Descendente: " +text)
    
    let dsOrdernar= this.props.dataSala;
    const newData = dsOrdernar.salas.reverse(((a, b) => a[text] > b[text]))
    obj = Object.assign({...dsOrdernar})
    obj.salas = newData
  
  this.setState({NewdataSala: obj})
  }

filterSearchOld=(text) => {
    let dsBuscar= this.props.dataSala;
    const newData = dsBuscar.salas.filter(function(item){
    const itemData = item.desc_sala.toUpperCase()
    const textData = text.toUpperCase()
    return itemData.indexOf(textData) > -1
  
    })
    this.setState({NewdataSala: newData })
  }



  filterSearchFunciona=(text) => {
    let dsBuscar= this.props.dataSala
    const newData = dsBuscar.salas.filter((item) => {
    const itemData = item.desc_sala.toUpperCase()
    const textData = text.toUpperCase()
    return itemData.indexOf(textData) > -1
  
    })
  
    function renameKeys(obj, newKeys) {
      const keyValues = Object.keys(obj).map(key => {
  
        if(key === 'salas') {
          console.log('ENCONTRAMOS Salas');
          return { [key]: newKeys[key] };
        }
        else {
          return { [key]: obj[key] };
        }
    
      });
      return Object.assign({}, ...keyValues);
    }
  const newobjsala = {"salas": newData}
  const obj = dsBuscar
  const newKeys = newobjsala
  const renamedObj = renameKeys(obj, newKeys);
  console.log(renamedObj);
  console.log(dsBuscar);
  console.log(newobjsala);
  
  this.setState({NewdataSala: renamedObj})
  
  //console.log(filtered);
  
    
  }
  


  filterSearch=(text) => {
  let dsBuscar= this.props.dataSala;
  const newData = dsBuscar.salas.filter((item) => {
  const itemData = item.desc_sala.toUpperCase()
  const textData = text.toUpperCase()
  return itemData.indexOf(textData) > -1

  })
  obj = Object.assign({...dsBuscar})
  obj.salas = newData

this.setState({NewdataSala: obj})

//console.log(obj);

  
}





 crearSala(item, i){
  const {NewdataSala} = this.state;
  let sala = 'sala' + item.id_sala
  let newData = NewdataSala[sala]
  let obj = {...item, ...newData};
  //console.log('SalaListado', JSON.stringify(obj))
  return(

    //Buscamos su Informacion y luego se la compartimos.


          <View key={"llave" + i}>
             <Listado item={obj}/>
             
          </View>
    
  )
}



componentDidUpdate(prevProps) {
  if (prevProps.sala_orden_key !== this.props.sala_orden_key) {
    if (this.props.sala_orden_asc) {
      this.OrderSearchAsc(this.props.sala_orden_key)
    }
    else {
      this.OrderSearchDes(this.props.sala_orden_key)
    }
  }

  if (prevProps.sala_orden_asc !== this.props.sala_orden_asc) {
    if (this.props.sala_orden_asc) {
      this.OrderSearchAsc(this.props.sala_orden_key)
    }
    else {
      this.OrderSearchDes(this.props.sala_orden_key)
    }
  }

}

  render() {
//    this.props.sala_orden_key
    return (
      <View style={styles.container}>
        
            <SalaMenu  filterSearch={this.filterSearch} />
            <ScrollView>
                {this.state.NewdataSala.salas.map((valores, i) => {
                return this.crearSala(valores, i)
                })}
            </ScrollView>
 </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor: constants.COLOR_GRIS_D, 



  },
  st_menu: {
    
    flex: 1,
    

  },
  st_salas: {
    
    flex: 1,
    

  }


});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    
    dataSala: state.userReducer.dataSala,
    sala_orden_key: state.salasReducer.sala_orden_key,
    sala_orden_asc: state.salasReducer.sala_orden_asc,
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
export default connect(mapStateToProps, mapDispatchToProps)(SalasListado);