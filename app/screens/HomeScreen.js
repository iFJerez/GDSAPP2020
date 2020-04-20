// Imports: Dependencies
import React from 'react';
import { StyleSheet,View, StatusBar, ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LinearGradient from 'react-native-linear-gradient';
import data from '../api/home.json'
import CardIndicadores from '../components/home/CardIndicadores'
import * as constants from '../herramientas/Const'

import SalaRanking from '../components/home/SalasRanking'

import HomeCarouselComponents from '../components/home/HomeCarouselComponents'
// Imports: Redux Actions
import ActionCreators from '../redux/actions';



// Screen: Counter
class Home extends React.Component {




  render() {

const {} = this.props;

    return (
      <View style={styles.container}>   
         <StatusBar barStyle="light-content" />
 
       <View style={styles.styTarjeta}>
      <LinearGradient colors={['#3F93A4', '#016a7c']} style={{flex: 1, width: '100%'}}>
    
      </LinearGradient>
      </View>
  
       
      <ScrollView style={{backgroundColor: 'transparent'}}>
      

          <View style={styles.styDown}>
       
                

                <HomeCarouselComponents />

                
                  <CardIndicadores data={data} />
                    <SalaRanking />
                
               
  
                
         </View>
        </ScrollView>
     
      </View>
 
    )
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.COLOR_GRIS_D
  },

  styTop: {flex: 1, marginTop:80,  marginLeft: 30, 
},
  styDown: {flex: 1},
  styTarjeta: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 250,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
    

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