import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { image1, image2, image3, image4 } from '../images';
import Stars from './Stars';

const styles = StyleSheet.create({
  infoImage: {
    height: 100,
    width: 100,
    margin: 20
  },
  infoName: {
    fontSize: 30
  },
  infoAddress: {
    color: 'grey',
    marginBottom: 5
  },
  info: {
    flexDirection: 'row',
  },
  infoContents: {
    margin: 20
  }
});

export default class RestaurantInfo extends React.Component {
  static navigationOptions = {
    title: 'Restaurant Info',
  }
  getImage(imageName) {
    switch (imageName) {
      case '1.jpg': return image1;
      case '2.jpg': return image2;
      case '3.jpg': return image3;
      case '4.jpg': return image4;
    }
  }

  render() {
    const place = this.props.navigation.getParam('place');
    const image = this.getImage(place.image);
    return <View style={styles.info}>
      <Image source={image} style={styles.infoImage} />
      <View style={styles.infoContents}>
        <Text style={styles.infoName}>{place.name}</Text>
        <Text style={styles.infoAddress}>{place.address}</Text>
        <Stars rating={place.rating} />
      </View>
    </View>;
  }
}