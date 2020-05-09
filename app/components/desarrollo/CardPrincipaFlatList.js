import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList} from 'react-native';
import CardFilas from './CardFilas'
import data from '../../api/salas.json'
import Icon from 'react-native-vector-icons/FontAwesome';
const fetchData = [
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": false},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": false},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": false},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": true},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": true},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": true},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": true},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": true},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": true},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": true},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": true},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": true},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": true},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": true},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": true},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": true},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": true},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": true},
  {"agrupador": "agrupador", "titulo": "Coca Cola Original 501", "subtitulo": "98765432", "presencia": true}
]



export default class CardPrincipal extends Component {

  
  
  funRecorrer(){


  return  data.map((fila, i) => {
      return(
  
             <CardFilas fila={fila} i={i} />

      )
    })

  }


  render() {

    const Item = ({titulo}) => {
        //console.log(titulo);
        return (<View>
          <Text style={{
            padding: 20
          }}>{titulo}</Text>
        </View>
      )
    }

    const Separator = () => {
      return (<View style={{
        backgroundColor: '#aaa',
        height: 1
      }}>

      </View>)
    }

  


    return (
      <View style={styles.container}>
          <Icon name="pencil" color="#098" size={50}></Icon>
            <Text> Card Principal </Text>
            <ScrollView horizontal={true}>
            <View style={styles.contFilas}>
            {this.funRecorrer()}
            </View>
            </ScrollView>
            <FlatList
              data={fetchData}
              ItemSeparatorComponent={() => (<Separator />)}
              // renderItem = {({item}) => {console.log(item)}}
              renderItem={({ item }) => <Item titulo={item.titulo}/>}
              keyExtractor={item => item.id} />
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