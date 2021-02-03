// Imports: Dependencies
import React from 'react'
import {TouchableOpacity, StyleSheet, View, Text, TextInput} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Modal from "react-native-modal"
import Icon from '../herramientas/Icon'
import * as constants from '../herramientas/Const'
import {funMessage} from '../herramientas/Mensaje'

// Imports: Redux Actions
import ActionCreators from '../redux/actions'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from "react-native-linear-gradient";

class ModalScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      info: ["Conectando..."],
      scrollOffset: 0, scrollViewRef: 0 };
    this.scrollViewRef = React.createRef();
    
  }

async componentDidMount(){


  console.log("INICIO NEWTWORK")
  const {funNetwork, id_cliente, token, status} = this.props;
  await funNetwork(true) 
  const {funGetData, funGetCadena, funGetHome} = this.props;


  await   new Promise((resolve) => {
        resolve(funGetData(token))
        this.state.info.push("...Descargado Salas")
    }).then(res=>{
      })

  await     new Promise((resolve) => {
    resolve(funGetCadena())
   
    }).then(res=>{
      this.state.info.push("...Descargado Cadenas")
      
      })

  await new Promise((resolve) => {
        resolve(funGetHome(id_cliente, token))
        this.state.info.push("...Descargado Home")
    }).then(res=>{
      console.log('Descargando Home: id_cliente:' + id_cliente +  ' token : '  + token)
      
      
      })
await this.state.info.push("...")
setTimeout(() => funNetwork(false), 3000)
setTimeout(() => funMessage("Conectado", "Datos refrescados"), 4000)
setTimeout(() => this.props.navigation.navigate('Settings'), 4000)

      
}

informacion(){

  return  this.state.info.map((fila, i) => {
      return(
        <View  key={'view' + i} style={styles.container}>
          <Text style={styles.text} key={i}>{fila}</Text>
      </View>
      )
    })

  }

  render() {
    const {funNetwork, network, status} = this.props;
    

    

    return (

      <View style={styles.scrollableModal}>
      
      <LinearGradient style={{flex:1}} 
      colors={[constants.COLOR_PRIMARIO_CLARO, constants.COLOR_PRIMARIO_OSCURO, constants.COLOR_PRIMARIO_OSCURO,constants.COLOR_PRIMARIO_OSCURO]}
      >
             
      
        <ScrollView
          onScroll={this.handleOnScroll}
          scrollEventThrottle={10}>
          <View style={styles.scrollableModalContent1}>
   
          <Text  style={styles.titulo}>
            Conectando...

          </Text>
          
          {this.informacion()}
          
          

          </View>
        </ScrollView>
        </LinearGradient>
      </View>

    )
  }
}

// Styles

const styles = StyleSheet.create({
  container: {    backgroundColor: constants.COLOR_BLANCO,
    borderColor: constants.COLOR_GRIS_F,
    borderWidth: 1,
    marginLeft: 3,
    marginVertical: 0,
    alignItems: 'flex-start',
    padding: 3,
    paddingLeft: 20,
    flexDirection: 'row',
    flex: 1,},
  text: {
    color: constants.COLOR_PRIMARIO,
  },
  titulo: {
    color: constants.COLOR_PRIMARIO,
    fontSize: 50,

  },

  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    flex: 1,
    backgroundColor: constants.COLOR_GRIS_F,
  },
  scrollableModalContent1: {
    flex: 1,
    paddingVertical: 30,
    
  },
  scrollableModalText1: {
    fontSize: 20,
    color: 'white',
  },
  scrollableModalContent2: {
    height: 300,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 20,
    color: 'white',
  },
  view_close: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    network: state.authReducer.network,
    status: state.userReducer.status,
    token: state.authReducer.token,
    id_cliente: state.authReducer.id_cliente,
    
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
export default connect(mapStateToProps, mapDispatchToProps)(ModalScreen);







