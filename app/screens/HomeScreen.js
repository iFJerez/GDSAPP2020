// Imports: Dependencies
import React from 'react';
import { SafeAreaView, StyleSheet,View, StatusBar} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LinearGradient from 'react-native-linear-gradient';
import data from '../api/home.json'
import CardIndicadores from '../components/home/CardIndicadores'
import * as constants from '../herramientas/Const'
import TextTypeHome from '../herramientas/textos/TextTypeHome'


// Imports: Redux Actions
import ActionCreators from '../redux/actions';


// Screen: Counter
class Home extends React.Component {




  render() {

const {} = this.props;

    return (
      <LinearGradient colors={['#3F93A4', '#016a7c']} style={{flex: 1, width: '100%'}}>
          <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>    
      
           <View style={styles.styTarjeta}>
              <CardIndicadores data={data} />
          </View>
          <LinearGradient colors={['#3F93A4', '#016a7c']} style={{flex: 1, width: '100%'}}>
      
          <View style={styles.styTop}>
          <TextTypeHome text={'Home'}/>
          </View>
          </LinearGradient>
          <View style={styles.styDown}>

     
            
            </View>
        
      </SafeAreaView>
      </LinearGradient>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  styTop: {flex: 1, marginTop:80,  marginLeft: 30, 
},
  styDown: {flex: 3, width: '100%',  backgroundColor: constants.COLOR_GRIS_D},
  styTarjeta: {
    position: 'absolute',
    top: 180,
    width: '90%',
    backgroundColor: constants.COLOR_BLANCO,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    padding: 10,

  }
  
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    counter: state.counterReducer.counter,
    loggedIn: state.authReducer.loggedIn,
    home_modal: state.userReducer.home_modal,
    ms_help: state.userReducer.ms_help,
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