import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Icon from '../../herramientas/IconSimple'


export default class Preview extends Component {

    closeHandler() {
        if(this.props.close) {
            StatusBar.setBarStyle('default')
            this.props.close()
        } else {
            return null
        }
    }

    actionHandler() {
        if(this.props.action) {
            this.props.action.method()
        } else {
            return null
        }
    }

    render() {
        StatusBar.setBarStyle('light-content')
        const { foto } = this.props
        const fotoPreview = foto?.uri ?
            (       <View>
                <Image
                source={{ uri: foto.uri }}
                style={styles.img}
            />
            <Text style={styles.actionText}>{JSON.stringify(this.props.foto.uri.length)}</Text>
            </View>
            ) : null;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={styles.container}>
                    {fotoPreview}
                    <View style={styles.closeContainer}>
                        <TouchableOpacity onPress={() => this.closeHandler()}>
                            <View>
                                <Icon name='md-close' size={30} color='#fff'/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.ring}>
                            <TouchableOpacity onPress={() => this.actionHandler()} style={styles.action}>
                                <Text style={styles.actionText}>{this.props.action ? this.props.action.label : 'Confirmar'}</Text>
                              
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
    action: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 50,
        width: 100,
        height: 40
    },
    actionText: {
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    actionText: {
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }
    
    
})