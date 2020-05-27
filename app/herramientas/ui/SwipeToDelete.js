import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default class SwipeToDelete extends Component {

  renderRightAction = (progress) => {
    const pressHandler = () => {
      this.close();
    };

    return (
        <RectButton
          style={[styles.rightAction, { backgroundColor: 'tomato' }]}
          onPress={pressHandler}>
            <Ionicons 
              style={[styles.actionIcon]}
              name="ios-trash"
              size={30}
              color="#fff"
        />
        </RectButton>
    );
  };
  updateRef = ref => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
    this.props.onClose();
  };
  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={1}
        rightThreshold={60}
        renderRightActions={this.renderRightAction}>
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  actionIcon: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightAction: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
});
