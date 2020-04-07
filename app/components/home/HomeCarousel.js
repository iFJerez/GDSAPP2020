// Imports: Dependencies
import React from 'react';
import { SafeAreaView, StyleSheet,View, StatusBar, Text, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LinearGradient from 'react-native-linear-gradient';
import data from '../api/home.json'
import CardIndicadores from '../components/home/CardIndicadores'
import * as constants from '../herramientas/Const'
import TextTypeHome from '../herramientas/textos/TextTypeHome'
import SalaRanking from '../components/home/SalasRanking'
import Carousel, { Pagination }  from 'react-native-snap-carousel';


// Imports: Redux Actions
import ActionCreators from '../redux/actions';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

// Screen: Counter
class Home extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      activeIndex:0,
      carouselItems: [
      {
          title:"Item 1",
          text: "Text 1",
      },
      {
          title:"Item 2",
          text: "Text 2",
      },
   
    ]
  }
}


_renderItem({item,index}){
  return (
    <View style={{
        backgroundColor:'floralwhite',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25, }}>
      <Text style={{fontSize: 30}}>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>

  )
}


get pagination () {
  const { carouselItems, activeIndex } = this.state;
  return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        dotStyle={{
            width: 100,
            height: 100,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotStyle={{
            // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
  );
}


  render() {



const {} = this.props;

    return (
      <LinearGradient colors={['#3F93A4', '#016a7c']} style={{flex: 1, width: '100%'}}>
          <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>    
      
           <View style={styles.styTarjeta}>
              
    
        
          </View>
          <LinearGradient colors={['#3F93A4', '#016a7c']} style={{flex: 1, width: '100%'}}>
      
          <View style={styles.styTop}>
          <TextTypeHome text={'Home'}/>
          </View>
          </LinearGradient>
          <View style={styles.styDown}>
  
            
          <Carousel

      

                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={SLIDER_WIDTH}
                  itemWidth={ITEM_WIDTH}
                  containerCustomStyle={styles.carouselContainer}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
     
             { this.pagination}
     
            
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
    

  },
  carouselContainer: {
    marginTop: 50
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue'
  },
  itemLabel: {
    color: 'white',
    fontSize: 24
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
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