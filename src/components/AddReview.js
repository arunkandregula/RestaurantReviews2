import React from 'react';
import ReactNative, { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, ActivityIndicator, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Stars from 'components/Stars';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { v4 } from 'uuid';
import ReviewService from 'services/ReviewService';

const styles = StyleSheet.create({
  closeButtonSection: {
    backgroundColor: '#0066CC'
  },
  icon: {
    padding: 20,
    marginTop: 30,
    fontSize: 24,
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  containerContents: {
    flex: 1,
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 30
  },
  ratingText: {
    fontSize: 16,
  },
  input: {
    fontSize: 16,
    width: '95%',
    borderWidth: 1,
    padding: 5,
    margin: 10,
    borderColor: '#DDD',
    backgroundColor: '#F5F5F5'
  },
  nameSection: {
    alignItems: 'center'
  },
  ratingSection: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  stars: {
    flexDirection: 'row',
    marginTop: 10
  },
  star: {
    fontSize: 30
  },
  button: {
    backgroundColor: '#0066CC',
    margin: 20,
    padding: 10,

  },
  buttonText: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center'
  }
});

export default class AddReview extends React.Component {
  state = {
    name: '',
    rating: 0,
    comment: '',
    submitting: false
  }
  handleClose = () => {
    this.props.navigation.goBack();
  }
  changeRating = (num) => {
    this.setState({
      rating: num
    });
  }
  componentDidMount() {
    AsyncStorage.getItem("reviewer_name").then(name => {
      this.setState({
        name
      })
    });
  }
  renderStarRatingInput = () => {
    const stars = [1, 2, 3, 4, 5].map((num, i) => {
      return <TouchableOpacity key={`button-${num}`} onPress={this.changeRating.bind(null, num)}>
        <Icon
          name="star"
          key={`star-${num}`}
          style={styles.star}
          color={this.state.rating >= num ? "#FFD64C" : '#DDD'}
        />
      </TouchableOpacity>
    });
    return <View style={styles.stars}>{stars}</View>;
  }
  handleSubmit = () => {
    this.setState({ submitting: true })
    AsyncStorage.setItem("reviewer_name", this.state.name);
    ReviewService.saveReview({
      id: v4(),
      name: this.state.name,
      rating: this.state.rating,
      comment: this.state.comment
    }).then((result) => {
      this.setState({ submitting: false }, () => {
        this.props.navigation.goBack()
      })
    });
  }
  render() {
    return <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#FFF' }} behavior="padding" contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.closeButtonSection} onPress={this.handleClose} >
            <Icon style={styles.icon} name="close" />
          </TouchableOpacity>
          <View style={styles.containerContents}>
            <View style={styles.nameSection}>
              <Text style={styles.headerText}>Add Review</Text>
              <TextInput
                style={styles.input}
                placeholder="Name (Optional)"
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
              />
            </View>
            <View style={styles.ratingSection}>
              <Text style={styles.ratingText}>Your Rating</Text>
              {this.renderStarRatingInput()}
            </View>
            <View style={styles.reviewSection}>

              <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder="Enter Review..."
                multiline={true}
                numberOfLines={5}
                onChangeText={comment => this.setState({ comment })}
                value={this.state.comment}
              />
              {
                this.state.submitting &&
                <ActivityIndicator
                  size="large"
                  color="#0066CC"
                  style={{ padding: 10 }}
                />
              }

              <TouchableOpacity style={[styles.button, { backgroundColor: this.state.submitting ? 'grey' : '#0066CC' }]} onPress={this.handleSubmit} disabled={this.state.submitting} >
                <Text style={styles.buttonText}>Submit Review</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View >
      </KeyboardAvoidingView>
    </KeyboardAwareScrollView >
  }
}