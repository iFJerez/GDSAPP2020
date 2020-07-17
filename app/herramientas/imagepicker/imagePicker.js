import ImagePicker from "react-native-image-picker";

export default () => {
  const options = {
    title: "Ingrese su foto de perfil",
    cameraType: "front",
    mediaType: "photo",
    quality: 0.1,
    noData: false,
    storageOptions: {
      skipBackup: true,
      path: "images",
      waitUntilSaved: true,
    },
  };

  const imagePickerPromise = (resolve, reject) => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        return resolve(null);
      } else if (response.error) {
        return reject(response.error);
      } else {
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        return resolve('data:image/jpeg;base64,' + response.data);
      }
    });
  };

  return new Promise(imagePickerPromise)
};
