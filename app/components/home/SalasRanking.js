// Imports: Dependencies
import React from 'react';
import { StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as constants from '../../herramientas/Const'
import data from '../../api/home.json'
import  RankingCard from './RankingCard'
import TextHomeSubTitulos from './TextHomeSubTitulos'



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

  crearItem(){



  

    return  this.state.dataSala.map((item, i) => {
      return (
      <View style={styles.container}>
        <View style={styles.container}>
      
      <RankingCard data={item}/>
        </View>
 

        
      </View>
      )

    })

  
}



  render() {

    return (
      <View style={styles.container}>
       
        <View style={styles.card}>   
        <TextHomeSubTitulos text={'Ranking'} />
       {this.crearItem()} 
    </View>
 </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
  },
  card: {
    flex: 1,
    padding: 2,
    backgroundColor: constants.COLOR_BLANCO


  },
  st_menu: {
    
    flex: 1,
    

  },
  st_salas: {
    
    flex: 1,
    

  },
  styCrearItem: {flexDirection: 'row', flex: 1},


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