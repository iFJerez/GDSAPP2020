// Imports: Dependencies
import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as constants from '../../herramientas/Const'
import Icon from '../../herramientas/IconAntDesign'
import Texto from '../../herramientas/textos/TextTypePendiente'
import LinearGradient from 'react-native-linear-gradient';

// Imports: Redux Actions
import ActionCreators from '../../redux/actions';


// Screen: Counter 14932
class EnvioBoton extends React.Component {


    
  
  render() {

    const {ver_envio, funVerEnvio, objeciones} = this.props;
    const cantObjeciones = objeciones.filter(v => v.status !== 'enviado').length
   
    const button = (cantObjeciones === 0 )? null : (
      <TouchableOpacity style={styles.linearStyle} onPress={()=>{funVerEnvio(!ver_envio)}}>
      <LinearGradient colors={[constants.COLOR_SECUNDARIO, constants.COLOR_SECUNDARIO_CLARO]} style={styles.buttonAbrir}>
         <View style={{flexDirection: 'row', alignItems: 'center'}}>

                   <View style={{paddingRight: 20}}>
        <Icon name='rocket1' size={constants.ICON_SMALL} color={constants.COLOR_BLANCO}/>
        </View>


         <View style={{paddingRight: 10}}>
        <Texto text={`Tienes ${cantObjeciones} pendiente${cantObjeciones > 1 ? 's' : ''} de envio`}></Texto>
        </View>


       
       
       </View>
       </LinearGradient>
  </TouchableOpacity>
    )
   
    return (
     button
    )
  }
}

// Styles

const styles = StyleSheet.create({
  container: {
    
    bottom: 0,
    
    padding: 5,
  },
  linearStyle: {
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',},


buttonAbrir: {
  
  width:"97%",
  
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
},
  
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    objeciones: state.objecionesReducer,
    ver_envio: state.flashReducer.ver_envio,
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
export default connect(mapStateToProps, mapDispatchToProps)(EnvioBoton);







