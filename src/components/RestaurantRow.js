import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Image
} from 'react-native';
import Stars from './Stars';

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
    minWidth: 50,
  },
  button: {
    borderColor: '#0066CC',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12
  },
  info: {
    borderWidth: 1,
    padding: 10,
    alignItems: 'center'
  }
});


class RestaurantRow extends React.Component {
  state = {
    showInfo: false
  }
  handlePress = () => {
    this.props.navigation.navigate('Info', {
      place: this.props.place
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
          <Stars rating={place.rating} />
        </View>
        <View style={styles.middleColumn}>
          <Text>{place.name}</Text>
          <Text style={{ color: "grey" }}>{place.address}</Text>
        </View>
        <View style={styles.edges}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.handlePress}
            underlayColor="#0066CC"
          >
            <Text style={styles.buttonText}>Info</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View >
  }
}

export default RestaurantRow;