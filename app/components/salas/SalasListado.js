// Imports: Dependencies
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Listado from './Listado'
import SalaMenu from './SalasMenu'
import * as constants from '../../herramientas/Const'

// Imports: Redux Actions
import ActionCreators from '../../redux/actions';


// Screen: Counter
class SalasListado extends React.Component {
  constructor(props){
    super(props)
    this.state = {  
      dataSala: props.dataSala
    }
  }

  orderSearch=(text) => {
    
    let dsOrdernar= this.props.dataSala;
    console.log('vamos a ordenar: ' + JSON.stringify(Object.keys(dsOrdernar[0])))
    console.log(dsOrdernar.sort(((a, b) => a.id_sala - b.id_sala)));
  
  }

  filterSearch=(text) => {
    let dsBuscar= this.props.dataSala;
    const newData = dsBuscar.filter(function(item){
    const itemData = item.desc_sala.toUpperCase()
    const textData = text.toUpperCase()
    return itemData.indexOf(textData) > -1
  
    })
    this.setState({dataSala: newData })
  }

 crearSala(item){
  return( 
    
          <Listado item={item}/>
    
  )
}

  render() {

    return (
      <View style={styles.container}>
        
            <SalaMenu  filterSearch={this.filterSearch} />
            {this.orderSearch('nose')}
            <FlatList  
                numColumns={1}
                key={1}
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