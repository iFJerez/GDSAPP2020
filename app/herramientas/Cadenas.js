// Imports: Dependencies
import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as constants from "../herramientas/Const";
import ActionCreators from '../redux/actions';


// Screen: Counter
class Cadenas extends Component {
  render() {
  const { dataCadena, cadena } = this.props;
  //console.log(dataCadena[cadena].uri )
    try {
      return (
        <View style={styles.sty_image}>
          <Image
            style={styles.st_icono}
            source={{ uri: dataCadena[cadena].uri }}
          />
        </View>
      );
    } catch (error) {
      return (
        <View style={styles.sty_image}>
          <Icon
            name={"store"}
            color={constants.COLOR_GRIS_G}
            size={50}
            style={styles.st_icono}
          />
        </View>
      );
    }
  }
}

// Styles
const styles = StyleSheet.create({
  sty_image: { width: 50, height: 50, padding: 2 },
  st_icono: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    
    dataCadena: state.userReducer.dataCadena,
    
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
export default connect(mapStateToProps, mapDispatchToProps)(Cadenas);


