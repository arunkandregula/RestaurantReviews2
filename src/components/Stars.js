import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row'
  },
  star: {
    color: "#FFD64C"
  }
});

const Stars = ({ rating }) => {
  const array = [...Array(Math.floor(rating))];
  const stars = array.map((_, i) => {
    return <Icon name="star" style={styles.star} key={`star-${i}`} />;
  });
  if (rating > array.length) {
    stars.push(<Icon name="star-half" style={styles.star} />);
  }
  return <View style={styles.stars} >{stars}</View>;
}

export default Stars;