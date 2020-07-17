'use strict';
import React, { PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from '../../herramientas/IconSimple'

class Camera extends PureComponent {

  state = {
    foto: null,
    flash: false
  }

  closeHandler() {
    this.props.closeHandler()
  }

  takeHandler(data) {
    this.props.takeHandler(data)
  }


  render() {
    return (
      <View style={styles.container}>
        {/* {foto} */}
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          captureAudio={false}
          type={RNCamera.Constants.Type.back}
          flashMode={this.state.flash ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off}
          // flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={{ flex: 0, position: 'absolute', bottom: 50, left: 0, right: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <View style={styles.ring}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
              {/* <Text style={{ fontSize: 14, alignItems: 'center', justifyContent: 'center' }}> SNAP </Text> */}
              {/* <Icon name='ios-camera' size={50} color='#000' style={{ fontSize: 14, alignItems: 'center', justifyContent: 'center', opacity: 1 }}/> */}
              
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ position: 'absolute', left: 20, top: 50 }}>
          <TouchableOpacity onPress={() => {
            this.setState((prevState) => {
              return { flash: !prevState.flash }
            })
          }}>
            <Icon name={this.state.flash ? 'ios-flash': 'ios-flash-off'} size={30} color='#fff'/>
            {/* <Text style={this.state.flash ? styles.FlashButtonOn : styles.FlashButtonOff}>Flash</Text> */}
          </TouchableOpacity>
        </View>
        <View style={styles.closeContainer}>
          <TouchableOpacity onPress={() => this.closeHandler()}>
            <View>
              {/* <Text style={styles.closeIcon}>X</Text> */}
              <Icon name='md-close' size={30} color='#fff'/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.takeHandler({ uri: data.uri, fecha: new Date() }) 
      // this.props.navigation.navigate('Preview', { foto: data.uri, fromCamera: true, fecha: new Date() })
      // this.setState({foto: data.uri})
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ccc',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  ring: {
    flex: 0,
    width: 90,
    height: 90,
    borderRadius: 50,
    opacity: 0.8,
    borderColor: '#fff',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    opacity: 0.6,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  FlashButtonOff: {
    color: '#fff',
    fontSize: 25,
    opacity: 0.8,
    textShadowColor: '#000',
    textShadowRadius: 4,
    textShadowOffset: { width: 0, height: 0 }

  },
  FlashButtonOn: {
    color: '#fad400',
    fontSize: 25,
    opacity: 0.8,
    textShadowColor: '#faebc0',
    textShadowRadius: 4,
    textShadowOffset: { width: 0, height: 0 }
  },
  closeContainer: {
    position: 'absolute',
    right: 20,
    top: 50
  },
  closeIcon: {
      color: '#fff',
      fontSize: 25, 
      opacity: 0.8,
      textShadowColor: '#000',
      textShadowRadius: 4,
      textShadowOffset: {width: 0, height: 0}
  },  
});

export default Camera;
