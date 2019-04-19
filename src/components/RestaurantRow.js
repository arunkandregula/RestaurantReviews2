import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

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
    alignItems: "center",
    minWidth: 50
  }
});


class RestaurantRow extends React.Component {
  state = {
    showInfo: false
  }
  handlePress = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  }
  render() {
    const { place, index } = this.props;

    return <View styles={{ backgroundColor: index % 2 === 0 ? "white" : "#F3F3F7" }}>
      <View
        style={styles.restaurantRow}
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
          <Button
            title="info"
            accessibilityLabel="info"
            color="#004567"
            onPress={this.handlePress}
          />
        </View>
      </View>
      {
        this.state.showInfo && <View>
          <Text>{place.name}</Text>
        </View>
      }
    </View >
  }
}

export default RestaurantRow;