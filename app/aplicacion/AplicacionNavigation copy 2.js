// Imports: Dependencies


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import IconApp from '../herramientas/IconTabNav'
import * as constants from '../herramientas/Const'
// SCREEN
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import SalasScreen from '../screens/SalasScreen'
import UsuarioScreen from '../screens/UsuarioScreen'
import TareasScreen from '../screens/TareasScreen'
import DesarrolloScreen from '../screens/DesarrolloScreen'
import SalasFotosScreen from '../screens/SalasFotosScreen'


import Envio from '../components/pendientesEnvio/Envio'
import {funFecha} from '../herramientas/Fechas'
import {View} from 'react-native'
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// Imports: Redux Actions
import ActionCreators from '../redux/actions';


const LoginStack = createStackNavigator(

  {
     Login: {
       screen: LoginScreen,
       navigationOptions: () => ({
         title: 'Login'
       })
     },
   },
   {
     initialRouteName: 'Login',
     defaultNavigationOptions: {
       headerStyle: {
         backgroundColor: constants.COLOR_PRIMARIO_OSCURO,
       },
       headerTintColor: constants.COLOR_BLANCO,
   
       headerBackTitle: ' ',
       headerTitleStyle: {
         fontWeight: 'bold',
         fontSize: constants.SIZE_LETRA_XXX_LARGE,
         textAlign:"left", 
         flex:1,
         
       },
     },
   }
 );

const DesarrolloStack = createStackNavigator(

  {
     Desarrollo: {
       screen: DesarrolloScreen,
       navigationOptions: () => ({
         title: 'Desarrollo'
       })
     },
   },
   {
     initialRouteName: 'Desarrollo',
     defaultNavigationOptions: {
       headerStyle: {
         backgroundColor: constants.COLOR_PRIMARIO_OSCURO,
       },
       headerTintColor: constants.COLOR_BLANCO,
   
       headerBackTitle: ' ',
       headerTitleStyle: {
         fontWeight: 'bold',
         fontSize: constants.SIZE_LETRA_XXX_LARGE,
         textAlign:"left", 
         flex:1,
         
       },
     },
   }
 );


const SalasStack = createStackNavigator(
  {
    Salas: {
      screen: SalasScreen,
      navigationOptions: () => ({
        title: 'Salas'
      })
    },
    SalasFotos: {
      screen: SalasFotosScreen,
      navigationOptions: () => ({
        title: 'Salas Fotos'
      })
    },
  },



  
  {
    initialRouteName: 'Salas',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: constants.COLOR_PRIMARIO_OSCURO,
      },
      headerTintColor: constants.COLOR_BLANCO,
  
      headerBackTitle: ' ',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: constants.SIZE_LETRA_XXXX_LARGE,
        textAlign:"left", 
        flex:1,
      },
    },
  }
);


const HomeStack = createStackNavigator(

 {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: funFecha()
      })
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: constants.COLOR_PRIMARIO_OSCURO,
      },
      headerTintColor: constants.COLOR_BLANCO,
  
      headerBackTitle: ' ',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: constants.SIZE_LETRA_MEDIUM,
        textAlign:"left", 
        flex:1,
        
      },
    },
  }
);

const UsuarioStack = createStackNavigator(

  {
     Usuario: {
       screen: UsuarioScreen,
     },
   },

 );





const TareasStack = createStackNavigator(
  {
    Tareas: {
      screen: TareasScreen,
      navigationOptions: () => ({
        title: 'Tareas'
      })
    },
  },
  {
    initialRouteName: 'Tareas',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: constants.COLOR_PRIMARIO_OSCURO,
      },
      headerTintColor: constants.COLOR_BLANCO,
  
      headerBackTitle: ' ',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: constants.SIZE_LETRA_X_LARGE,
        textAlign:"left", 
        flex:1,
        
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
        Home: HomeStack,
        Salas: SalasStack,
        Tareas: TareasStack,
        Usuario: UsuarioScreen,
        Desarrollo: DesarrolloStack,
         
      },
    
 
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = IconApp;
            let iconName;
            if (routeName === 'Home') {
              iconName = `home`;
              IconComponent = HomeIcon(this.props.counter);
            } else if (routeName === 'Tareas') {
              iconName = `bars`;
              IconComponent = SalasIcon(this.props.duo_new);
            } else if (routeName === 'Desarrollo') {
              iconName = `clockcircleo`;
              IconComponent = SalasIcon(this.props.duo_new);
            } else if (routeName === 'Salas') {
              iconName = `shoppingcart`;
              IconComponent = UltimaIcon(this.props.salas_new);
            }else if (routeName === 'Usuario') {
              iconName = `user`;
              IconComponent = UltimaIcon(this.props.salas_new);
            }
    
            return (
            
                  <IconComponent name={iconName} size={25} color={tintColor} />
              
            
            )
          },
        }),
        tabBarOptions: {
          activeTintColor: constants.COLOR_PRIMARIO,
          inactiveTintColor: constants.COLOR_GRIS,
          
          style: {
            backgroundColor: constants.COLOR_PRIMARIO_OSCURO,
            
            
  
        },
        },

      }
    )

    let Navigation = createAppContainer(TabNavigator);


    return   <Navigation />


  }
}


export const Root = SwitchNavigator({
  Login: {
    screen: Login,
  }, 
  Tabs: {
    screen: Tabs,
  }
}, 

{
  mode: 'card',
  headerMode: 'none',
}
 );

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


