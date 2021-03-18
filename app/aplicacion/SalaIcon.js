import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import * as constants from '../herramientas/Const'

// Imports: Redux Actions

class BottomTabIcon extends Component {
  render() {
    const { dataSala } = this.props;
    let badgeCount = null
    try {
       badgeCount = dataSala.salas.filter(word => word.estado===0).length
    } catch (error) {
       badgeCount = null
      
    }
  
    return (
      <View style={{ width: 20, height: 20, margin: 0 }}>
        <Icon name={'home'} size={constants.ICON_SMALL} color={constants.COLOR_PRIMARIO_CLARO}/>
  
      {badgeCount>0?
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            padding: 3,
            borderRadius: 6,
            // width: 12,
            // height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>:null}
    </View>
    );
  }
}

const mapStateToProps = state => ({
  dataSala: state.userReducer.dataSala
})

export default connect(mapStateToProps)(BottomTabIcon);


