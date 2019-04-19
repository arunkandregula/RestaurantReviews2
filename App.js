/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import Header from "components/Header";

const DATA_URL = "http://localhost:8080/places";
// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  state = {
    places: [],
    searchText: ""
  };

  componentDidMount() {
    /* global fetch */
    fetch(DATA_URL)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({
          places: resp
        });
      });
  }

  renderRestaurantList = () => {
    const map = this.state.places
      .filter(
        eachPlace =>
          !this.state.searchText ||
          eachPlace.name
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase())
      )
      .map((eachPlace, i) => {
        return (
          <View
            style={[
              styles.restaurantRow,
              { backgroundColor: i % 2 === 0 ? "white" : "#F3F3F7" }
            ]}
            key={eachPlace.name}
          >
            <View style={styles.edges}>
              <Text>{eachPlace.id}</Text>
            </View>
            <View style={styles.middleColumn}>
              <Text>{eachPlace.name}</Text>
              <Text style={{ color: "grey" }}>{eachPlace.address}</Text>
            </View>
            <View style={styles.edges}>
              <Text>info</Text>
            </View>
          </View>
        );
      });
    return map;
  };

  handleChangeText = searchText => {
    this.setState({
      searchText
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header text="Restaurant Reviews2"></Header>
        <TextInput
          style={styles.input}
          placeholder="Enter search text..."
          onChangeText={this.handleChangeText}
          value={this.state.searchText}
        />
        <ScrollView contentContainerStyle={styles.restaurantList}>{this.renderRestaurantList()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  restaurantRow: {
    flexDirection: "row"
  },
  middleColumn: {
    flex: 8
  },
  edges: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5"
  },
  restaurantList: {
    paddingTop: 30
  }
});
