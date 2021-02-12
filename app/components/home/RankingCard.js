import React, {Component} from 'react';
import { StyleSheet, View, Image} from 'react-native';
import Cadenas from "../../herramientas/Cadenas"
import TextHomeRankingSala from '../../herramientas/textos/TextHomeRankingSala'
import * as constants from '../../herramientas/Const'
import Indicadores from './RankingIndicadores'



export default class CardItems extends Component {




  render() {
    const {data} = this.props
    return (
      <View style={styles.container}>
           <View style={styles.sty_texto}>
                    <View style={styles.st_indicadores_texto}>   
                        <Cadenas cadena={data.cadena} />
                        <View style={styles.view_texto}>   
                            <TextHomeRankingSala  text={data.desc_sala}/>
                        </View>
                    </View>  


            </View>
            <View style={styles.sty_icon}>
                <Indicadores data={data.indicadores[0]} />
            </View>
        </View>
      
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.COLOR_BLANCO,
    borderColor: constants.COLOR_GRIS_F,
    borderTopWidth: 1,
    marginHorizontal: 2,
    marginVertical: 1,
    borderRadius: 5,
    padding: 1,
    flexDirection: 'row'
  },
  sty_texto: {flex: 3, alignItems: 'flex-start', paddingHorizontal: 10},
  sty_icon: {flex: 1,paddingVertical: 1,paddingLeft: 30, alignItems: 'center', alignContent: 'center'},
  st_indicadores_progres: { marginHorizontal: 1},
  st_indicadores_texto: { flex: 1, flexDirection: 'row', alignItems: 'center', alignContent: 'center'},
  sty_image: {width: 50, height: 50, paddingHorizontal: 5},
  st_icono: {width: '100%', height: '100%', alignItems: "center"},
  view_texto: {padding: 10},

});