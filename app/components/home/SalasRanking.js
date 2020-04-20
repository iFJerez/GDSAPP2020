// Imports: Dependencies
import React from 'react';
import { FlatList, StyleSheet, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Listado from './SalaRankingListado'
import * as constants from '../../herramientas/Const'
import data from '../../api/home.json'

// Imports: Redux Actions
import ActionCreators from '../../redux/actions';

// Screen: Counter
class SalasListado extends React.Component {
  constructor(props){
    super(props)
    this.state = {  
      dataSala: data[0].ranking
    }
  }

 crearSala(item){
  return( 
    <View style={styles.container}>
          <Listado item={item}/>
    </View>
  )
}

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.card}>   

            <ScrollView horizontal={true} style={{ backgroundColor: '#567'}}>
                
        <FlatList  
            numColumns={1}
            key={1}
            data={this.state.dataSala}
            renderItem={({item}) => this.crearSala(item)}
            keyExtractor={(item, index) => '' + index}
         /> 


          </ScrollView>  
    </View>
 </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    flex: 1,
    borderRadius: 5,
    padding: 2,
    backgroundColor: constants.COLOR_BLANCO


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