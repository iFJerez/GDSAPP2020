import React, {Component} from 'react';
import { StyleSheet, View, LayoutAnimation} from 'react-native';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import * as constants from '../../herramientas/Const';
// import IconAntDesign from '../../herramientas/IconAntDesign';
import TextoBase from './EnvioTextBase';
import TextoBase2 from '../../herramientas/textos/TextoBaseSinSizeAjust';
import SwipeToDelete from '../../herramientas/ui/SwipeToDelete';
import ActionCreators from '../../redux/actions'


class EnvioDetalleCard extends Component {

  handleDelete() {
    console.info('eliminando......', this.props.data)
    this.props.funEliminarEnvio(this.props.data)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);  
  }

  render() {
    const {data} = this.props
    return (
      
      <SwipeToDelete onClose={()=>this.handleDelete(this)}>
      <View style={styles.container}>  
     
        <View style={styles.detailLine}>
        <View style={styles.variable}>
          <TextoBase style={styles.sty_text_ordinal}>{`${data.numero}. `}</TextoBase>
          
        </View>
          <View style={styles.productDetail}>
            <View style={styles.productDesc}>
              <TextoBase style={styles.sty_text_base}>
                  {data.item}
              </TextoBase>
            </View>
            <View style={styles.productEAN}>
              <TextoBase style={styles.sty_text_ean}>
                  {data.ean}
              </TextoBase>
            </View>
          </View>
     
        </View>
        <View style={styles.action}>
            <View style={styles.action2}>
                <TextoBase2 style={styles.sty_text_action} numberOfLines={3}>
                        {data.accion}
                </TextoBase2>
              </View>
          </View>
        </View>
        </SwipeToDelete>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.COLOR_BLANCO,
    borderColor: constants.COLOR_GRIS_F,
    borderWidth: 1,
    marginLeft: 3,
    marginVertical: 0,
    alignItems: 'flex-start',
    padding: 3,
    paddingLeft: 20,
    flexDirection: 'row',
    flex: 1,
    
  },
  detailLine: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 3
  },
  productDetail: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: 6
  },
  action: {
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',

    flex: 1,
    backgroundColor: constants.COLOR_GRIS_C,
    borderRadius: 10,
    margin: 2
  },
  action2: {
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: constants.COLOR_GRIS_C,
    borderRadius: 10,
    margin: 2
  },
  sty_icon: {
    paddingVertical: 15,
    alignItems: 'flex-end',
    alignContent: 'center'
  },
    productEAN: {
      paddingVertical: 2
    },
  productDesc: {
    paddingVertical: 2  
  },
  variable: {
    flexDirection: 'row',
    padding: 0,
    margin: 0,
    flex: 1
  },
  sty_text_base: {
    fontSize: constants.SIZE_LETRA_LARGE,
    textAlignVertical: "center",
    textAlign: "center",
    color: constants.COLOR_QUINTENARIO_CLARO
  },
  sty_text_ean: {
    fontSize: constants.SIZE_LETRA_MEDIUM,
    textAlignVertical: "center",
    textAlign: "center",
    color: constants.COLOR_GRIS_H
  },
  sty_text_action: {
    fontSize: constants.SIZE_LETRA_LARGE,
    textAlignVertical: "center",
    textAlign: "center",
    flexShrink: 1,
    color: constants.COLOR_SECUNDARIO_CLARO
  },
  sty_text_variable: {
    fontSize: constants.SIZE_LETRA_X_LARGE,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: 'bold',
    color: constants.COLOR_QUINTENARIO_CLARO,
  },
  sty_text_ordinal: {
    fontSize: constants.SIZE_LETRA_X_LARGE,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: 'bold',
    color: constants.COLOR_GRIS_H,
  }
});


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
export default connect(null, mapDispatchToProps)(EnvioDetalleCard);