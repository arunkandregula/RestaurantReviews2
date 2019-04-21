import React, { Component } from 'react';

import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { View, Text } from 'react-native';

import RestaurantList from 'components/RestaurantList';
import RestaurantInfo from 'components/RestaurantInfo';
import About from 'components/About';
import AddReview from 'components/AddReview';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AppStackNavigator = createStackNavigator({
  Home: RestaurantList,
  Info: RestaurantInfo
}, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0066CC',
      },
      headerTintColor: "white",
      headerTitleStyle: {
        color: 'yellow'
      }
    }
  });

const BottomTabNavigator = createBottomTabNavigator({
  List: AppStackNavigator,
  About: About
}, {
    tabBarOptions: {
      labelStyle: {
        fontSize: 12
      },
      activeBackgroundColor: "#E6F0FA"
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const routeName = navigation.state.routeName
        const name = {
          'List': 'list',
          'About': 'info-circle'
        }[routeName]
        console.log(routeName)
        return <Icon name={name} color={tintColor} size={22} />;
      }
    })
  });

const ModalStackNavigator = createStackNavigator({
  Tabs: BottomTabNavigator,
  AddReview: AddReview
}, {
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  });

const AppContainer = createAppContainer(ModalStackNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}