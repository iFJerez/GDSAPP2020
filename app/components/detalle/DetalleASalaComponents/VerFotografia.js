import React, {Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import * as constants from '../../../herramientas/Const'
import Icon from 'react-native-vector-icons/AntDesign';
import TextoBase from '../../../herramientas/textos/TextoBase'
import {funMessage} from '../../../herramientas/Mensaje'


const verFotografia = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {funMessage('Ver Fotografias', 'Por construir...')}}>
                <TextoBase
                    style={styles.sty_txt_foto}>
                        Ver foto  <Icon name={'camera'} size={constants.ICON_VERY_SMALL} color={'#fff'}/> 
                </TextoBase> 
            </TouchableOpacity>
        </View>
        
    )
}   

const styles = StyleSheet.create({
    container: {
      width: '94%',
      backgroundColor: constants.COLOR_PRIMARIO,
      opacity: 0.6,
      margin: 5,
      padding: 7,
      flexDirection: 'row',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    sty_txt_foto: {
        color: '#fff',
        flex: 0.2,
        fontSize: constants.SIZE_LETRA_X_LARGE,
        fontWeight: 'bold'
    }
  });

export default verFotografia



