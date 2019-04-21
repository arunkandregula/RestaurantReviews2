import React, { Component } from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation'
import { View, Text } from 'react-native';

import RestaurantList from 'components/RestaurantList';
import RestaurantInfo from 'components/RestaurantInfo';


const AppStackNavigator = createStackNavigator({
  Home: RestaurantList,
  Info: RestaurantInfo
});

const AppContainer = createAppContainer(AppStackNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}