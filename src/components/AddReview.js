import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  icon: {
    padding: 20,
    marginTop: 30,
    fontSize: 24,
    color: '#00CC66'
  }
});

export default class AddReview extends React.Component {
  handleClose = () => {
    this.props.navigation.goBack();
  }
  render() {
    return <View>
      <TouchableOpacity onPress={this.handleClose} >
        <Icon style={styles.icon} name="close" />
      </TouchableOpacity>
      <Text>Add Review</Text>
    </View>
  }
}