import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
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
  }
});

const RestaurantRow = ({ place, index }) => {
  return <View
    style={[
      styles.restaurantRow,
      { backgroundColor: index % 2 === 0 ? "white" : "#F3F3F7" }
    ]}
    key={place.name}
  >
    <View style={styles.edges}>
      <Text>{place.id}</Text>
    </View>
    <View style={styles.middleColumn}>
      <Text>{place.name}</Text>
      <Text style={{ color: "grey" }}>{place.address}</Text>
    </View>
    <View style={styles.edges}>
      <Text>info</Text>
    </View>
  </View>
}

export default RestaurantRow;