// Imports: Dependencies


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import IconApp from '../herramientas/Icon'
import colores from '../herramientas/Colors'
import HomeScreen from '../screens/HomeScreen'
import SalasScreen from '../screens/SalasScreen'
import Settingscreen from '../screens/Settingscreen'
import SalaResumen from '../screens/SalasResumen'
import ModalScreen from '../screens/ModalScreen'

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// Imports: Redux Actions
import ActionCreators from '../redux/actions';


const SalasStack = createStackNavigator(
  {
    Salas: {
      screen: SalasScreen,
      navigationOptions: () => ({
        title: 'Salas'
      })
    },
    SalaResumen: {
      screen: SalaResumen,
      navigationOptions: () => ({
        title: 'Sala Resumen'
      })
    },
  },
  {
    initialRouteName: 'Salas',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
  
      headerBackTitle: ' ',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);



const HomeIcon = (valor) => props => {
  return <IconApp {...props} numero={valor} />;
};
const SalasIcon = (valor) => props => {
  return <IconApp {...props} numero={valor} />;
};
const UltimaIcon = (valor) => props => {
  return <IconApp {...props} numero={valor} />;
};


class Home extends React.Component {


  render() {

    let TabNavigator =  createBottomTabNavigator(
      {
        Home: HomeScreen,
        Salas: SalasStack,
        Settings: Settingscreen
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = IconApp;
            let iconName;
            if (routeName === 'Home') {
              iconName = `ios-home`;
              IconComponent = HomeIcon(this.props.counter);
            } else if (routeName === 'Settings') {
              iconName = `ios-square`;
              IconComponent = SalasIcon(this.props.duo_new);
            } else if (routeName === 'Salas') {
              iconName = `ios-cart`;
              IconComponent = UltimaIcon(this.props.salas_new);
            }
    
            return <IconComponent name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: colores.COLOR_PRIMARIO,
          inactiveTintColor: 'gray',
        },
      }
    )

    let Navigation = createAppContainer(TabNavigator);


    return (
   <Navigation />
    )
  }
}



// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    counter: state.counterReducer.counter,
    loggedIn: state.authReducer.loggedIn,

    home_new: state.userReducer.home_new,
    duo_new: state.userReducer.duo_new,
    salas_new: state.userReducer.salas_new,
    
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


