
import Geolocation from '@react-native-community/geolocation';



import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert
} from 'react-native';





class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      
      latitude:  -33.432348,
      longitude: -70.759738,
    };
  }

  
  componentDidMount() {
    const locationConfig = {skipPermissionRequests:false,authorizationLevel:"whenInUse"}
    Geolocation.setRNConfiguration(locationConfig);

    Geolocation.getCurrentPosition(
      position => {
        const initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    this.watchID = Geolocation.watchPosition(position => {
      const lastPosition = JSON.stringify(position);
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      this.setState({lastPosition: lastPosition, latitude: latitude, longitude: longitude});
    });
  }

  render() {

    return (
      <View  style={styles.maps}>
          <Text style={styles.title}>Initial position: {JSON.stringify(this.state.position)} </Text>
          <Text style={styles.title}>Initial latitude: {this.state.latitude} </Text>
          <Text style={styles.title}>Initial longitude: {this.state.longitude} </Text>
  <Text>
    <Text style={styles.title}>Current position: </Text>
    {this.state.lastPosition}
  </Text>
  </View>
    );
  }
}


const styles = StyleSheet.create({
    conatainer: {
    backgroundColor: '#567',
  },
  maps: {
    flex: 1,
  },
});

export default Maps;
