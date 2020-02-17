// Imports: Dependencies
import React, { Component } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Listado from './Listado'
import Buscador from '../../herramientas/Buscador'
import * as constants from '../../herramientas/Const'

// Imports: Redux Actions
import ActionCreators from '../../redux/actions';

// Screen Dimensions
const { height, width } = Dimensions.get('window');

// Screen: Counter
class SalasListado extends React.Component {

  constructor(props){
    super(props)
    this.state = {  
      dataSala: props.dataSala
    }

    
  }

  filterSearch=(text) => {
    let dsBuscar= this.props.dataSala;
    const newData = dsBuscar.filter(function(item){
    const itemData = item.desc_sala.toUpperCase()
    const textData = text.toUpperCase()
    return itemData.indexOf(textData) > -1
  
    })
    
    
    //alert(JSON.stringify(newData))
    this.setState({dataSala: newData })
    
    }

 crearSala(item){

  const {vista_salas} = this.props;

    if (vista_salas){
      return( 
        <View style={styles.container}>
            <Listado item={item}/>
        </View>
      )
    }
else{
  return(
    <View style={styles.container}>
            <Listado item={item}/>

    </View>
    
  )
}
}





  render() {
const {vista_salas} = this.props;
const config1 = {
  
}

const ifOnOff = vista_salas?1:2


    return (
      <View style={styles.container}>
        <Buscador  filterSearch={this.filterSearch}/> 
        

            <FlatList  
                numColumns={ifOnOff}
                key={ifOnOff}
                data={this.state.dataSala}
                renderItem={({item}) => this.crearSala(item)}
                keyExtractor={(item, index) => '' + index}
        />   

 </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex:1,
   backgroundColor: constants.COLOR_GRIS_E, 



  },
  st_indicadores: {
    flexDirection: 'row',
    flex: 1,
    

  }


});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    
    dataSala: state.userReducer.dataSala,
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