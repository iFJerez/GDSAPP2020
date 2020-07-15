// Imports: Dependencies
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Imports: Redux Actions
import ActionCreators from '../redux/actions';
import RNFS from 'react-native-fs';


const personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];


class DesarrolloScreen extends React.Component {



  funDesarrollo(){

    const totalJediScore = personnel
  .filter(person => person.isForceUser)
  .map(jedi => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);
    console.log(totalJediScore)



    const objecionesReduced = personnel
    .filter(person => person.isForceUser)
    .map(jedi => jedi.pilotingScore + jedi.shootingScore)
    .reduce((acc, score) => acc + score, 0);

console.log(objecionesReduced)

  }

  componentDidMount() {
    // get a list of files and directories in the main bundle
    // RNFS.mkdir(`${RNFS.DocumentDirectoryPath}/photos`)
    //   .then(() => {
    //     RNFS.readDir(RNFS.DocumentDirectoryPath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
    //       .then((result) => {
    //         console.log('GOT RESULT', result);
    //       })
    //   }) 
    RNFS.exists(`${RNFS.DocumentDirectoryPath}/photos`)
    .then((result) => {
      if(!result) {
        return RNFS.mkdir(`${RNFS.DocumentDirectoryPath}/photos`)
      }
    }) 
    .then(() => RNFS.readDir(RNFS.DocumentDirectoryPath))
    .then((result) => console.log(result))
  }

  componentDidUpdate() {
    // get a list of files and directories in the main bundle
    RNFS.exists(`${RNFS.DocumentDirectoryPath}/photos`)
      .then((result) => {
        console.log(result)
      }) 
  }


  
  
  render() {

    const {numero, funIncrementar, funDecrementar } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView >
        <Text>Hola Desarrollo</Text>
        {this.funDesarrollo()}


        
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







