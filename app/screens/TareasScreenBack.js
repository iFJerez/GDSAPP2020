import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

 function Titulo() {
  return (
    'titulo'
  );
}


//const Tab = createMaterialTopTabNavigator();

const TabNavigator = createMaterialTopTabNavigator(
  { // <<== this is the object routeConfigs 
    CurrentList: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Liste de la semaine',
      },
    },
    OthersList: {
      screen: SettingsScreen,
      navigationOptions: {
        title: Titulo(),
      },
    },
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#ffffff',
      inactiveBackgroundColor: '#ffffff',
      showLabel: true,
      showIcon: true,
      style: {backgroundColor: '#567', padding: 10, margin: 10, borderRadius: 10 }
    },
  },
);

let Navigation = createAppContainer(TabNavigator);

export default class CardUsuario extends Component {
  render() {

return (
  <View style={{flex: 1}}>
      <Navigation />
      
   </View>
)
}
}