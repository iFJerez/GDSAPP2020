



import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Imports: Redux Actions
import ActionCreators from '../redux/actions';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
} from 'react-native';
import * as constants from '../herramientas/Const'
var ImageLoad = require ('../images/gds.png')





class LoginScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {  
      dsUser: [],
      Usuario_Id: '',
      Password: '',
      Usuario_Nombre: '',
      comentario: '',   
      fadeAnim: new Animated.Value(0),
      offsetX: new Animated.Value(3),
      
    }
  }

 MoverTexto() {
  
    Animated.timing(
      this.state.offsetX,
      { toValue: -10,
        duration: 100 },
    ).start(() => {
      Animated.timing(
        this.state.offsetX,
        { toValue: 10,
          duration: 100 },
      ).start(()=> Animated.timing(
        this.state.offsetX,
        { toValue: 0,
          duration: 100 },
      ).start())
    });




}


  
async loginIn(){

  await this.MoverTexto();
  await this.props.funLoginOn(true, 'mstoneh', '45678asd876asd')
  
}   




 render(){
  let { fadeAnim } = this.state;

  

  return(
    <View style={styles.container}>      
       <View style={styles.viewimagenFondo}>  
          <View style={styles.viewimagen}>  
              <Image
              style={styles.ImageLogo}
              source={ImageLoad}
              />
            </View>
      </View>
            
      
      <View style={styles.viewLoginText}>  

         <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >




      </Animated.View>
      

 <Animated.View style={{ transform: [{translateX: this.state.offsetX}] }}>
     
     
        <View style={styles.viewinput}>  
        <View style={styles.view_bienvenido}>
          <Text style={styles.bienvenido}>Bienvenido</Text>
          <Text style={styles.bienvenido}>{this.props.usuario}</Text>
        </View>
       
        <Text style={styles.text}>Usuario</Text>
            <TextInput style = {styles.input} 
                autoCapitalize="none" 
                onSubmitEditing={() => this.PasswordInput.focus()} 
                onChangeText={(Usuario_Id) => this.setState({ Usuario_Id })}
                autoCorrect={false} 
                keyboardType='email-address' 
                returnKeyType="next" 
                placeholder='Ingrese su usuario' 
                placeholderTextColor={constants.COLOR_GRIS_H} />
            
            <Text style={styles.text}>Contraseña</Text>
            <TextInput style = {styles.input}   
                  returnKeyType="go" 
                  onChangeText={(Password) => this.setState({ Password })}
                  ref={(input)=> this.PasswordInput = input} 
                  placeholder='Ingrese su Contraseña' 
                  placeholderTextColor={constants.COLOR_GRIS_H}
                  secureTextEntry/>


        </View>

        </Animated.View>
        </View>
        <View style={styles.viewLoginBotom}>  
            <View style={styles.viewicon}>  
            <TouchableOpacity style={styles.touchGo} onPress={()=>this.loginIn()} >            
            <Text style={styles.textGo}>Ingresar</Text>
            </TouchableOpacity>
            
            </View>
    
            <View style={styles.viewVersion}>  
            <Text style={styles.text_version}>{this.state.comentario}</Text>
            <Text style={styles.text_version}> {constants.VERSION_APP} </Text>
            </View>
        </View>  
    </View>
  );
}
 
}

const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    usuario: state.authReducer.usuario,
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);






const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',  
    backgroundColor: '#FFF',


  },
  text: {
    alignSelf: 'flex-start',
    fontSize: constants.SIZE_LETRA_X_LARGE,
    color: constants.COLOR_PRIMARIO,
    paddingTop: 10
  },

  bienvenido: {
    alignSelf: 'flex-start',
    fontSize: constants.SIZE_LETRA_XXXX_LARGE,
    color: constants.COLOR_PRIMARIO
  },

  view_bienvenido: {
    paddingBottom: 50,
    alignSelf: 'flex-start',
  },
text_version: {
  color: constants.COLOR_GRIS_H
},
textGo: {
  color: constants.COLOR_BLANCO,
  fontSize: constants.SIZE_LETRA_XX_LARGE,
  padding: 10,
},

  input:{

    width: '100%',
    marginTop: 10,
    paddingBottom: 0,
    color: constants.COLOR_GRIS_J
},
viewinput: {
  width: '100%',

  alignItems: 'center',
  alignSelf: 'center',
},
viewicon: {


  backgroundColor: constants.COLOR_PRIMARIO,
  borderRadius: 100,
  alignItems: 'center'

},
viewVersion: {
padding:10,
  alignItems: 'center'

},
viewimagenFondo: {
  flex: 2,
  backgroundColor: constants.COLOR_PRIMARIO,
  flexDirection: 'row',
  alignItems: 'center',
  alignContent: 'center',
  alignSelf: 'center',
},
viewimagen: {
  flex: 1,
  alignItems: 'center',
  alignContent: 'center',
  alignSelf: 'center',

},
viewLoginText: {
  flex: 1.5,
  paddingLeft: 20,
  paddingTop: 50,

},
viewLoginBotom: {
  flex: 0.5,
  paddingHorizontal: 20,



},
ImageLogo: {
width: '50%',
height: '20%'
},
});



