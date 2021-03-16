



import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Imports: Redux Actions
import ActionCreators from '../redux/actions';

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import * as constants from '../herramientas/Const'
const ImageLoad = require ('../images/gds_v_blanco.png')
import LinearGradient from "react-native-linear-gradient";




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

  componentDidUpdate(){
    this.Validar()
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

 Validar() {

  const {loggedIn} = this.props;


   
  if(loggedIn)
  {  
    return( this.props.navigation.navigate('Principal'))
  }else{
    return (null) 
  }
  
}



  
async loginIn(){  
  await this.props.funGetLogin(this.state.Usuario_Id, this.state.Password)
  if(!this.props.loggedIn){
  await setTimeout(() =>  this.MoverTexto(), 1000)
 
  }
 
  
}   




 render(){
  let { fadeAnim } = this.state;

  

  return(

    <LinearGradient 
          style={styles.container}
          colors={[constants.COLOR_PRIMARIO_CLARO, constants.COLOR_PRIMARIO_OSCURO, constants.COLOR_PRIMARIO_OSCURO,constants.COLOR_PRIMARIO_OSCURO]}>
    

    <ScrollView contentContainerStyle={{flex:1}} >

    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    enabled
    keyboardVerticalOffset={10}
>
  
       
      
       <View style={styles.viewimagenFondo}>  
       <View style={styles.viewimagen}>  
        
              <Image
              style={styles.st_icono}
              source={ImageLoad}
              />
              
   
            </View>
            
      </View>
      


                    

              <View style={styles.viewCard}>  
              

                              <Animated.View style={{...this.props.style,opacity: fadeAnim,  }} >
                              </Animated.View>
                              <Animated.View style={{ transform: [{translateX: this.state.offsetX}], flex: 1 }}>
                              <View style={styles.viewinput}>  
                                          <View style={styles.viewBienvenidot}>
                                             <View style={styles.viewBienvenidoIntro}>
                                                <Text style={styles.bienvenido}>Bienvenido</Text>
                                                <Text style={styles.bienvenido}>{this.props.usuario}</Text>
                                             </View>
                                          </View>
                                      
                                      <View style={styles.viewBienvenidot}>
                                             <View style={styles.viewBienvenidoIntro}>
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
                                             </View>
                                          </View>
                                      
                                      



                                      <View style={styles.viewBienvenidot}>
                                             <View style={styles.viewBienvenidoIntro}>
                                             <Text style={styles.text}>Contraseña</Text>
                                             <TextInput style = {styles.input}   
                                                      returnKeyType="go" 
                                                      onChangeText={(Password) => this.setState({ Password })}
                                                      ref={(input)=> this.PasswordInput = input} 
                                                      placeholder='Ingrese su Contraseña' 
                                                      placeholderTextColor={constants.COLOR_GRIS_H}
                                                      secureTextEntry/>
                                             </View>
                                          </View>


                             


                                </View>

                            

                                </Animated.View>
                          
                  


                  <TouchableOpacity style={styles.touchGo} onPress={()=>this.loginIn()} >            
                            <Text style={styles.textGo}>Ingresar</Text>
                        </TouchableOpacity>


                  <View style={styles.viewBotom}>  
                      <View style={styles.viewVersion}>  
                          <Text style={styles.text_version}>{this.state.comentario}</Text>
                          <Text style={styles.text_version}> powered by gds - {constants.VERSION_APP} </Text>
                          
                      </View>
         
        </View> 
        </View>

       </KeyboardAvoidingView>
       </ScrollView>
        </LinearGradient>




  );
}
 
}

const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    usuario: state.authReducer.usuario,
    loggedIn: state.authReducer.loggedIn,
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
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);






const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  scroll_view: {
    flex: 1 
  },
  keyboard: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
 },
  viewCard: {
    backgroundColor: constants.COLOR_BLANCO,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  st_icono: {
    width: "50%",
    height: "50%",
    resizeMode: "center",
    alignItems: "center",
  },
  text: {
    alignSelf: 'flex-start',
    fontSize: constants.SIZE_LETRA_X_LARGE,
    color: constants.COLOR_PRIMARIO,
    
    
  },
  touchGo: {
    backgroundColor: constants.COLOR_PRIMARIO,
    marginHorizontal: 20,
    alignItems: 'center',
    borderRadius: 50,
    
    


},

  bienvenido: {
    alignSelf: 'flex-start',
    fontSize: constants.SIZE_LETRA_XXXX_LARGE,
    color: constants.COLOR_PRIMARIO
  },

  view_bienvenido: {
    flex: 1,
    alignContent: 'center',
    
    
  },
text_version: {
  color: constants.COLOR_GRIS_H,
  alignItems: "center",
},
textGo: {
  
  
  color: constants.COLOR_BLANCO,
  fontSize: constants.SIZE_LETRA_XX_LARGE,
  fontWeight: 'bold',
  padding: 10,
},

  input:{
    flex: 1,
    fontSize: constants.SIZE_LETRA_X_LARGE,
    color: constants.COLOR_GRIS_J
},
viewinput: {
  flex: 2,
  

},
viewicon: {
    flex: 1,
    flexDirection: 'row',
  backgroundColor: constants.COLOR_PRIMARIO,
  borderRadius: 50,

  

},
viewVersion: {
  alignItems: 'center',
  alignContent: 'center',
  alignSelf: 'center',



},
viewimagenFondo: {
  flex: 1,
  
  flexDirection: 'row',
  alignItems: 'center',
  alignContent: 'center',
  alignSelf: 'center',
  
  
},
view_bienvenido_container: {
  backgroundColor: 'blue',
flex: 1,
flexDirection: 'row',
paddingLeft: 20,
alignItems: 'center',
alignContent: 'center',
alignSelf: 'center',
borderBottomColor: constants.COLOR_GRIS_E, borderBottomWidth: 1
  
  
  },
viewimagen: {
  width: '100%',

  alignItems: 'center',
  alignContent: 'center',
  alignSelf: 'center',

},
viewLoginContainer: {
  flexDirection: 'row',
  alignSelf: 'flex-start',
  
  flex: 1,

},
viewLoginText: {
  
  flexDirection: 'row',
  flex: 1,


},
viewBienvenidot: {
  
  flexDirection: 'row',
  flex: 1,
alignItems: 'center',
alignContent: 'center',
alignSelf: 'center',
  


},
viewBienvenidoIntro: {
paddingLeft: 20,
flex: 1,

  


},
viewLoginBotom: {
  
  flex: 0.4,
  alignItems: 'center',
alignContent: 'center',
alignSelf: 'center',
flexDirection: 'row',




},
viewIntroLoginBotom: {
  
  
  flex: 1,




},




viewBotom: {
  flex: 0.3,
  paddingHorizontal: 20,
  alignItems: 'center',
  alignContent: 'center',
  alignSelf: 'center',
},
v_text: {flex: 0.5,   alignSelf: 'flex-start',},
v_input: {flex: 0.5},


});



