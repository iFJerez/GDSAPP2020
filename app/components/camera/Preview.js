import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';


export default class Preview extends Component {

    closeHandler() {
        StatusBar.setBarStyle('default')
        this.props.navigation.goBack()
    }

    confirmHandler(data) {
        this.props.navigation.navigate('Inicio', data)
    }

    render() {
        StatusBar.setBarStyle('light-content')
        const { params } = this.props?.route
        const foto = params.foto ?
            (<Image
                source={{ uri: params.foto }}
                style={styles.img}
            />) : null;
        const data = {
            uri: params.foto,
            date: params.fecha
        }

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={styles.container}>
                    {foto}
                    <View style={styles.closeContainer}>
                        <TouchableOpacity onPress={() => this.closeHandler()}>
                            <View>
                                <Text style={styles.closeIcon}>X</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.ring}>
                            <TouchableOpacity onPress={() => this.confirmHandler(data)} style={styles.confirm}>
                                <Text style={styles.confirmText}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        position: 'absolute',
        // borderRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        top: 0,
        bottom: 80,
        left: 0,
        right: 0,
        zIndex: 0
    },
    closeContainer: {
        position: 'absolute',
        right: 20,
        top: 30
    },
    closeIcon: {
        color: '#fff',
        fontSize: 25, 
        opacity: 0.8,
        textShadowColor: '#000',
        textShadowRadius: 4,
        textShadowOffset: {width: 0, height: 0}
    },
    buttonContainer: { 
        flex: 0,
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center' 
    },
    confirm: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        width: 100,
        height: 40
    },
    confirmText: {
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }
    
})