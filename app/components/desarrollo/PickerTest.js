import React, { Component } from "react";
import { TouchableOpacity, Text, View, Image} from "react-native";
import ImagePicker from "react-native-image-picker";

export default class ImagePickerTest extends Component {

    state = {
        avatarSource: null
    }
    
  // More info on all the options is below in the API Reference... just some common use cases shown here
  options = {
    title: "Ingrese su foto de perfil",
    cameraType: 'front',
    mediaType: 'photo',
    quality: 0.1,
    noData: false,
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: "images",
      waitUntilSaved: true
    },
  };

  touchHandler() {
    ImagePicker.showImagePicker(this.options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  render() {
    let imgAvatar = null
    console.log('TEST:',this.state.avatarSource)
    if (this.state.avatarSource) {
        imgAvatar = <Image source={this.state.avatarSource} style={{width: 150, height:150, borderRadius: 150, margin: 30}}/> 
    }

    return (
      <View>
        {imgAvatar}
        <TouchableOpacity onPress={() => this.touchHandler()}>
          <Text>Click Aqui</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
