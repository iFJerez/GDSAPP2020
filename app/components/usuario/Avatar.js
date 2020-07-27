const { ImagePropTypes } = require("react-native");
import React from "react";
import { TouchableOpacity, Image, View, StyleSheet } from "react-native";
import IconAntDesign from "../../herramientas/IconAntDesign";
import Ionicons from "react-native-vector-icons/AntDesign";
import * as constants from "../../herramientas/Const";

export default (props) => {
  let avatar = null;

  if (props.image) {
    avatar = imgAvatar = (
      <Image
        source={{ uri: props.image }}
        style={{ width: 66, height: 66, borderRadius: 33, margin: 2, borderWidth: 3, borderColor: '#ddd' }}
      />
    );
  } else {
    avatar = (
      <IconAntDesign
        name={"user"}
        size={60}
        color={constants.COLOR_PRIMARIO}
      />
    );
  }
  return (
    <TouchableOpacity onPress={props.handleTouch}>
      <View>
        <View style={styles.iconContainer}>
          <Ionicons
            name={"camera"}
            size={15}
            color={"#aaa"}
            style={styles.icon}
          />
        </View>
        {avatar}
      </View>
    </TouchableOpacity>
  );
};

// Styles

const styles = StyleSheet.create({
  iconContainer: {
    zIndex: 100,
    position: "absolute",
    width: 20,
    height: 20,
    right: 2,
    padding: 2,
    backgroundColor: constants.COLOR_GRIS_F,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.15,
    shadowRadius: 3,
    bottom: 4,
    borderRadius: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    zIndex: 100,
    position: "absolute",
    flex: 1,
  },
  imageStyle: { 
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 5
  },
});
