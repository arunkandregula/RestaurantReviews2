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
import { image1, image2, image3, image4 } from 'images';

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
    this.setState({
      showInfo: !this.state.showInfo
    });
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
    const { place, index } = this.props;
    const image = this.getImage(place.image);

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
          <TouchableHighlight
            style={styles.button}
            onPress={this.handlePress}
            underlayColor="#0066CC"
          >
            <Text style={styles.buttonText}>Info</Text>
          </TouchableHighlight>
        </View>
      </View>
      {
        this.state.showInfo && <View style={styles.info}>
          <Text>Restaurant Info</Text>
          <Image
            source={image}
            style={{
              flex: 1,
              height: 100
            }}
            resizeMode="contain"
          />
        </View>
      }
    </View >
  }
}

export default RestaurantRow;