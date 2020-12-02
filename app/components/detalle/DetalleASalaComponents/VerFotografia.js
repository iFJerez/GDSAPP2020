import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import * as constants from '../../../herramientas/Const'
import Icon from 'react-native-vector-icons/AntDesign';
import TextoBase from '../../../herramientas/textos/TextoBase'
import {funMessage} from '../../../herramientas/Mensaje'


const verFotografia = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {funMessage('Ver Fotografias', 'Por construir...')}}>
        <View style={styles.container}>
            
            <View style={styles.boton}>
                
                    <TextoBase
                        style={styles.sty_txt_foto}>
                            Ver foto  <Icon name={'camera'} size={constants.ICON_VERY_SMALL} color={'#fff'}/> 
                    </TextoBase> 
            </View>
    
        </View>
        </TouchableOpacity>
        
    )
}   

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    boton: {
        flex: 1,
        opacity: 0.6,
        marginTop: 5,
        marginHorizontal: 15,
        padding: 3,
        backgroundColor: constants.COLOR_PRIMARIO,
        borderRadius: 5,
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
      },
    sty_txt_foto: {
        color: constants.COLOR_BLANCO,
        flex: 1,
        fontSize: constants.SIZE_LETRA_X_LARGE,
        fontWeight: 'bold'
    }
  });

export default verFotografia



