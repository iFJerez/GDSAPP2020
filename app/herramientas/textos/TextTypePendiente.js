
import React from 'react';
import {Text, View} from 'react-native';
import * as constants from '../Const'




export default class TextTypeB extends React.Component {

render() {

const {text} = this.props;


    return (
      <View 
      style={[{
        flex:1,
          padding:2,
          justifyContent:"center",
          alignItems:'center',
          margin:2,
          
      }]}>
      <Text
      adjustsFontSizeToFit
      numberOfLines={1}
      style={{
        fontSize: constants.SIZE_LETRA_XXX_LARGE,
        textAlignVertical: "center",
        textAlign: "center",
        color: constants.COLOR_BLANCO,
      }}>{text}</Text>
    </View>
    )
  }
}




