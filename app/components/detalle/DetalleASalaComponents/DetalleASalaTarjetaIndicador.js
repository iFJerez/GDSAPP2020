import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import TextoBase from '../../../herramientas/textos/TextoBase'
import Icon from '../../../herramientas/IconAntDesign';
import * as constants from '../../../herramientas/Const';
import TextoBaseSinSizeAjust from '../../../herramientas/textos/TextoBaseSinSizeAjust'

const detalleASalaTarjetaIndicador = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.etiquetaOrigenDatos}>
                <TextoBase style={styles.sty_txt_origen}>{'Transaccional'}</TextoBase>
            </View>
            <View style={styles.indicadorContainer}>
                <View style={styles.indicadorValor}>
                    <TextoBase style={styles.sty_txt_valor}>{'90%'}</TextoBase>
                </View>
                <View style={styles.indicadorDesc}>
                    <TextoBase style={styles.sty_txt_indicador_ref}>{'Indicador'}</TextoBase>
                    <TextoBase style={styles.sty_txt_indicador_nombre}>{'Exhibicion'}</TextoBase>
                </View>
            </View>
            <View style={styles.separador}></View>
            <View style={styles.indicadorDiferenciaContainer}>
                <View style={styles.indicadorDiferenciaValor}>
                    <Icon name="up" size={constants.ICON_VERY_SMALL} color={constants.COLOR_PRIMARIO} /> 
                    <TextoBase style={styles.sty_txt_dif_valor} >{'20%'}</TextoBase>
                </View>
                <View style={styles.indicadorDiferenciaDesc}>
                    <TextoBaseSinSizeAjust 
                        style={styles.sty_txt_dif_ref}
                        numberOfLines={2}>
                            {'Diferencia semana anterior'}
                    </TextoBaseSinSizeAjust>
                </View>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '94%',
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: constants.COLOR_PRIMARIO,
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    etiquetaOrigenDatos: {
        position: 'absolute',
        right: 6,
        top: -7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 2,
        paddingHorizontal: 10   ,
        paddingVertical: 6,
        borderRadius: 5,
        backgroundColor: constants.COLOR_PRIMARIO,
        color: '#fff'
    },
    separador: {
        width: 3,
        height: 60,
        backgroundColor: constants.COLOR_GRIS_F,
        marginHorizontal: 20
    },
    indicadorDiferenciaContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicadorContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    indicadorDiferenciaValor: {
        flexDirection: 'row',
        flex: 6,
        height: 70,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    indicadorValor: {
        flex: 6,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicadorDesc: {
        flex: 2,
        height: 40,
        justifyContent: 'center'
    },
    indicadorDiferenciaDesc: {
        flex: 2,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sty_txt_origen: {
        color: '#fff',
        fontSize: 15,
        textTransform: 'uppercase'
    },
    sty_txt_valor: {
        color: constants.COLOR_PRIMARIO_OSCURO,
        fontSize: 60,
        fontWeight: '900'
    },
    sty_txt_dif_valor: {
        color: constants.COLOR_PRIMARIO,
        fontSize: 40,
        fontWeight: '900',
        paddingLeft: 10
    },
    sty_txt_indicador_ref: {
        color: constants.COLOR_GRIS_I,
        fontSize: 15
    },      
    sty_txt_indicador_nombre: {
        color: constants.COLOR_PRIMARIO,
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    sty_txt_dif_ref: {
        color: constants.COLOR_GRIS_I,
        fontSize: 15,
        flexWrap: 'wrap',
        width: 150
    },     
    view_indicador: {
    alignItems: 'center',
    flex: 1
      
    },
    view_detalle: {
      flex: 1,
      
    }
  });

  export default detalleASalaTarjetaIndicador;