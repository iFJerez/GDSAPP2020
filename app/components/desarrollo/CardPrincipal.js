import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, SectionList} from 'react-native';
import CardFilas from './CardFilas'
import data from '../../api/salas_deprecated.json'
import Icon from 'react-native-vector-icons/FontAwesome';
import fetchData from '../../api/envio.json';
import EnvioDetalle from '../../components/pendientesEnvio/EnvioDetalleCard'
import EnvioSucursalHeader from '../../components/pendientesEnvio/EnvioSucursalHeader'


export default class CardPrincipal extends Component {

  
  
  funRecorrer(){


  return  data.map((fila, i) => {
      return(
  
             <CardFilas fila={fila} i={i} />

      )
    })

  }


  render() {
    const dataSection = fetchData.map (({acciones, ...rest})=>({...rest, data: acciones }))
    console.log(dataSection);

    return (
      <View style={styles.container}>
          <Icon name="pencil" color="#098" size={50}></Icon>
            <Text> Card Principal </Text>
            <ScrollView horizontal={true}>
            <View style={styles.contFilas}>
            {this.funRecorrer()}
            </View>
            </ScrollView>
            <SectionList
              sections={dataSection}
              renderItem={({ item,index }) => (<EnvioDetalle data={{...item, numero: index+1}} />)}
              renderSectionHeader={({section}) => (<EnvioSucursalHeader data={section}/>)}
              />
     </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDD',
    padding: 5,
    margin: 10,
    borderRadius: 5,



    },

    contFilas: {
      flexDirection: 'row',


}

});