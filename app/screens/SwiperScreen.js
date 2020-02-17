
import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ListItem from './SwiperScreenListItem';

const listData = [
  {key: '1. element'},
  {key: '2. element'},
  {key: '3. element'},
  {key: '4. element'},
  {key: '5. element'},
  {key: '6. element'},
  {key: '7. element'},
  {key: '8. element'},
  {key: '9. element'},
  {key: '10. element'},
  {key: '11. element'},
  {key: '12. element'},
  {key: '13. element'},
];




export default class SwipeableList extends Component {
  constructor(props) {
    super(props);
    this.renderSeparator = this.renderSeparator.bind(this);
    this.success = this.success.bind(this);
    this.setScrollEnabled = this.setScrollEnabled.bind(this);

    this.state = {
      enable: true,
      data: listData,
    };
  }

  renderSeparator() {
    return (
      <View style={styles.separatorViewStyle}>
        <View style={styles.separatorStyle} />
      </View>
    );
  }

  success(key) {
    const data = this.state.data.filter(item => item.key !== key);
    this.setState({
      data,
    });
  }

  setScrollEnabled(enable) {
    this.setState({
      enable,
    });
  }

  renderItem(item) {
    return (
      <ListItem
        text={item.key}
        success={this.success}
        setScrollEnabled={enable => this.setScrollEnabled(enable)}
      />
    );
  }

  render() {
    return (
      <FlatList
        style={this.props.style}
        data={this.state.data}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={({item}) => this.renderItem(item)}
        scrollEnabled={this.state.enable}
      />
    );
  }
}

const styles = StyleSheet.create({
  separatorViewStyle: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  separatorStyle: {
    height: 1,
    backgroundColor: '#000',
  },
});