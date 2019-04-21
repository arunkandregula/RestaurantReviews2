import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LogoImage from 'images/Logo.jpg';
const styles = StyleSheet.create({
  aboutContainer: {
    backgroundColor: 'orange',
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  logoImage: {
    height: 200,
    width: "80%"
  },
  desc: {
    alignItems: "center"
  },
  headerText: {
    fontSize: 25
  },
  text: {
    margin: 5,
    fontSize: 14,
    color: '#444'
  }
});
export default class About extends React.Component {
  render() {
    return <View style={styles.aboutContainer}>
      <View style={styles.headerView}><Text style={styles.headerText}>About Restaurant Review</Text></View>
      <Image style={styles.logoImage} source={LogoImage} />
      <View style={styles.desc}>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Text>
        <Text style={styles.text}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
    </View>
  }
}