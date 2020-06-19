import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextoBase from '../../../herramientas/textos/TextoBase'
import Icon from '../../../herramientas/IconAntDesign';
import * as constants from '../../../herramientas/Const';


const DetalleATareaTarjetaIndicador = (props) => {
    const difPositiva = props.diferencia >= 0

    return (
        <View style={styles.container}>
            <View style={styles.etiquetaOrigenDatos}>
                <TextoBase style={styles.sty_txt_origen}>{props.fuente}</TextoBase>
            </View>
            <View style={styles.indicadorContainer}>
                <View style={styles.indicadorValor}>
                    <TextoBase style={styles.sty_txt_ok}>{props.ok}</TextoBase>
                </View>
                <View style={styles.indicadorDesc}>
                    <TextoBase style={styles.sty_txt_indicador_ref}>{'Realizadas'}</TextoBase>
                </View>
            </View>
            <View style={styles.separador}></View>
            <View style={styles.indicadorContainer}>
                <View style={styles.indicadorValor}>
                
                    <TextoBase style={styles.sty_txt_total}>{props.total}</TextoBase>
                </View>
                <View style={styles.indicadorDesc}>
                    <TextoBase style={styles.sty_txt_indicador_ref}>{'Totales'}</TextoBase>
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
        paddingHorizontal: 20,
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
        width: 2,
        height: '50%',
        backgroundColor: constants.COLOR_GRIS_F,
        marginHorizontal: 20
    },
    indicadorDiferenciaContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1
    },
    indicadorContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 1,
        paddingLeft: 10
    },
    indicadorDiferenciaValor: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 10,
        flex: 2
    },
    indicadorValor: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 2
    },
    indicadorDesc: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 5
    },
    indicadorDiferenciaDesc: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 5
    },
    sty_txt_origen: {
        color: '#fff',
        fontSize: 15,
        textTransform: 'uppercase'
    },
    sty_txt_ok: {
        color: constants.COLOR_PRIMARIO,
        fontSize: 55,
        fontWeight: '900'
    },
    sty_txt_total: {
        color: constants.COLOR_PRIMARIO,
        fontSize: 55,
        fontWeight: '900'
    },
    sty_txt_dif_valor: {
        color: constants.COLOR_PRIMARIO,
        fontSize: 40,
        fontWeight: '900',
        paddingLeft: 10
    },
    sty_txt_dif_valor_neg: {
        color: constants.COLOR_SECUNDARIO,
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
        flex: 1
    },     
    view_indicador: {
    alignItems: 'center',
    flex: 1
      
    },
    view_detalle: {
      flex: 1,
      
    }
  });

  export default DetalleATareaTarjetaIndicador;