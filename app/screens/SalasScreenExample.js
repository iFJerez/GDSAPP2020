// Imports: Dependencies
import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExampleComp from '../components/ejemplo/EjemploComponente'
import ComponenteGrados from '../components/ejemplo/EjemploGradosComponent'
import data from '../api/EjemploJSON.json'




// Imports: Redux Actions
import ActionCreators from '../redux/actions';

// Screen: Counter
class Home extends React.Component {

  componentDidMount(){

  

  }

funRecorre(){

try {
  
  const datos = data.map((fila, i) => {
   return fila.data.map((subfila,i) =>{
    return(

      <ExampleComp titulo={subfila.arbol} grados={'99000º'} />

    )

    })

  })

  return(datos)
} catch (error) {
  alert(error)
  
}



}

  render() {



    return (
      <View style={styles.container}>

        {this.funRecorre()}

        <ComponenteGrados grados={'29'} diferencia={'-3'}/>
        
        <ExampleComp titulo={'Arbol de la Felicidad'} grados={'99000º'} />
      
 

      </View>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  styleBoton: {
    backgroundColor: '#567',

  },
styleText: {
  color: '#FFF',
  padding: 5,
}

  
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    
    vista_salas: state.userReducer.vista_salas,
    
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);