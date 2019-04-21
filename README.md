# RestaurantReviews2

# Previous Steps:

1. Scaffolded a brand new react-native project.

2. Implemented a simple live search for restaurants from a server.

   - Dont forget to run json-server -p 8080 src/tests/fixtures/restaurants.json to serve the mock data for the list of restaurants.
   - Doesnt YET support scrolling. Will be implemented in next step.

3. Implemented the list using FlatList, which is memory performant.

4. Turn Last column <Text>Info<Text> to button.

- Button will turn it into button
  - One small issue is the flex:1 we gave to styles.edges may not be enough to fit a button so info may get wrapped. To fix it we may add minWidth=50
  - But Button element dont have those many config options.

5. Introducing Touchable buttons.
   Button component just works. But customizability is limited. All we could customize is color of the text. Thats it.
   So, lets replace it with fully customizable Touchable element. We have 3 :
   -TouchableOpacity
   -TouchableWithoutFeedback ( styles wont be applied as this is meant to wrap any other component. Eg. image.)
   -TouchableHighlight ( To customize the highlight color, we do it using attribute underlayColor="#0066CC" )

6. Replace fetch with axios.

- Fetch may have problems with how it handles cookies.
- Axios parses the results for us as json. ( With fetch, we have to parse results to json by ourselves. Its an extra step with fetch. )

7. Display local images in react-native

- Lets create package.json with simple contents:

```json
{
  "name": "images"
}
```

so that we can import images using absolute import path.
Eg.

```js
import image1 from "images";
```

- When we use

```
import PizzaImage from 'images/pizza.png'
```

react-native automatically detect the proper file to use
for the current device. It could be

1. images/pizza.png OR
2. images/pizza@2x.png OR
3. images/pizza@3x.png

4. Add Icons to a React Native App with React Native Vector Icons

- There are many high quality icon libraries, so we’ll use an npm vector icon library to display svg icons in our application. This also requires a link step, which changes the underlying iOS and Android projects by linking the library to the native code.
- yarn add react-native-vector-icons
- In order to use icons in react-native, we have to one extra link step.

```
react-native link
```

9. Show a New Screen with React Navigation and StackNavigator

- Navigation is not built in to React Native, so we’ll use the React Navigation library to set up a navigator for our application.

```
yarn add react-navigation
```

- Next, install react-native-gesture-handler. If you’re using the Expo managed workflow then you don’t need to do anything here, it’s included in the SDK. Otherwise:

```
yarn add react-native-gesture-handler
```

- Link all native dependencies:

```
react-native link react-native-gesture-handler
```

- [React Native Video](https://www.youtube.com/watch?v=MePfTc_PgzQ) Whats new in React Nav igation v3 ?

  1. React Navigation v3 has a reworked engine. It now has a React Native Gesture Handler to access the native OS's gesture API. It also known as something called React Nati
  2. It gives us Error: Unhandled JS Exception: Invariant Violation: The navigation prop is missing for this navigator. In react-navigation 3 you must set up your app container directly. More info: https://reactnavigation.org/docs/en/app-containers.html
  3. Main difference between v2 and v3 is in v2, AppContainer is created by default on top of StackNavigator.

```
const AppStackNavigator =createStackNavigator({
  Home: App
});
export default AppStackNavigator;
```

Where as, in v3, we have create AppContainer explicitly

```
const AppStackNavigator =createStackNavigator({
  Home: App
});
const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;
```

A more cleaner way to Have App class return this AppContainer. This will give us better control at the root component to pass props liek provider in redux.

Now in this step, we learned some basic navigation.

10. Customize stack navigator header with default

# Current Step:

11. Lets see how to pass data between screens when navigating using StackNavigator.
