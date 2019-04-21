import React from 'react';
import { View, Text } from 'react-native';

export default class RestaurantInfo extends React.Component {
  static navigationOptions = {
    title: 'Restaurant Info',
  }
  render() {
    return <View><Text>Info</Text></View>;
  }
}