import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Imagen from './Imagegds'
import CountSalas from './CountSalas'


import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import SalasScreen from '../screens/SalasScreen'
import UsuarioScreen from '../screens/UsuarioScreen'
import TareasScreen from '../screens/TareasScreen'
import DesarrolloScreen from '../screens/DesarrolloScreen'
import SalasFotosScreen from '../screens/SalasFotosScreen'


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../redux/actions';
import {transformaFecha} from '../herramientas/Fechas'
import * as constants from '../herramientas/Const'
import Icon from 'react-native-vector-icons/AntDesign';
import NetworkScreen from '../screens/NetworkScreen'


function HomeScreen2() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function MyLogin() {
  return (
  <Stack.Navigator>
    <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
  </Stack.Navigator>
  );
}
const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
          name={transformaFecha()}
          component={HomeScreen}
          options={{headerRight: () => (<Imagen />), 
             tabBarLabel: 'Home!', headerStyle:{backgroundColor: constants.COLOR_PRIMARIO}, 
          headerTitleAlign: 'left',
          headerLeft: null,
          headerTitleStyle: {fontWeight: 'bold',
          fontSize: constants.SIZE_LETRA_LARGE,
          color: constants.COLOR_BLANCO,
          flex: 1,
          flexDirection: 'row'
          }}}
        />
    </HomeStack.Navigator>
  );
}
const TareaStack = createStackNavigator();
function TareasStackScreen() {
  return (
    <TareaStack.Navigator>
      <TareaStack.Screen
        name={transformaFecha()}
        component={TareasScreen}
        options={{headerRight: () => (<Imagen />), 
           tabBarLabel: 'Home!', headerStyle:{backgroundColor: constants.COLOR_PRIMARIO}, 
        headerTitleAlign: 'left',
        headerLeft: null,
        headerTitleStyle: {fontWeight: 'bold',
        fontSize: constants.SIZE_LETRA_LARGE,
        color: constants.COLOR_BLANCO,
        flex: 1,
        flexDirection: 'row'
        }}}
      />
    </TareaStack.Navigator>
  );
}

const SalasStack = createStackNavigator();
function SalasStackScreen() {
  return (
    <SalasStack.Navigator>
      <SalasStack.Screen
        name={transformaFecha()}
        component={SalasScreen}
        options={{ headerRight: () => (<Imagen />),  tabBarLabel: 'Salas!', headerStyle:{backgroundColor: constants.COLOR_PRIMARIO}, 
        headerTitleAlign: 'left',
        headerLeft: null,
        headerTitleStyle: {fontWeight: 'bold',
        fontSize: constants.SIZE_LETRA_LARGE,
        color: constants.COLOR_BLANCO,
        flex: 1,
        flexDirection: 'row'
        }}}
      />
    </SalasStack.Navigator>
  );
}


const UsuarioStack = createStackNavigator();
function UsuarioStackScreen() {
  return (
    <UsuarioStack.Navigator>
      <UsuarioStack.Screen
        name={transformaFecha()}
        component={UsuarioScreen}
        options={{headerRight: () => (<Imagen />),   tabBarLabel: 'Login!', headerStyle:{backgroundColor: constants.COLOR_PRIMARIO}, 
        headerTitleAlign: 'left',
        headerLeft: null,
        headerTitleStyle: {fontWeight: 'bold',
        fontSize: constants.SIZE_LETRA_LARGE,
        color: constants.COLOR_BLANCO,
        flex: 1,
        flexDirection: 'row'
        }}}
      />
    </UsuarioStack.Navigator>
  );
}

const LoginStack = createStackNavigator();
function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name={transformaFecha()}
        component={LoginScreen}
   
        options={{  headerRight: () => (<Imagen />), tabBarLabel: 'Login!', headerStyle:{backgroundColor: constants.COLOR_PRIMARIO}, 
        headerTitleAlign: 'left',
        headerTitleStyle: {fontWeight: 'bold',
        
        fontSize: constants.SIZE_LETRA_LARGE,
        color: constants.COLOR_BLANCO,
        flex: 1,
        flexDirection: 'row'
        }}}
      />
    </LoginStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

const MyTabsRedux = connect(state => ({
  value: state.authReducer.loggedIn,
  dataSala: state.userReducer.dataSala
}))(MyTabs);


function MyTabs(value, dataSala) {

  
  const cantSalas =  5 //this.props.dataSala

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Home') {
          return (
            <Icon
              name={
                focused
                  ? 'home'
                  : 'home'
              }
              size={size}
              color={color}
            />
          );
        } else if (route.name === 'Settings') {
          return (
            <Icon
              name={focused ? 'bars' : 'bars'}
              size={size}
              color={color}
            />
          );
        } else if (route.name === 'Salas') {
          return (
            <Icon
              name={focused ? 'shoppingcart' : 'shoppingcart'}
              size={size}
              color={color}
            />
          );
        
      } else if (route.name === 'Tareas') {
        return (
          <Icon
            name={focused ? 'bars' : 'bars'}
            size={size}
            color={color}
          />
        );
      } else if (route.name === 'Login') {
        return (
          <Icon
            name={focused ? 'bars' : 'bars'}
            size={size}
            color={color}
          />
        );
      } else if (route.name === 'Usuario') {
        return (
          <Icon
            name={focused ? 'user' : 'user'}
            size={size}
            color={color}
          />
        );
      }

      
      },
    })}
    tabBarOptions={{
      activeTintColor: constants.COLOR_PRIMARIO,
      inactiveTintColor: constants.COLOR_GRIS_H,
    }}
  >
    <Tab.Screen name="Home" component={HomeStackScreen} options={{ tabBarBadge: null,}} />
    <Tab.Screen name="Salas" component={SalasStackScreen} options={{ tabBarBadge: <CountSalas /> }} />
    <Tab.Screen name="Tareas" component={TareasStackScreen} options={{ tabBarBadge: null}} />
    <Tab.Screen name="Usuario" component={UsuarioStackScreen} options={{ tabBarBadge: null }} />
    
    
    
  </Tab.Navigator>
  );
}


function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function PruebaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}


const RootStack = createStackNavigator();

function RootStackStar() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Principal" component={NetworkScreen} options={{headerShown: false}} />
      <RootStack.Screen name="Login" component={MyLogin} options={{headerShown: false}} />
      <RootStack.Screen name="Secundaria" component={MyTabs} options={{headerShown: false, headerBackTitleVisible: false, headerBackTitle: ''}} /> 
      
    </RootStack.Navigator>
  );
}



 export default function App() {
  return (
    <NavigationContainer>
      <RootStackStar />
    </NavigationContainer>
  );
}



