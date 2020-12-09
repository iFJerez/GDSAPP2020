// Imports: Dependencies
import React from 'react';
import { StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as constants from '../../herramientas/Const'
import  RankingCard from './RankingCard'
import TextHomeSubTitulos from './TextHomeSubTitulos'



// Imports: Redux Actions
import ActionCreators from '../../redux/actions';

// Screen: Counter
class SalasListado extends React.Component {
  constructor(props){
    super(props)
    this.state = {  
      
    }
  }

  crearItem(){


try {

  return  this.props.dataHome.rankings.map((item, i) => {
    return (
    <View key={"crearItem" + i} style={styles.container}>
      <View style={styles.container}>
    
    <RankingCard data={item}/>
      </View>


      
    </View>
    )

  })
  
} catch (error) {
  
}
  



  
}



  render() {

    return (
      <View style={styles.container}>
       <TextHomeSubTitulos text={'Ranking'} />
        <View style={styles.card}>   
        
       {this.crearItem()} 
    </View>
 </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 3,
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
    
    dataHome: state.userReducer.dataHome,
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