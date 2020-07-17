const { ImagePropTypes } = require("react-native");
import React from "react";
import { TouchableOpacity, Image } from "react-native";
import IconAntDesign from "../../herramientas/IconAntDesign";
import * as constants from "../../herramientas/Const";

export default (props) => {
  let avatar = null;

  if (props.image) {
    avatar = imgAvatar = (
      <Image
        source={{uri: props.image}}
        style={{ width: 60, height: 60, borderRadius: 30, margin: 5 }}
      />
    );
  } else {
    avatar = <IconAntDesign
      name={"user"}
      size={constants.ICON_MEDIUM}
      color={constants.COLOR_PRIMARIO}
    />;
  }
  return (
    <TouchableOpacity onPress={props.handleTouch}>{avatar}</TouchableOpacity>
  );
};
