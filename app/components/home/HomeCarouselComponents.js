// Imports: Dependencies
import React from 'react';
import { StyleSheet,View, Text, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as constants from '../../herramientas/Const'
import Carousel, { Pagination }  from 'react-native-snap-carousel';
import CardInfo from './CardInfo'



// Imports: Redux Actions
import ActionCreators from '../../redux/actions';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

// Screen: Counter
class HomeCarouselComponents extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      activeIndex:0,
      carouselItems: [
      {
          item:"Recuerdatorios",
          subItem: "Enviar Pendientes de Envio",
      },
      {
        item:"12 Tareas Programadas",
        subItem: "Relizar antes del Miercoles",
      },
      {
        item:"4 Salas Nuevas",
        subItem: "Medidas Hoy por el equipo gds",
      },
   
    ]
  }
}


_renderItem({item,index}){
  return (
    <CardInfo data={item} />
  )
}


get pagination () {
  const { carouselItems, activeIndex } = this.state;
  return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        containerStyle={{ }}
        dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 10,
            marginHorizontal: 2,
            backgroundColor: constants.COLOR_PRIMARIO
        }}
        inactiveDotStyle={{
            // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
      />
  );
}


  render() {



const {} = this.props;

    return (
      <View style={styles.container}>
  
            
  <View style={styles.card}>
  
            
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
 
        
        </View>
    )
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    flex: 1,

    borderRadius: 5,
    backgroundColor: constants.COLOR_BLANCO


  },

  styTop: {flex: 1, marginTop:80,  marginLeft: 30, 
},
  
  carouselContainer: {
    marginTop: 50
  },
  itemContainer: {
    width: ITEM_WIDTH,
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeCarouselComponents);