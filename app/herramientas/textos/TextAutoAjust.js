
import React, { Component } from 'react';
import { Dimensions, Platform, PixelRatio, Text, View} from 'react-native';
import * as constants from '../Const'



// Screen Dimensions
const { height, width } = Dimensions.get('window');


const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;



// Screen: Counter
class TextAutoAjust extends React.Component {


  normalize(size) {
    const newSize = size * scale 
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  }

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
        fontSize: constants.SIZE_LETRA_X_LARGE,
        textAlignVertical: "center",
        textAlign: "center",
        color: constants.COLOR_PRIMARIO,
      }}>{text}</Text>
    </View>
    )
  }
}

export default (TextAutoAjust);


