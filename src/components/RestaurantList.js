/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, FlatList, Image } from "react-native";
import Header from "components/Header";
import RestaurantRow from 'components/RestaurantRow';
import axios from 'axios';
import PizzaImage from 'images/pizza.png';

const DATA_URL = "http://localhost:8080/places";
// eslint-disable-next-line react/prefer-stateless-function
export default class RestaurantList extends Component {
  state = {
    places: [],
    searchText: ""
  };

  componentDidMount() {
    /* global fetch */
    axios(DATA_URL)
      .then(resp => {
        this.setState({
          places: resp.data
        });
      });
  }

  handleChangeText = searchText => {
    this.setState({
      searchText
    });
  };

  getData() {
    return this.state.places
      .filter(
        eachPlace =>
          !this.state.searchText ||
          eachPlace.name
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase())
      );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <Image source={PizzaImage} />
        </View>
        <Header text="Restaurant Reviews2"></Header>
        <TextInput
          style={styles.input}
          placeholder="Enter search text..."
          onChangeText={this.handleChangeText}
          value={this.state.searchText}
        />

        <FlatList
          data={this.getData()}
          renderItem={({ item, index }) => <RestaurantRow place={item} index={index} navigation={this.props.navigation} />}
          keyExtractor={(item => item.name)}
          initialNumToRender={24}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  input: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5"
  }
});
