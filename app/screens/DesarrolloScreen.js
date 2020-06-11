// Imports: Dependencies
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Imports: Redux Actions
import ActionCreators from '../redux/actions';
//Ciomponents
import PrimerComponets from '../components/desarrollo/PrimerComponents'
import SegundoComponents from '../components/desarrollo/SegundoComponents'
import CardPrincipal from '../components/desarrollo/CardPrincipal'
import salasTest from '../api/salasTest.json'


// Screen: Counter 14932
class DesarrolloScreen extends React.Component {


  funSalas(){
    var salasActivas = []

    salasTest.salas.map((fila, i) => {
      salasActivas.push(fila.id_sala)
    })
    console.log(salasActivas)
    let valor = 0
    let nombreSala = 'sala' + valor 
    
    salasActivas.map((valor, i)=>{
      
      nombreSala = 'sala' + valor 
      console.log(salasTest[nombreSala])
    })

}
funSalas2(){

  salasTest.salas.map((fila, i) => {
    console.log(fila)
  })
}

 fun_sum(...numbers) {
   function findMaxValueIn ( ...numbers ) {
    return Math.max.apply( Math, numbers );
};

const values = [ 20, 8, 10, 30, 55 ];
var algo = [values[3], ...remaining] 
console.info( algo); //40
};

  
  render() {
    const {numero, funIncrementar, funDecrementar } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView >
        <Text>Hola Desarrollo</Text>
        <Text>{this.fun_sum(1,4)}</Text>


        
        </ScrollView>
    </View>
    )
  }
}

// Styles

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
 
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    numero: state.desarrolloReducer.numero,
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
export default connect(mapStateToProps, mapDispatchToProps)(DesarrolloScreen);







