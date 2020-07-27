import React, { Component } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import TextType1 from "../../herramientas/textos/TextType1";
import TextType2 from "../../herramientas/textos/TextType2";
import * as constants from "../../herramientas/Const";
import Avatar from "./Avatar";
import imagePicker from "../../herramientas/imagepicker/imagePicker";

export default class CardUsuario extends Component {
  state = {
    avatar: null,
  };

  changeAvatar = async () => {
    try {
      const uri = await imagePicker();
      this.setState({ avatar: uri });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.sty_texto}>
            <View style={styles.st_indicadores_valor}>
              <Avatar
                image={this.state.avatar}
                handleTouch={() => this.changeAvatar()}
              />
            </View>
            <View style={styles.st_indicadores_valor}>
              <TextType1 text={"Kenny Bell"} />
            </View>
            <View style={styles.st_indicadores_texto}>
              <TextType2 text={"Informacion"} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  card: {
    backgroundColor: constants.COLOR_BLANCO,
    borderColor: constants.COLOR_GRIS_F,
    borderWidth: 1,
    marginHorizontal: 8,
    marginVertical: 3,
    borderRadius: 20,
    padding: 5,
    flexDirection: "row",
    flex: 0,
  },
  sty_texto: { flex: 1, alignItems: "flex-start", paddingHorizontal: 10 },
  st_indicadores_progres: { marginHorizontal: 10 },
  st_indicadores_texto: {},
  st_indicadores_valor: {},
});
