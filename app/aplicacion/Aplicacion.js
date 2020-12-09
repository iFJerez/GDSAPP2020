import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {View} from 'react-native'
import AplicacionNavigation from './AplicacionNavigation'
import ModalScreen from '../screens/ModalScreen'
import HelpScreen from '../screens/HelpScreen'
import EnvioScreen from '../screens/EnvioScreen'
// Imports: Redux Actions
import ActionCreators from '../redux/actions';
import { funGetHome } from '../redux/actions/userActions';


class Applicacion extends React.Component {

  constructor(props){
    super(props)
    this.state = {  
      dato: 'algo'
    }
  }

    
 

   async componentDidMount(){
    console.log('Home: Aplicacion')
    
    const {funGetData, funGetCadena, funGetHome} = this.props;
       new Promise((resolve, reject) => {
          resolve(funGetData(this.props.token))
          
      }).then(res=>{
        console.log('Aplicacion:Inicio')
        this.setState({dato: 'recibe'}
        )})

         new Promise((resolve, reject) => {
          resolve(funGetCadena())
          
      }).then(res=>{
        console.log('Descargando Cadenas')
        })

        new Promise((resolve, reject) => {
          resolve(funGetHome(this.props.token, this.props.id_cliente))
          
      }).then(res=>{
        console.log('Descargando Home')
        })



   }
  
  render() {
    return (

      <View style={{flex: 1}}>
                
        <AplicacionNavigation />
        <ModalScreen />
        <HelpScreen />
        <EnvioScreen />

  

        
     </View>
    )
  }
}



// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    
    isRefresh: state.userReducer.isRefresh,
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
export default connect(mapStateToProps, mapDispatchToProps)(Applicacion);


